#Depending on your application, you may need to have persisting local storage through multiple deploys by creating a symbolic link to a shared folder.

Cloud 66 uses Capistrano to deploy your application, which will create a new folder for every deployment and create a symbolic link to that folder
so that it can be served. This means that folders containing uploaded files for example also need a symbolic link.

There are generally two ways you can accomplish this.

