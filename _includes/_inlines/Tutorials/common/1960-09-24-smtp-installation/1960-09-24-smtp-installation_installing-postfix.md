<!-- usedin: [ _legacy_docker/Tutorials/1960-09-24-smtp-installation.md, _maestro/Tutorials/1960-09-24-smtp-installation.md, _node/tutorials/1960-09-24-smtp-installation.md] -->


## Installing Postfix

Postfix is a free and open-source mail transfer agent that routes and delivers electronic mail, and we'll use it to set up your SMTP server.

Start by [SSHing to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and installing it:



{%include _inlines/Tutorials/common/1960-09-24-smtp-installation/code_1960-09-24-smtp-installation_installing-postfix-sudoap.md %}




The installation will ask you what type of installation you prefer - select _Internet site_. It will also ask you to input your domain name.

That's it! You now have a SMTP server installed. We just need to make some configurations to start using it:



{%include _inlines/Tutorials/common/1960-09-24-smtp-installation/code_1960-09-24-smtp-installation_installing-postfix-sudona.md %}




In the _myhostname_ field, input your hostname:



{%include _inlines/Tutorials/common/1960-09-24-smtp-installation/code_1960-09-24-smtp-installation_installing-postfix-hostna.md %}




This one configuration is enough to have a functional SMTP server. Use [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to automate this procedure on any new servers you fire up through Cloud 66. You can go ahead and save and exit the configuration, and reload to put these changes into effect:



{%include _inlines/Tutorials/common/1960-09-24-smtp-installation/code_1960-09-24-smtp-installation_installing-postfix-sudoet.md %}




You can confirm that the server is running by issuing `nc localhost 25`, and you can also send a test email with `sendmail sample@example.com`.

Once you enter the command, you can type your message and hit _CTRL-D_ to send it.

