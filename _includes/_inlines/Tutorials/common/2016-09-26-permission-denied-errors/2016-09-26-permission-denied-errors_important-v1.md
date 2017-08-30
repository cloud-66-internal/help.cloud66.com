<!-- usedin: [ _rails/Tutorials/2016-09-26-permission-denied-errors-v1.md] -->


## Important

An example error you'd receive in the above case could look like **Errno::EACCES (Permission denied...)**

To resolve these issues you can do one of the following:

1.  Configure the gem to use one of the paths above.
2.  Use a deploy hook to permission the required path after deployment.

