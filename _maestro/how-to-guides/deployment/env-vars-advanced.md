---
layout: post
template: one-col
title:  "Managing environment variables"
categories: how-to-guides/deployment
order: 20
lead: How to manage environment variables within Maestro
tags: ['Logs']
legacy: false
permalink: /:collection/:path
---

## Overview

This guide assumes you already know the basics of adding and editing environment variables in Maestro. If you need help with this, please follow [our tutorial](/maestro/tutorials/env-vars.html) on the subject.


## Default environment variables

Cloud 66 creates a number of default environment variables, which can be used in addition to those that you define. Depending on your application configuration, the environment variables available will differ.

For example, if you have a [MySQL server](/maestro/tutorials/adding-database.html), the following variables are created and inserted into your _database.yml_ (unless you have specified your own):

- **MYSQL_ADDRESS** &mdash; The physical address of your server
- **MYSQL_USERNAME** &mdash; Randomly generated string
- **MYSQL_PASSWORD** &mdash; Randomly generated string

For a list of environment variables available in your application: 

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Environment Variables*  in the **Application** panel on the right of the screen
3. The initial page displays all the *Editable* variables. You can see all the *Read Only* variables by clicking on that tab.

## Assigning environment variables during deployment

If your application relies on specific environment variables to complete the deployment process, you will need to add them before deploying. 

To do this:

1. After you have taken a snapshot of your code (i.e. the first build) click on *Environment Variables* in the panel on the right.
2. Set your variables by either manually entering them, or uploading a file that contains the variables. This file should use the following format:

```
KEY_1=value_1
KEY_2=value_2
```

Once your variables are set, *Save changes* and continue to deployment. 


## Assigning environment variables after application build

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Environment Variables*  in the **Application** panel on the right of the screen
3. Add or update the variables as required
4. Save and redeploy

Be aware of the following while assigning environment variables:

- **Environment variables are not escaped** &mdash; However, they are always wrapped in double quotes (eg. 
`"ENV_VAR"`) so you can use them with multi-line variables like SSH keys.

- **Some environment variables cannot be modified** &mdash; For example, environment variables for your server IP addresses cannot be changed because they are automatically set and updated based on reported IP addresses.


## Using AUTO_GENERATE

**AUTO_GENERATE** allows you to insert placeholder environment variables into your application, and Cloud 66 will automatically replace them with a random string. This is useful to have Cloud 66 automatically generate values for secrets that you do not want to have committed into your repository.

To use **AUTO_GENERATE**, you define any (editable) environment variable with the value `AUTO_GENERATE` or `AUTO_GENERATE_{number}` where the number is the length of the value to auto-generate - ie. **AUTO_GENERATE_32**.

When you deploy your application, Cloud 66 will replace these placeholders with a random string of the specified length (10 is the default length). 

Using this, you can safely commit your env file to your git repository without exposing the actual values of your environment variables.

## Define referenced environment variable

You can define a new environment variable and reference it to an existing environment variable.

- **You can reference other environment variables on the same application**  &mdash; This is useful when referencing an environment variable which you don't control such as a server IP address.

- **You can reference environment variables available on other applications** &mdash;  You need administrative privileges on the target application to reference environment variables on it. You cannot use intra-application environment variables to gain access to database credentials, only database addresses.

- **You can reference environment variables available on other services**  &mdash; You need administrative privileges on the target application to reference environment variables on it.

You can reference another environment variable using the following syntax:  

``{% raw %}{{ENV_VAR}}{% endraw %}``  

or

`_env(ENV_VAR:DEFAULT_VALUE)`  

The second method is useful when you want to specify a default value. If cloud66 can’t find the referenced environment variable it will use default value instead. (**DEFAULT_VALUE** is optional). 

### Examples

This example sets a health check variable to use the external web address variable of the application:

```
MY_HEALTH_CHECK=http://_env(WEB_ADDRESS_EXT)/health_check.html
```

This example sets the key to use the external web address of the application, and sets a default IP if that variable is not available:

```
MY_KEY_1=_env(WEB_ADDRESS_EXT:192.168.0.1)
```

### Intra-app referencing syntax

To reference an environment variable from another application you will need: 

* The unique identifier (APP_UID) for that application
* Admin access to that application

You can find an application's APP_UID by clicking on *Settings & Information* in the **Application** panel on the right of the screen and then clicking on the *Information* tab at the top of the main panel.

The syntax for referencing variables from another app is:

`{% raw %}{{STACK[APP_UID].ENV_VAR}}{% endraw %}` 

or 

`_env(STACK[APP_UID].ENV_VAR)`. 

#### Note
<div class="notice"><p>This syntax still uses the term "stack" which in the processing of being deprecated in Maestro. "Stack" means, for all intents and purposes, the same thing as "application".</div></p>


### Intra-service referencing

To refer to an environment variable on other services you can use 

`{% raw %}{{STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR}}{% endraw %}`  

or 

`_env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR)`.


## Calling environment variables in code

Using environment variables in your application logic is done differently depending on your application settings. Here are some common examples:

### Bash scripts
```
$ENV_VAR
```

### YAML files 

```
username: <%= ENV['DB_USER'] %>
```

### .RB files

```
working_directory "#{ENV['STACK_PATH']}"
```


## Pre-defined environment variables

There are some variables that are predefined by Cloud 66:

**SERVER_NAME:** Is on each server and is only available inside the server

**DOCKER_HOST_IP:** Is injected to each container and is only available inside containers


Note that predefined environment variables are preferable! for instance, you can define `MEMCACHED_ADDRESS` to be `_env(DOCKER_HOST_IP)` to refer to the `DOCKER_HOST_IP` which is one of the predefined ones.



