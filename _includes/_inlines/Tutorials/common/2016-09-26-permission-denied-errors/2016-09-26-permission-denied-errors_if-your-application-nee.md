

If your application needs to write back to your web server then you may have permission errors.
Your webserver runs under a different user to the user that does your deployment.
This user (*nginx*) does not have elevated permissions, and so does not have write access to your filesystem (except explicitly to the */tmp* and the *$STACK_PATH/tmp* folders).

This drastically improves security on your application. However, some gems/applications require the ability to write to local files that are not in the above folders by default.




