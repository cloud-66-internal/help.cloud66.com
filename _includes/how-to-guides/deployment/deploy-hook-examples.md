## Overview

Deploy hooks are a powerful tool for customising the components on your servers, and automating the setup process whenever you add new servers. We've put together some examples of the most common use cases, but there an almost infinite number of possibilities. Essentially if you can install it on a Linux server or code it into a shell script, you can run it from a deploy hook.

## Querying server metadata 

You can query a server's metadata (including deployment details) using the following command:

```shell
curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY
```
You can use this command in a deploy hook, for example:

```yaml
first_thing:
- target: any
  execute: true
  apply_during: all 
  sudo: false
  inline: |
    #!/usr/bin/env bash
    current_deployer=$(curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment/triggered_by | jq -r '.response')
    echo "Deployed by: $current_deployer"
```
For more details please read our full [Querying server metadata](/{{page.collection}}/how-to-guides/deployment/querying-server-metadata.html) doc.

## How do I install a package or library on each server I deploy?

If your application relies on a package or software library that is not installed by default by Ubuntu, or by Cloud 66, you can use a [deploy hook](/{{page.collection}}/tutorials/deploy-hooks.html) to fetch and install the package whenever you deploy a server.  

For this example we're going to use **glances** - a popular FOSS process monitor - but you can install literally anything that has an Ubuntu repository using this method. 

We need to set up our deploy hook to install the package from the Ubuntu. Every deploy hook needs:

- **a hook point** - in this case we are using the `first_thing` hook point to ensure this is installed as early as possible in case any other processes depend on it
- A **hook type** - we are using the `command` hook type
- A **target** -  in this case we are using `any` because we want the package on all our servers
- A **hook field** - this is where we put the commands we're going to run.

Our hook code will look like this:

{% highlight yaml %}
first_thing:
 - command: sudo apt-get install glances
   target: any
   execute: true
{% endhighlight %}

Now that we have our hook code ready, we need to add it to our application. We do this by creating a file in the `/.cloud66` directory of our repo called `deploy_hooks.yml` and dropping in the YAML code we just wrote above. If you're not well versed in YAML, it's often helpful to use an [online linter](http://www.yamllint.com/) to test that your code is valid and conformant. 

Once you have added the `deploy_hooks.yml` file to your repo you can deploy (or redeploy) your application and glances will be installed during the process. To test that it is installed correctly you can SSH into your server and run `glances` - it should bring up the monitoring interface.

## How do I install a specific (non-standard) version of a package or library?

If your application depends on a specific version of a Linux package or software library, the best way to ensure the correct version is installed is by using a [deploy hook](https://help.cloud66.com/maestro/tutorials/deploy-hooks.html). 

To illustrate how this is done we're going to use ImageMagick - the beloved and ubiquitous image processing software installed on millions of servers around the world.  Suppose your application relies on an older version of ImageMagick - in this case [Version 6.9.9-51.](https://github.com/ImageMagick/ImageMagick6/releases?after=6.9.10-0)

We need to set up our deploy hook to download the [source code](https://github.com/ImageMagick/ImageMagick6/archive/6.9.9-51.tar.gz) for this version and then build and compile it. Every deploy hook needs:

- **a hook point** - in this case we are using the `first_thing` hook point to ensure this is installed as early as possible in case any other processes depend on it
- A **hook type** - we are using the `inline` hook type - we'll go into the details of this later
- A **target** -  in this case we are using `rails` but `any` would also work
- A **hook field** - this is where we put the commands we're going to run. We're going to use [these instructions](https://imagemagick.org/script/install-source.php) as the basis for our commands.

Hooks are written in YAML and ours will look like this:

{% highlight yaml %}
first_thing:
- target: rails
  execute: true
  apply_during: build_only 
  sudo: true
  inline: |
    #!/usr/bin/env bash
    set -e
    version="6.9.9-51"
    echo "Installing ImageMagick v$version"

    echo "1. Fetching Tarball"
    curl -sL https://codeload.github.com/ImageMagick/ImageMagick6/tar.gz/"$version" --output /tmp/image-magick-"$version".tar.gz 

    echo "2. Extracting Tarball"
    cd /tmp
    mkdir -p /opt/image-magick/v"$version"
    tar -xvzf image-magick-"$version".tar.gz -C /opt/image-magick/v"$version" --strip 1

    echo "3. Building ImageMagick"
    cd /opt/image-magick/v"$version"
    ./configure
    make
    make install 
    ldconfig /usr/local/lib

    echo "4. Tidying up"
    rm -f /tmp/image-magick-"$version".tar.gz

    echo "ImageMagick install complete!"
{% endhighlight %}

Two things to take note of here:

1. In order to execute properly, the script needs a place on the disk to run - we are using the `/tmp/` directory
2. We have added another option - `apply_during` - this allows us to set our hook to only run when a server is first built, and not on every deploy. You can find out more about these options in our reference doc.

Now that we have our hook code ready, we need to add it to our application. We do this by creating a file in the `/.cloud66` directory of our repo called `deploy_hooks.yml` and dropping in the YAML code we just wrote above. If you're not well versed in YAML, it's often helpful to use an [online linter](http://www.yamllint.com/) to test that your code is valid and conformant. 

Once you have added the `deploy_hooks.yml` file to your repo you can deploy (or redeploy) your application and version 6.9.9-51 of ImageMagick will be installed during the process. To test that it is installed correctly you can SSH into your server and run `identify -version`.