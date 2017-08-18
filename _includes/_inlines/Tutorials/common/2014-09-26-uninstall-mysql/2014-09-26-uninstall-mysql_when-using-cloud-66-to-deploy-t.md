<!-- post: -->


#When using Cloud 66 to [deploy to your own servers](http://help.cloud66.com/deployment/registered-servers), you might experience trouble with an existing MySQL installation on your server.

Along with our general operating system requirements for the deployment to your server to work, we also recommend that you uninstall all MySQL related files from your server before deploying.

Use apt to uninstall and remove all MySQL packages:



{%include _inlines/Tutorials/common/2014-09-26-uninstall-mysql/code_2014-09-26-uninstall-mysql_when-using-cloud-66-to-dep.md %}




Remove the MySQL folder:



{%include _inlines/Tutorials/common/2014-09-26-uninstall-mysql/code_2014-09-26-uninstall-mysql_when-using-cloud-66-to-dep.md %}




Delete all MySQL files on your server:



{%include _inlines/Tutorials/common/2014-09-26-uninstall-mysql/code_2014-09-26-uninstall-mysql_when-using-cloud-66-to-dep.md %}




Your system should no longer contain MySQL related files.
