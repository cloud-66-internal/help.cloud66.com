---
menuheaders: [ "What is toolbelt?", "Install the toolbelt?", "Initialize the toolbelt", "Advanced", "Note", "View toolbelt information", "Multiple Account Support", "Update the toolbelt", "Toolbelt shortcuts", "Contributing" ]
layout: post
template: one-col
title: Toolbelt introduction
categories: Toolbelt
lead: ""
legacy: false

permalink: /:collection/:path
---


## What is toolbelt?

The Cloud 66 toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line, and is available for Linux, Mac and Windows.


## Install the toolbelt?

To get started, simply download the [toolbelt executable](https://app.cloud66.com/toolbelt), unzip and copy it to a directory accessible in your PATH. On Mac OS X, your PATH is likely `/usr/local/bin`, but you can run `echo $PATH` in your terminal to determine your specific path. Placing the executable in this folder allows it to be used globally.


## Initialize the toolbelt

Before using the toolbelt, you need to link it to your Cloud 66 account. You can do this by issuing one of the available commands, which will return a URL that you need to copy and paste into your browser.

```
$ cx stacks list
```
Following this URL will redirect you to your account (you need to be logged in) and ask for your authorization to allow the toolbelt to view, edit, redeploy and administrate your stacks and servers.

### Advanced

The authorization information is stored in the **~/.cloud66/cx.json** file. Removing this file will remove the authorization code from your client.

Once authorized, you will be presented with an authorization code to paste into your toolbelt.

### Note

To deauthorize the toolbelt, login to your Cloud 66 account and click on the _Revoke access_ button under your _Account_ page.

## View toolbelt information

- `cx help` lists available commands
- `cx info` shows information about your toolbelt
- `cx --version` outputs your toolbelt version
- `cx stacks list` lists available stacks
- `cx servers list -s 
` lists available servers in a given stack
- `cx open -s 
` opens your web browser to visit the app server in your stack

## Multiple Account Support

By default, Toolbelt can work with all of the accounts you are member of. Once you accept a Team membership on Cloud 66, your Toolbelt will automatically work with the stacks you have access to under that team's account without any change.

If you have more than 1 Cloud 66 account (you are the owner of more than 1 account and not just a team member), then you can use the `--account` global option when using Toolbelt. Using the `account` option you can give your accounts different names and switch between them. Here is an example:

```
$ cx --account=personal stacks list
```

This will ask for Toolbelt authorization when run the first time. Once authorized, it will work as expected.

To add a new account, simply change the value of the `account` parameter:

```
$ cx --account=work stacks list
```

This will again ask for authorization the first time you run it. Once authorized you can switch between `personal` and `work` (or any other name you would like) by just adding the `--account` option.


## Update the toolbelt

Toolbelt updates are released periodically to improve the functionality available through the command line, and these are normally applied automatically in the background. Whenever a command is executed, the toolbelt will check whether or not a newer version is available and do a silent update. You can also update manually with `cx update`.

If you install the toolbelt in a shared folder, you may need to elevate your permissions in order to run an update. In this case, you can simply run `sudo cx update`. You can then check which verison you are using by running `cx -v`.


## Toolbelt shortcuts

**Stack links**

To make life easier for you, the Cloud 66 toolbelt **detects the Git URL and branch for each directory it is run in**. As such, you won't have to specify which stack you want to run the toolbelt on if you're in the git folder and branch of one of your stacks.

**Naming shortcuts**

We apply naming shortcuts to both stack and server names, as well as server roles in the toolbelt.

We just need you to type enough of a name for it to be unique. For example, if you only have one stack that starts with _m_, you can simply type _m_.
Similarly, if you only have one web server, you can type _w_ instead of _web_.

**Auto-complete**

Follow our [instructions](https://github.com/cloud66/cx/wiki/Setting-up-Auto-complete-for-the-toolbelt) to add an auto-complete feature to your toolbelt, which will make typing commands out by hand much quicker.


## Contributing

Fork our [repository](https://github.com/cloud66/cx), create a feature branch (and commit/push your changes) and then create a pull request.

