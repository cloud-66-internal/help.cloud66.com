---
layout: post
template: one-col
title:  "Managing environment variables"
categories: how-to-guides/build-and-config
order: 5
lead: How to manage environment variables within Maestro
tags: ['Logs']
legacy: false
permalink: /:collection/:path:output_ext
---

## Overview

This guide assumes you already know the basics of adding and editing environment variables (env vars) in Maestro. If you need help with this, please follow [our tutorial](/maestro/tutorials/env-vars.html) on the subject.

## Default environment variables

Cloud 66 creates a number of default environment variables, which can be used in addition to those that you define. Depending on your application configuration, the environment variables available will differ.

For a full list of environment variables available in your application, click on ⚙️*Application Settings* in the right-hand panel of your Application Overview and then click on *Environment Variables* in the sub-nav that opens. If you don’t currently have an application, the environment variables available to you are shown after your code analysis.

### Pre-defined environment variables

There are some also special variables that are predefined by Cloud 66:

**SERVER_NAME:** Is defined on each server and is only available inside the server

**DOCKER_HOST_IP:** Is injected to each container and is only available inside containers

## Listing environment variables

For a list of environment variables available in your application:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on ⚙️*Application Settings* in the right-hand panel
3. Click on *Environment Variables* in the sub-nav that opens
4. The initial page displays all the *Editable* variables. You can see all the *Read Only* variables by clicking on that tab.

## Assigning environment variables

### During deployment

If your application relies on specific environment variables to complete the deployment process, you will need to add them before deploying.

To do this:

1. After you have defined your services, but before you build your application images, click on *Configuration* in the right-hand panel
2. Set your variables by either manually entering them, or uploading a file that contains the variables. This file should use the following format:

```bash
KEY_1=value_1
KEY_2=value_2
```

Once your variables are set, *Save changes* and continue to deployment.


### After application build

You can also assign environment variables to an application that has already been built and/or deployed.

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on ⚙️*Application Settings* in the right-hand panel
3. Click on *Environment Variables* in the sub-nav that opens
4. Add or update the variables as required
5. Save and redeploy

Be aware of the following while assigning environment variables:

- **Some environment variables cannot be modified** — For example, environment variables for your server IP addresses cannot be changed because they are automatically set and updated based on reported IP addresses.

### Using AUTO GENERATE

**AUTO_GENERATE** allows you to insert placeholder environment variables into your application, and Cloud 66 will automatically replace them with a random string. This is useful to have Cloud 66 automatically generate values for secrets that you do not want to have committed into your repository.

To use **AUTO_GENERATE**, you define any (editable) environment variable with the value `AUTO_GENERATE` or `AUTO_GENERATE_{number}` where the number is the length of the value to auto-generate - ie. **AUTO_GENERATE_32**.

When you deploy your application, Cloud 66 will replace these placeholders with a random string of the specified length (10 is the default length).

Using this, you can safely commit your env file to your git repository without exposing the actual values of your environment variables.

## Managing environment variables using Toolbelt

You can also manage your environment variables using your [Cloud 66 Toolbelt](/{{page.collection}}/references/toolbelt/toolbelt-installation.html). There are four methods for managing env vars via Toolbelt:

