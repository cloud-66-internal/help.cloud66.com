#When using Cloud 66 to [deploy to your own servers](http://help.cloud66.com/deployment/registered-servers), you might experience trouble with an existing MySQL installation on your server.

Along with our general operating system requirements for the deployment to your server to work, we also recommend that you uninstall all MySQL related files from your server before deploying.

Use apt to uninstall and remove all MySQL packages:



{%include _inlines/path_to_code %}



Remove the MySQL folder:



{%include _inlines/path_to_code %}



Delete all MySQL files on your server:



{%include _inlines/path_to_code %}



Your system should no longer contain MySQL related files.
