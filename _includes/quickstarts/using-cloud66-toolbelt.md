## What is Toolbelt?

Cloud 66 Toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line, and is available for Linux, Mac and Windows.

#### Note
<div class="notice"><p>
Many Toolbelt commands use the word "stack" which is now referred to as "application" throughout these docs. They are functionally equivalent terms for the purposes of the Toolbelt.
</p></div>

## Install Toolbelt

To get started, simply download the [toolbelt executable](https://app.cloud66.com/toolbelt), unzip and copy it to a directory accessible in your PATH. On Mac OS X, your PATH is likely `/usr/local/bin`, but you can run `echo $PATH` in your terminal to determine your specific path. Placing the executable in this folder allows it to be used globally.

## Initialize Toolbelt

Before using Toolbelt, you need to link it to your Cloud 66 account. You can do this by issuing one of the available commands, for example:

```
cx stacks list
```

This will automatically open your default browser and take you to your Cloud 66 dashboard (you need to be logged in). 

It will then ask for your authorization to allow Toolbelt to view, edit, redeploy and administrate your applications and servers. The Dashboard will confirm that it has completed authorization and you can then close the window and start using Toolbelt right away.

### Advanced

The authorization information is stored on your computer in the **~/.cloud66/cx.json** file. Removing this file will remove the authorization code from your client.

#### Note
<div class="notice"><p>To deauthorize Toolbelt, login to your Cloud 66 account and click on the <em>Revoke access</em> button under your <em>Account</em> page.</p></div>

{% if include.product == 'Maestro' %}

## Access your servers via Toolbelt

One of the most useful features of Toolbelt is the ability to quickly and easily SSH into any of your servers.

To connect to a server for any application: 

1. Install Toolbelt 
2. Visit the appropriate **Application Overview** via the [Dashboard](https://app.cloud66.com/dashboard)
3. Click on the *Servers* tab at the top of the page
4. Click on the name of the server in question
5. Copy the *Connect with toolbelt* command in the yellow box on the right of the server detail screen
6. Paste that command into your desktop terminal client.

{% endif %}

## View Toolbelt information

- `cx help` lists available commands
- `cx info` shows information about your toolbelt
- `cx --version` outputs your toolbelt version
- `cx stacks list` lists available applications
- `cx servers list -s 
` lists available servers for a given application
- `cx open -s 
` opens your web browser to visit the front-end of your application

## Profiles (multiple account support)

When you join a Team on Cloud 66, your Toolbelt will automatically work with the applications you have access to under that team's account.

If you have more than one Cloud 66 account (i.e. you are the owner of more than one account and not just a team member), then you will need to set up profiles in Toolbelt to switch between your accounts.

### Note
<div class="notice notice-warning"><p>
The <kbd>--account</kbd> function is now deprecated and has been replaced by cx profiles </p></div>

## Creating a cx profile

Before you start **make sure you're logged into the account you'd like associate with this new profile** on your *default* web browser (the importance of this is explained below). 

Next create a new profile in Toolbelt using the following command:

    cx config create A_NICE_NAME

...where `A_NICE_NAME` is the (arbitrary) name you'd like to use for that profile. 

Then tell Toolbelt to use that new profile:

    cx config use A_NICE_NAME

Finally, issue a command to force Toolbelt to authenticate the new profile. For example:

    cx stacks list

...this will take you through the authorization process for the account you'd like to associate with the new profile. See the [Initialize Toolbelt](#initialize-toolbelt) section above for more details on how this works.

### Careful
<div class="notice notice-warning"><p>
Make sure you are logged into the correct (alternate) account on the Cloud 66 dashboard before you start this process or it may not work correctly.</p></div>

## Switching between profiles

To switch between profiles, use the following command:

    cx config use NAME

So, following our example above, the command would be `cx config use MY_NICE_NAME`. 

#### Note
<div class="notice"><p>
You always have a <kbd>default</kbd> profile which cannot be deleted or renamed. </p></div>

## More help with profiles

For more info on profiles (including organizations, renaming, deleting and updating) please read our [detailed reference guide](/{{page.collection}}/references/toolbelt.html#profile-commands).


## Update Toolbelt

Toolbelt updates are released periodically to improve the functionality available through the command line, and these are normally applied automatically in the background. Whenever a command is executed, the toolbelt will check whether or not a newer version is available and do a silent update. You can also update manually with `cx update`.

If you install the toolbelt in a shared folder, you may need to elevate your permissions in order to run an update. In this case, you can simply run `sudo cx update`. You can then check which version you are using by running `cx -v`.


## Toolbelt shortcuts

**Application links**

To make life easier for you, the Cloud 66 toolbelt **detects the Git URL and branch for each directory it is run in**. As such, you won't have to specify which application you want to run the toolbelt on if you're in the git folder and branch of one of your applications.

**Naming shortcuts**

We apply naming shortcuts to both application and server names, as well as server roles in the toolbelt.

We just need you to type enough of a name for it to be unique. For example, if you only have one application that starts with _m_, you can simply type _m_.
Similarly, if you only have one web server, you can type _w_ instead of _web_.

**Auto-complete**

Follow our [instructions](https://github.com/cloud66/cx/wiki/Setting-up-Auto-complete-for-the-toolbelt) to add an auto-complete feature to your toolbelt, which will make typing commands out by hand much quicker.


## Contributing

Fork our [repository](https://github.com/cloud66/cx), create a feature branch (and commit/push your changes) and then create a pull request.

