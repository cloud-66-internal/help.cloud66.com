### Passphrase protected keys

You cannot use passphrase protected SSL certificate keys with Nginx. Using passphrase protected certificate keys will cause Nginx to prompt for the manual entry of passphrase at restart which will break the automatic deployment flow (and restart of Nginx after a server restart).

The symptoms of this is that your deployment gets stuck in the _Restarting Nginx_ step.

You can simply use a non-passphrase-protected version of your SSL certificate key when [adding an SSL key to your stack](/articles/ssl-certificate). Use the following command to do it (on your development computer):



{%include _inlines/path_to_code %}



You will be prompted for your passphrase and the output will be generated after that.

