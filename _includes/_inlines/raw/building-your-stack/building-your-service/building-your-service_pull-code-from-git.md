---
post: 
---

## Pull code from Git

For BuildGrid to pull code from your Git repository and build your image, you will need to provide a `git_url` and `git_branch`. Simply place a Dockerfile in your repository to determine how the image should be built. These images are built continuously from your source code and are stored in a private Docker image repository, available to be used locally or pushed to production servers.

You can pass environment variables into your Dockerfile during this build process with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the stack.

