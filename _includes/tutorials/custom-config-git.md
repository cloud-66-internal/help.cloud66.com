
CustomConfig git is a private git repository available on every application in your Cloud 66 account. This git repository is hosted by Cloud 66 and allows you to modify [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) files for your application using familiar git commands.

If you are familiar with [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) you know how it can be a powerful tool to customize configuration for [Nginx](/{{page.collection}}/references/nginx.html) or [HAProxy](/{{page.collection}}/how-to-guides/deployment/haproxy.html). 

The easiest way to modify CustomConfig files is through the UI. However if you would like to edit CustomConfig files in your favorite editor or enjoy git merge and flow control features you can use CustomConfig git.

### Getting Started with CustomConfig git
Each application on Cloud 66 has its own private CustomConfig git repository. You can find the URL of this repository under application’s information page (right hand side menu). There you will find a URL like this for CustomConfig git:

```shell
git@git1.cloud66.com:warmhearted-wondrous-tiger-9262.git
```

### Uploading your SSH public key

Like any other git repository, CustomConfig git requires a public SSH key for authentication. If you are not familiar with how git SSH key authentication works or how to generate your own SSH keys, you can read this great guide by Github: [Git SSH key setup](https://help.github.com/articles/generating-ssh-keys/).

You can upload your public SSH key at **Account / Keys / Public Key** when logged into your Cloud 66 account.

### Making changes to CustomConfig files

To make a change to a CustomConfig file you need to first clone the application’s CustomConfig git repository locally. Using git commandline this is possible with something like this:

```shell
$ git clone git@git1.cloud66.com:warmhearted-wondrous-tiger-9262.git
```

This will clone the CustomConfig git repository for the first time to your disk under a folder called `warmhearted-wondrous-tiger-9262`.

Now you can `cd` to this folder and see the list of files available to edit. By default, CustomConfig git repository contains all the CustomConfig files that are relevant to your application. For example, if you are using HAProxy as load balancer, you will see `haproxy.conf` as one of the files there. You might also see `nginx.conf` since you will always have web servers on your application.

Now open the file you want to change in your favorite text editor. Once done, save the file and commit your changes like any normal git workflow:

```shell
$ git commit -m "increate nginx pool size"
$ git push origin master
```

Done!

## CustomConfig git workflow

It’s important to know when your changes are going to be pushed to your servers.

### Changes made in CustomConfig UI

Any changes made to CustomConfig files in the UI will be applied to CustomConfig git repository as well.

Changing a CustomConfig file in the UI will be pushed to your servers immediately unless there is a merge conflict with what’s in the repository.

### Changes made through CustomConfig git

Changes made to CustomConfig git files will NOT be pushed to your servers until the next application deployment. This is prevent unwanted changes go live during a normal git workflow.

## Automatic updates

One of the most powerful features of CustomConfig is the automatic updates that are applied to your applications. For example if there is an improvement in the way nginx is configured or a security patch is released to HAProxy which requires configuration change, Cloud 66 will automatically make those changes to your CustomConfig files.

This is done by committing the changes to the CustomConfig git repository by Cloud 66. Those changes are visible on your git history and are performed by `git@cloud66.com` user.

## What's next?

* Learn how to customize your deployment workflow with [deploy hooks](/{{page.collection}}/tutorials/deploy-hooks.html).
* Learn how to add custom [environment variables](/{{page.collection}}/tutorials/env-vars.html) to your application
* Learn how to add a [load balancer](/{{page.collection}}/tutorials/load-balancing.html) to your application