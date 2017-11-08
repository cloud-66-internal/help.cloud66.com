

### Example 1: Specifying a Docker version

In this example, we'll set the version of Docker on your stack to 1.4.1. The top level node is the stack environment - the example below will therefore apply to the production environment.



{%include _inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_example-1-specify-v1.md  product = include.product %}




This is how it works:

**production** The top node is the stack environment node. 

**docker** The second level is the *application type* to apply the settings to.

**configuration** As part of the application type, set configuration variables.

**version** Lastly, the configuration variable you wish to specify.




