## Overview

Deploy hooks are YAML-formatted configuration sets that that allow you to **automate actions** (such as running commands) at various points during the build and deployment process for your applications. If you’ve never used hooks before, please follow our [tutorial](/{{page.collection}}/tutorials/deploy-hooks.html) to get a grasp of the basics.

Deploy hooks are a powerful tool for customising the components on your servers, and automating the setup process whenever you add new servers. However they require careful configuration to work exactly as expected. This guide will explain all the necessary detail for you to write your own custom hooks. For am exhaustive list of all the options available, please consult our [Reference guide](/{{page.collection}}/references/deploy-hooks-syntax.html).

## Creating or editing deploy hooks

{% if include.product == 'rails' or include.product == 'node' %}
All deploy hooks for Rails applications use a file called *deploy_hooks.yml*. This file is found within a folder named *.cloud66*, which is in turn located in the root of your source code.

```bash
/.cloud66/deploy_hooks.yml
```

This file should be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate it.
{% endif %}
{% if include.product == 'maestro' %}
Deploy hooks for a Maestro application are managed via the Dashboard. The hooks must be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate them.

To add or edit hooks:

1. Open the Application Overview from your Dashboard
2. Click on *Configuration files* in the **Application** panel on the right of the screen
3. Click on the *Deploy Hooks* tab at the top of the **Configure Services**
4. Make your edits
5. Click *Preview* and check there are no errors
6. Add a commit message and click *Commit to server*

{% endif %}

Every deploy hook needs, at a minimum:

- a **hook point** - where in the deployment process the hook must be invoked
- a **hook type** - either a `command` or one of the two `script` types
- a **target** - which type(s) of servers will use this hook
- a **hook field** - the command or script being run (or invoked)

## Understanding hook points and ordering

Hook points are used to define the point in your deployment process at which a hook should be invoked. This is obviously critical when there are tight dependencies between the components of your application (i.e. one component relies on another component being installed first), but it is also important in terms of what actions and commands are possible. For example, running tasks against a database before the database server is installed will not work!

It's important to understand the order in which hook points will occur in the flow of deployment. The simplified deployment process below shows where each deploy hook is triggered. Hooks are marked in ***bold italic***. Some hooks have several possible values (`x`, `y`, `z`). Click on the hook name to see a list of available options:

### Deployment process (simplified)

