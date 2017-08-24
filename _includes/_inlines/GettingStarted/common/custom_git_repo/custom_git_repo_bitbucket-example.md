<!-- usedin: [ _legacy_docker/getting-started/custom-git-repo.md, _maestro/getting-started/custom-git-repo.md, _node/getting-started/custom-git-repo.md, _rails/getting-started/custom-git-repo.md, _skycap/getting-started/custom-git-repo.md] -->


### BitBucket example

1.  Adding the SSH key globally
   
    To add the SSH key globally, click Manage account in the top right hand corner, and then SSH keys in the left menu (you can also choose a name).
2.  Adding the SSH key to a specific repository

    To add the SSH key to a specific repository, first access the Settings menu for that repository (top right), then click Deployment keys and paste your key there.

Once this is done, use a Git URL in the following format in the Cloud 66 UI:

`git@bitbucket.org:<username>/<repository>.git`
