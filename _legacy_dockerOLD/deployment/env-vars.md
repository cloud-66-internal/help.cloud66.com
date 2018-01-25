---
layout: post
template: one-col
title: Environment variables
categories: Deployment
lead: ""
legacy: true

permalink: /:collection/:path
---



## About environment variables

Environment variables contain a name and value, and provide a simple way to share configuration settings between multiple applications and processes in Linux. For example, Cloud 66 creates environment variables for your database server address, which can be referenced in your code. This has numerous benefits:

- Makes it easy to handle the fact that your environments use different environment-specific configurations
- These values may change, so setting them as variables makes life easier
- You avoid having to commit sensitive information to your Git repository

## AUTO_GENERATE environment variables

**AUTO_GENERATE** environment variables allow you to insert a generic environment variable into your stack, and Cloud 66 will automatically replace their value with a random string. This is useful to have Cloud 66 automatically generate values for secrets that you do not want to have commited into your repository.

To use AUTO_GENERATE environment variables, you define any environment variables with the value **AUTO_GENERATE** or **AUTO_GENERATE_{number}** - where number is the length of the value to auto-generate - ie. **AUTO_GENERATE_32**.

If you use these values, then Cloud 66 will replace them with a fixed random string of the specified length (10 is the default length). Using this, you can safely commit your env file to your git repository with the following content for example, then load it when you create your new stack for concrete values.
```
RAILS_SECRET=AUTO_GENERATE_64
A_KEY=AUTO_GENERATE
```


## Auto-generated environment variables

As mentioned earlier, Cloud auto-generates a number of environment variables, which can be used in addition to those that you define. Depending on your stack configuration, the environment variables available will differ. Given the variety of environments that we support, it becomes difficult to keep an exhaustive list of auto-generated environment variables. 

The following variables are created for Rack-based stacks (among others):

- **RAILS_ENV** &mdash; Your stacks environment
- **RACK_ENV** &mdash; Your stacks environment
- **STACK_PATH** &mdash; The directory path to which your code is deployed

If you have a MySQL server, the following variables are created and inserted into your _database.yml_ (unless you have specified your own):

- **MYSQL_ADDRESS** &mdash; The physical address of your server
- **MYSQL_USERNAME** &mdash; Randomly generated string
- **MYSQL_PASSWORD** &mdash; Randomly generated string

For a list of environment variables available in your stack, visit the _Environment variables_ link in the right sidebar of your stack detail page. If you don't currently have a stack, the environment variables avaialable to you are shown after your code analysis.


## Assign environment variables for deployment

When you create a new stack, you are given the option to assign your own environment variables after code analysis. Once your code has been analyzed, click _Add environment variables before deployment_ in the _About your app_ field. This will allow you to view the environment variables that Cloud 66 sets for you, and set your own.

You can set your own by either manually entering them, or uploading a file that contain the variables. This file should use the following format:

```

KEY_1=value_1
KEY_2=value_2

```

If your application relies on specific environment variables to complete the deployment process, it is worth adding them before deploying. 


## Assign environment variables after stack build

You can also set environment variables on an existing stack by visiting the _Environment variables_ link in the right sidebar of your stack detail page. Once you click _Save_, these variables will be propagated to all your servers automatically, ready for your use.

Be aware of the following while assigning environment variables:

- **Environment variables are not escaped**  

However, they are always wrapped in double quotes (eg. 
"ENV_VAR"
) so you can use them with multi-line variables like SSH keys.
- **Some environment variables cannot be modified**  

For example, environment variables for your server IP addresses cannot be changed because they are automatically set and updated based on reported IP addresses.


## Define referenced environment variable

You can define a new environment variable and reference it to an existing environment variable.

- **You can reference other environment variables on the same stack**  

This is useful when referencing an environment variable which you don't control such as a server IP address.
- **You can reference environment variables available on other stacks**  

You need administrative privileges on the target stack to reference environment variables on it. You cannot use intra-stack environment variables to gain access to database credentials, only database addresses.
- **You can reference environment variables available on other services**  

You need administrative privileges on the target stack to reference environment variables on it.

Creating a reference can be done using  ``{% raw %}{{ENV_VAR}}{% endraw %}``  or `_env(ENV_VAR:DEFAULT_VALUE)`  syntax. 

Second form is useful when you want to specify a default value, If cloud66 can’t find referenced environment variable it will use default value instead. **DEFAULT_VALUE** is optional. 

```
MY_HEALTH_HECK=http://_env(WEB_ADDRESS_EXT)/health_check.html
```
If you are not using prefix/suffix in environment variable definition, you can use 
`_env:(ENV_VAR:DEFAULT_VALUE)` 
 syntax

```
MY_KEY_1=_env(WEB_ADDRESS_EXT:192.168.0.1)
```
	
To reference to an environment variable on the same stack you can use `{% raw %}{{ENV_VAR}}{% endraw %}` or `_env(ENV_VAR:DEFAULT_VALUE)` . 

To reference to an environment variable on other stacks you can use `{% raw %}{{STACK[STACK_UID].ENV_VAR}}{% endraw %}` or `_env(STACK[STACK_UID].ENV_VAR)`. 

Your stack's  **UID** is available on the stack setting page. 

To reference to an environment variable on other services you can use `{% raw %}{{STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR}}{% endraw %}`  or `_env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR)`.



## Using environment variables

Using environment variables is done differently depending on your application settings, but these are some examples.

- **Bash scripts**

```
$ENV_VAR
```

- **.YML files**  

```
username: <%= ENV['DB_USER'] %>
```

- **.RB files**  

```
working_directory "#{ENV['STACK_PATH']}"
```




## Pre-defined environment variables

There are some variables that are predefined by Cloud66 which are listed at bellow.

Note that predefined environment variables are referable! for instance you can define `MEMCACHED_ADDRESS` to be `_env(DOCKER_HOST_IP)` to refer to the `DOCKER_HOST_IP` which is one of the predefined ones.

**DOCKER_HOST_IP:** Is injected to each container and is only available inside containers

**SERVER_NAME:** Is on each server and is only available inside the server
