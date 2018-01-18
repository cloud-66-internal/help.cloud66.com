---
layout: post
template: one-col
title: Installing SMTP on your server
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


## Installing Postfix

Postfix is a free and open-source mail transfer agent that routes and delivers electronic mail, and we'll use it to set up your SMTP server.

Start by [SSHing to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and installing it:

```
$ sudo apt-get install postfix
```

The installation will ask you what type of installation you prefer - select _Internet site_. It will also ask you to input your domain name.

That's it! You now have a SMTP server installed. We just need to make some configurations to start using it:

```
$ sudo nano /etc/postfix/main.cf
```

In the _myhostname_ field, input your hostname:

```
myhostname = example.com
```

This one configuration is enough to have a functional SMTP server. Use [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to automate this procedure on any new servers you fire up through Cloud 66. You can go ahead and save and exit the configuration, and reload to put these changes into effect:

```
$ sudo /etc/init.d/postfix reload
```

You can confirm that the server is running by issuing `nc localhost 25`, and you can also send a test email with `sendmail sample@example.com`.

Once you enter the command, you can type your message and hit _CTRL-D_ to send it.


## Configuring Rails

Add the following code (or variation thereof) to your Rails application environments configuration to send email through this SMTP server:

```
config.action_mailer.delivery_method = :sendmail
config.action_mailer.smtp_settings = {
  :address => "localhost",
  :port => 25,
  :domain => "example.com",
}
```

