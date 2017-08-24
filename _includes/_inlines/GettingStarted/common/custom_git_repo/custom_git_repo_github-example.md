<!-- usedin: [ _legacy_docker/getting-started/custom-git-repo.md, _maestro/getting-started/custom-git-repo.md, _node/getting-started/custom-git-repo.md, _rails/getting-started/custom-git-repo.md, _skycap/getting-started/custom-git-repo.md] -->


### GitHub example

1.  Adding the SSH key globally

    To add the SSH key globally, click the Account settings in the top right hand corner, and then SSH and GPG keys in the left menu (you can also choose a name).
2.  Adding the SSH key to a specific repository
    
    To add the SSH key to a specific repository, first access the Settings menu for that repository. Now simply click Deploy keys and paste your key there (you can also choose a name)
    
Once this is done, use a Git URL in the following format in the Cloud 66 UI:

`git@github.com:<username>/<repository>.git`

