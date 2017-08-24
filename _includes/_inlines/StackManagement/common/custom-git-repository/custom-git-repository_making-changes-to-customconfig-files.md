

### Making changes to CustomConfig files

To make a change to a CustomConfig file you need to first clone the stack's CustomConfig git repository locally. Using git commandline this is possible with something like this:



`$ git clone git@git1.cloud66.com:warmhearted-wondrous-tiger-9262.git`



This will clone the CustomConfig git repository for the first time to your disk under a folder called `warmhearted-wondrous-tiger-9262`.

Now you can `cd` to this folder and see the list of files available to edit. By default, CustomConfig git repository contains all the CustomConfig files that are relevant to your stack. For example, if you are using HAProxy as load balancer, you will see `haproxy.conf` as one of the files there. You might also see `nginx.conf` since you will always have web servers on your stack.

Now open the file you want to change in your favourite text editor. Once done, save the file and commit your changes like any normal git workflow:



{%include _inlines/StackManagement/common/custom-git-repository/code_custom-git-repository_making-changes-to-customconfig-f.md %}




Done!

