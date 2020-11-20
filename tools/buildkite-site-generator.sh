#!/usr/bin/env bash
set -e
# load env vars
source ~/.profile

if [[ -z "$BUILDKITE_BUILD_ID" ]] || [[ -z "$BUILDKITE_BRANCH" ]]; then
  echo "FATAL: Build env vars missing"
  exit 22
fi
uid="$BUILDKITE_BUILD_ID"
tmpfile="/tmp/help_links-$uid.yml"
pwd=$(pwd)
echo " ---> Generating site via docker/jekyll"
echo "pwd_path: $pwd"
# generate jekyll files in _site
mkdir -p _site
chmod 0777 _site
docker run --rm  --volume="$pwd:/srv/jekyll" -it jekyll/builder:4 jekyll build
sudo chown -R buildkite-agent:buildkite-agent _site
echo " ---> Generating help_links.yml via tools/site-generator.rb"
# run the site generator
sudo tools/site-generator.rb --directory="$pwd/_site" --output="$pwd/tools/help_links.yml"
sudo rm -rf _site
# commit if changed
echo " ---> testing yml file for differences"
set +e
git ls-files -m | grep help_link.yml
if [[ "$?" == "0" ]]; then
  echo " ---> A difference was found"
  cp "$pwd/tools/help_links.yml" "$tmpfile"
  echo " ---> Preparing to commit changes"
  current_ref=$(git rev-parse HEAD)
  echo " ---> current ref is $current_ref"
  echo " ---> checking out $BUILDKITE_BRANCH"
  git fetch
  git checkout -f "$BUILDKITE_BRANCH"
  git pull origin "$BUILDKITE_BRANCH"
  echo " ---> Committing changes"
  cp "$tmpfile" "tools/help_links.yml"
  git commit "tools/help_links.yml" -m 'Automated update [ci skip]'
  echo " ---> Pushing changes"
  git push origin "$BUILDKITE_BRANCH"
  echo " ---> Switching back to detached branch"
  git checkout -f "$current_ref"
  cp "$tmpfile" "tools/help_links.yml"
  set -e
else
  echo " ---> No difference found"
fi
# remove the seed file
rm -f "$tmpfile"

echo "---> I'm Mr. Meeseeks! Look at me!"
