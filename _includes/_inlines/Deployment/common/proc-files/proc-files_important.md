<!--  usedin: [ _rails/deployment/proc-files.md] -->


### Important

Specifying processes in a Procfile currently only apply to Rack-based stacks, not Docker stacks.




Should you wish to use different processes in different environments, you can name your Procfile in the following convention:



{%include _inlines/Deployment/common/proc-files/code_proc-files_important-code.md  product = include.product %}




For example, to limit specific processes to running only in your development environment, call the file 
Procfile_development
.