1. Server is fired up
2. Operating system and standard system components installed → ***first_thing***
3. ***before_agent*** → Cloud 66 Agent is installed → ***after_agent***
4. [***before_x***](/{{page.collection}}/references/deploy-hooks-syntax.html#beforex) → Database is installed → [***after_x***](/{{page.collection}}/references/deploy-hooks-syntax.html#beforex)
5. [***before_y***](/{{page.collection}}/references/deploy-hooks-syntax.html#beforey) → Database replication is configured → [***after_y***](/{{page.collection}}/references/deploy-hooks-syntax.html#beforey)
6. ***before_data_mount*** → Data is mounted → ***after_data_mount*** (GlusterFS specific)
7. ***custom_server*** (runs on custom servers only)
9. ***before_nginx*** → NGINX is installed → ***after_nginx***
10. ***before_docker*** → Docker is installed ***after_docker***
11. **last_thing**

### Notes

- `x`, `y` and `z` represent `database & storage engine installation` , `replication configuration` and `application framework installation` respectively.
- The **last_thing** hook runs only when ALL servers reach that point

For more details on hook points, please read our [Reference guide](/{{page.collection}}/references/deploy-hooks-syntax.html).

## Hook types

There are different types of deploy hooks, and the fields available (and required) vary by type:

1. **Snippets:** use “off the shelf” scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or other third parties.
2. **Commands:** run standard Linux shell commands.
3. **Inline Scripts:** use your own inline shell scripts for more complex procedures
{% if include.product == 'rails' or include.product == 'node' %}4. **Existing Scripts:** use your own existing scripts for more comprehensive procedures{% endif %}

## Using command hooks

The simplest type of hook is the `command`. This simply executes a command in the operating system as part of the deployment process.

You may recognise this example from our [tutorial](/{{page.collection}}/tutorials/deploy-hooks.html):

```yaml
production: # Environment
    first_thing: # Hook point
      - command: apt-get install nmap -y # Hook type
        target: any # Hook fields
        execute: true
```

This hook will install the `nmap` package on our server during the deployment process. You can find all the avaible options for command hooks in our reference guide.

## Using snippet hooks

Snippets are pre-defined hook scripts hosted in a [Cloud 66 repository](https://github.com/cloud66/snippets). These are commonly used scripts that we provide for ease of use. Like scripts (see below) these snippets are written in `bash`.

For example the [Cloud 66 ImageMagick snippet](https://github.com/cloud66/snippets/blob/master/cloud66/imagemagick) installs ImageMagick, the popular image processing application. You can use the example below to test it in your *demo* app:

```yaml
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/imagemagick # Hook type
        target: any # Hook fields
        execute: true
```

You can test this in the same way as you did with the `command` hook in our [tutorial](/{{page.collection}}/tutorials/deploy-hooks.html).

## Using inline script hooks

Script hooks allow you to add your own logic to a deploy hook, either by calling a separate file using `source` or by using `inline`. Both of methods use `bash` scripting (as do snippets above).

The hook below will create an arbitrary log file in /tmp using a simple inline script:

```yaml
first_thing: # Hook point
 - inline: |

     #!/usr/bin/env bash
     echo "script called!" >> /tmp/inline_script.log
   target: any
   execute: true
   apply_during: all
   owner: root:root
```

## Advanced examples of Deploy Hooks

We've put together some examples of the most common use cases, but there an almost infinite number of possibilities. Essentially if you can install it on a Linux server or code it into a shell script, you can run it from a deploy hook.

### Querying server metadata 

You can query a server's metadata (including deployment details) using the following command:

```shell
curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY
```
You can use this command in a deploy hook, for example:

```yaml
first_thing:
- target: any
  execute: true
  apply_during: all 
  sudo: false
  inline: |
    #!/usr/bin/env bash
    current_deployer=$(curl -s -H "Accept: application/json" https://$CLOUD66_ACCOUNT_API_KEY:X@app.cloud66.com/api/tooling/metadata/$CLOUD66_APPLICATION_API_KEY/deployment/triggered_by | jq -r '.response')
    echo "Deployed by: $current_deployer"
```
For more details please read our full [Querying server metadata](/{{page.collection}}/how-to-guides/deployment/querying-server-metadata.html) doc.

### Install packages on each server deployed

If your application relies on a package or software library that is not installed by default by Ubuntu, or by Cloud 66, you may ask, how do I install a package or library on each server I deploy? 

You can use a [deploy hook](/{{page.collection}}/tutorials/deploy-hooks.html) to fetch and install the package whenever you deploy a server.  

For this example we're going to use **glances** - a popular FOSS process monitor - but you can install literally anything that has an Ubuntu repository using this method. 

We need to set up our deploy hook to install the package from the Ubuntu. Every deploy hook needs:

- **a hook point** - in this case we are using the `first_thing` hook point to ensure this is installed as early as possible in case any other processes depend on it
- A **hook type** - we are using the `command` hook type
- A **target** -  in this case we are using `any` because we want the package on all our servers
- A **hook field** - this is where we put the commands we're going to run.

Our hook code will look like this:

```yaml
first_thing:
 - command: sudo apt-get install glances
   target: any
   execute: true
```

Now that we have our hook code ready, we need to add it to our application. We do this by creating a file in the `/.cloud66` directory of our repo called `deploy_hooks.yml` and dropping in the YAML code we just wrote above. If you're not well versed in YAML, it's often helpful to use an [online linter](http://www.yamllint.com/) to test that your code is valid and conformant. 

Once you have added the `deploy_hooks.yml` file to your repo you can deploy (or redeploy) your application and glances will be installed during the process. To test that it is installed correctly you can SSH into your server and run `glances` - it should bring up the monitoring interface.

## Installing non-standard versions of packages

If your application depends on a specific version of a Linux package or software library, the best way to ensure the correct version is installed is by using a [deploy hook](https://help.cloud66.com/maestro/tutorials/deploy-hooks.html). 

To illustrate how this is done we're going to use ImageMagick - the beloved and ubiquitous image processing software installed on millions of servers around the world.  Suppose your application relies on an older version of ImageMagick - in this case [Version 6.9.9-51.](https://github.com/ImageMagick/ImageMagick6/releases?after=6.9.10-0)

We need to set up our deploy hook to download the [source code](https://github.com/ImageMagick/ImageMagick6/archive/6.9.9-51.tar.gz) for this version and then build and compile it. Every deploy hook needs:

- **a hook point** - in this case we are using the `first_thing` hook point to ensure this is installed as early as possible in case any other processes depend on it
- A **hook type** - we are using the `inline` hook type - we'll go into the details of this later
- A **target** -  in this case we are using `rails` but `any` would also work
- A **hook field** - this is where we put the commands we're going to run. We're going to use [these instructions](https://imagemagick.org/script/install-source.php) as the basis for our commands.

Hooks are written in YAML and ours will look like this:

```yaml
first_thing:
- target: rails
  execute: true
  apply_during: build_only 
  sudo: true
  inline: |
    #!/usr/bin/env bash
    set -e
    version="6.9.9-51"
    echo "Installing ImageMagick v$version"

    echo "1. Fetching Tarball"
    curl -sL https://codeload.github.com/ImageMagick/ImageMagick6/tar.gz/"$version" --output /tmp/image-magick-"$version".tar.gz 

    echo "2. Extracting Tarball"
    cd /tmp
    mkdir -p /opt/image-magick/v"$version"
    tar -xvzf image-magick-"$version".tar.gz -C /opt/image-magick/v"$version" --strip 1

    echo "3. Building ImageMagick"
    cd /opt/image-magick/v"$version"
    ./configure
    make
    make install 
    ldconfig /usr/local/lib

    echo "4. Tidying up"
    rm -f /tmp/image-magick-"$version".tar.gz

    echo "ImageMagick install complete!"
```

Two things to take note of here:

1. In order to execute properly, the script needs a place on the disk to run - we are using the `/tmp/` directory
2. We have added another option - `apply_during` - this allows us to set our hook to only run when a server is first built, and not on every deploy. You can find out more about these options in our reference doc.

Now that we have our hook code ready, we need to add it to our application. We do this by creating a file in the `/.cloud66` directory of our repo called `deploy_hooks.yml` and dropping in the YAML code we just wrote above. If you're not well versed in YAML, it's often helpful to use an [online linter](http://www.yamllint.com/) to test that your code is valid and conformant. 

Once you have added the `deploy_hooks.yml` file to your repo you can deploy (or redeploy) your application and version 6.9.9-51 of ImageMagick will be installed during the process. To test that it is installed correctly you can SSH into your server and run `identify -version`.