- [Listing environment variables](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#env-vars-list)
- [Downloading variables](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#env-vars-download) as a file
- [Setting individual variables](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#env-vars-set)
- Setting variables in bulk by [uploading a file](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#env-vars-upload)

Please click on the links above for detailed instructions on each of these methods.


## Referencing existing variables

You can define environment variables that reference (i.e. pull in) existing variables:

- **You can reference other environment variables on the same application** — This is useful when referencing an environment variable which you don't control such as a server IP address.
- **You can reference environment variables available on other applications** — You need administrative privileges on the target application to reference environment variables on it.
- **You can reference environment variables available on other services** — You need administrative privileges on the target application to reference environment variables in its services.

### Basic referencing syntax

You can reference another environment variable in the same application using the following syntax:

{% raw %}`{{ENV_VAR}}`{% endraw %}

or

`_env(ENV_VAR:DEFAULT_VALUE)`

The second method is useful when you want to specify a default value. If Cloud 66 can’t find the referenced environment variable it will use default value instead. (**DEFAULT_VALUE** is optional).

For example, this sets a health check variable to use the external web address variable of the application:

```bash
MY_HEALTH_CHECK=http://_env(WEB_ADDRESS_EXT)/health_check.html
```

This example sets the key to use the external web address of the application, and sets a default IP if that variable is not available:

```bash
MY_KEY_1=_env(WEB_ADDRESS_EXT:192.168.0.1)
```

### Intra-app referencing syntax

To reference an environment variable from another application you will need:

- The unique identifier (APP_UID) for that application
- Admin access to that application

You can find an application's APP_UID by clicking on *Settings & Information* in the **Application** panel on the right of the screen and then clicking on the *Information* tab at the top of the main panel.

The syntax for referencing variables from another app is:

{% raw %}`{{STACK[APP_UID].ENV_VAR}}`{% endraw %}

or

`_env(STACK[APP_UID].ENV_VAR)`

### Note

<div class="notice"><p>This syntax still uses the term "stack" which in the process of being deprecated in Maestro. "Stack" means, for all intents and purposes, the same thing as "application".
</p></div>

### Intra-service referencing

To refer to an environment variable in other services you can use

{% raw %}`{{STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR}}`{% endraw %}

or

`_env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR)`

## Defining environment variables in a service

Environment variables can be used in a Maestro service definition (`service.yml` file) to pass variables between application components. Read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help.

The syntax for defining environment variables in a service definition is:

```yaml
services:
 service_name:
   env_vars:
    VAR1: _env(VARIABLE_NAME)
```

## Syntax examples

```yaml
services:
 <service_name>:
  env_vars:
   # Setting an environment variable
   ENV_NAME1: VAR_NAME

   # Referencing an application-wide variable
   ENV_NAME2: _env(STACK_ENV_VAR_NAME)

   # Referencing an application-wide variable with a default fall-back
   ENV_NAME3: _env(APP_ENV_VAR_NAME:Default)

   # Referencing a variable from another service
   ENV_NAME4: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME)

   # Referencing a variable from another service with a default fall-back
   ENV_NAME5: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)

   # Referencing a variable from another application
   ENV_NAME6: _env(STACK[APP_UID].ENV_VAR_NAME)

   # Referencing a variable from another application with default fall-back
   ENV_NAME7: _env(STACK[APP_UID].ENV_VAR_NAME:Default)

   # Referencing a service variable from another application
   ENV_NAME8: _env(STACK[APP_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME)

   # Referencing a service variable from another application with default fall-back
   ENV_NAME9: _env(STACK[APP_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)
```

### Working example

In this example we are adding **pgbouncer**, a popular connection pooler for PostgreSQL, to an application. We're adding pgbouncer as a container, and we need to point it at to our Postgres instances so that it can work its magic. The environment variables section of the `service.yml` would look something like this:

```yaml
services:
 pgbouncer:
  env_vars:
   DATABASES_HOST: _env(POSTGRESQL_ADDRESS)
   DATABASES_PORT: _env(POSTGRESQL_PORT)
   DATABASES_USER: _env(POSTGRESQL_USERNAME)
   DATABASES_PASSWORD: _env(POSTGRESQL_PASSWORD)
   DATABASES_DBNAME: _env(POSTGRESQL_DATABASE)
   PGBOUNCER_LISTEN_PORT: 5439
```
Read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help.

## Calling env vars in a Dockerfile

You can pass environment variables into a Dockerfile during your build process with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the application. For example, to call a env named `MY_VARIABLE` you would use `ENV MY_VARIABLE "$MY_VARIABLE"`

The same example, in context:

```docker
FROM ruby:latest
RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp
ENV MY_VARIABLE "$MY_VARIABLE"
EXPOSE 3000
CMD ["/myapp/main.rb"]
```

For more examples, please read our [full how-to guide on using env vars in Dockerfiles](/maestro/how-to-guides/build-and-config/env-vars-in-dockerfile.html).

## Using environment variables in code

Using environment variables in your application logic is done differently depending on your application settings. Here are some common examples:

### Bash scripts

```bash
$ENV_VAR
```

### YAML files

```yaml
username: <%= ENV['DB_USER'] %>
```

### .RB files

```ruby
working_directory "#{ENV['STACK_PATH']}"
```