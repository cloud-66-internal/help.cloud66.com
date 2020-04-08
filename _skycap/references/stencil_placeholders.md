---
layout: post
title: Stencil Placeholders syntax
categories: references
order: 2
legacy: false
tags: ["references", "placeholders", "formations", "stencils"]
lead: A simple to use yet powerful template rendering engine
permalink: /:collection/:path:output_ext
---

## Overview

Stencil Placeholders are a simple yet powerful syntax for the rendering of Stencils. They are focused on simplicity of use and maintenance.

Stencil Placeholders lack control flows like `if then else` or `for loops` to encourage simplicity in configuration templates. We provide tools to manage groups of Stencils through Formations, Base Templates and tags, and encourage the breaking up of large and complex Stencils.

## Syntax basics

- All Stencil Placeholders are placed inside `${...}`.
- Placeholders are always used in a single line. Multi-line placeholders are not valid although the result of a placeholder could be multiple lines.
- Strings should be enclosed in quotes while [Directives](#directives) and [Functions](#functions) should not. For example this is valid: `${concat(service, "-dep")}` but this is not `${concat("service", -dep)}`

### Dot notation

You can call hierarchical elements of an application via Placeholders using dot notation. For example `${service.port.container}` will fetch the `targetport` for a particular service.

As with all Stencil Placeholders, this notation is dependent on the [rendering](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-rendering) context of the Stencil itself. When you add Stencils to a Formation, they can apply to either a **service** or the **application** as a whole. So our example above only applies to Stencils that are service-related, and the `${service.port.container}` call would simply fail in an application-level Stencil. 

### Data types and operators

The Placeholders syntax supports some common data formats and operators:

### Arrays:

These use a similar format to Ruby arrays - comma separated values with quote-delimited strings.

Example:
`[1, 2, "abc", formation]`

### Hashes:

These use a similar format to Ruby hashes - comma separated key:value pairs with with quote-delimited strings. Note that Directives are *not* quote-delimited.

Example:

<pre class="prettyprint">
{ "foo": 1, "formation_name" : formation, "complex" : concat("hey", " you")}
</pre>

### Locals:

`Locals` are local variables defined within the context of the current template. These are useful for `inline` functions (see below) because they allow you to set or call values contextually (e.g. "pull in my `_deployspec.yml` and but set the port to `8080`")

### Simple `if` statements:

These use the format `if(CONDITION, TRUE_RESULT, FALSE_RESULT)` where CONDITION is any boolean condition (no AND or OR). Comparisons supported are `==`, `!=` `>=`, `<=`, `>` and `<`. `True` and `False` are also supported conditions.

Example:

<pre class="prettyprint">
namespace: ${if(formation != "production", "dev", "live")}
</pre>

This would set the namespace to "live" if the formation is named "production" or to "dev" if it's named anything else.

## Placeholder types

There are 2 types of placeholders:

- Directives
- Functions

### Directives

Directives are like constants that are set at the beginning of rendering. Their value doesn't change throughout the rendering and they are not used to manipulate data, only to retrieve it. An example is `formation` which returns the name of the formation or `snapshot` which returns the unique ID of the snapshot being used for rendering a Stencil.

It is possible for a Directive to have multiple attributes. For example, the `service` Directive has attributes like `image` and `tag` which return the service's Docker image name and image tag. To address the different attributes of a Directive, use dot notation: e.g. `service.image` .

### Functions

Functions are used to retrieve or manipulate data. For example you can use the `concat("foo", "bar")` function to concatenate 2 or more strings together. Another example is `now()` which returns the time now. Functions are always followed by `(arguments)`. If no argument is passed to a function, the `()` should still be present.

## Directives

### application

Usage: `${application.attribute}`

Returns the attributes of an application. Default (with no attribute) returns the Kubernetes-friendly name of a Skycap application (stack). All invalid characters are replaced with `-` (dash).

**Attributes:**

- `name`  (default) – Name of the application
- `configstore_namspace` - UID of the application's [ConfigStore](/skycap/how-to-guides/config-store.html)

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### formation

Usage: `${formation}`

Default (with no attribute) returns the Kubernetes-friendly name of the Formation. All invalid characters are replaced with `-` (dash).

**Attributes:**

- `name`  (default) – Name of the formation
- `UUID` - Unique identifier for the formation

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### service

Usage: `${service.attribute}`

Returns the attributes of a service. 

Default (with no attribute) returns the Kubernetes-friendly name of the service that's relevant for this Stencil. You can choose the relevant service when creating and editing a Stencil.

**Attributes:**

- `name` (default) – Name of the service
- `image` – Docker image name
- `tag` – Image tag
- `display_name` – Display name of the service
- `address` – Services DNS address
- `tags` – Array of all tags for this service
- `source_type` – Base of this service: `image` or `git`
- `ports` - Array of all ports defined for the service
- `port` - the first port within the `ports` array.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### snapshot

Usage: `${snapshot.attribute}`

Returns attributes of a snapshot. Defaults to the Snapshot's UID if no attribute is supplied.

Attributes:

- `uid` (default) – Unique ID of the Snapshot
- `gitref` – Gitref for a Stencil from that Stencil's git repository

## Functions

### base64

Usage: `base64({hash})`

Encodes a set of values in Base64 format. Only the values are encoded - not the keys.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### concat

Usage: `concat("stringA", "stringB",...)`

Concatenates the specified strings into a single string.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### configstore

Usage:

- `configstore("key", account.configstore_namespace)` *OR*
- `configstore("key", application.configstore_namespace)`

Returns the value for a key from a Cloud 66 ConfigStore. If no namespace is specified this will default to the **application-level** ConfigStore of the current app.

You can also fetch values from an **account-level ConfigStore** using the namespace UID as the lookup. The same can be done using the `application` parameter to fetch values from *another* application-level ConfigStore.

For example:

<pre class="prettyprint">
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  namespace: ${formation}
  name: mysql-pvc
spec:
 accessModes:
  - ${configstore("mysql_access_mode", account.configstore_namespace)}
 resources:
  requests:
   storage: ${configstore("mysql_storage", application.configstore_namespace)}
</pre>

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### count

Usage: `count([array values])`

Returns the number of items in an array or any countable objects e.g. strings. For example:

<pre class="prettyprint">
count([4578, 2178] # returns 2
count([dog, fish, bird] # returns 3
count("abc") # returns 3
</pre>

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### digest

Usage: `digest(text, algorithm, encoding)`

Returns an encoded and digested copy of the given text. The options for algorithm are:

- `md5`
- `sha1`
- `sha2`

The options for encoding are:

- `base64`
- `hex`

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### env

Usage: `env(name, default)`

Returns the value of an environment variable from the Stack Environment Variables. For example `env("RAILS_ENV")` returns the value for `RAILS_ENV`. `env("RAILS_ENV", "production")` returns `production` if there is no value available for `RAILS_ENV`.

If an environment variable is defined in both Stack Environment Variables and `service.yml` for the service this Stencil is related to, the service defined environment variable will be returned.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### envlist

Usage: `envlist(tag)`

Returns a YAML compatible list of all Stack Environment Variables. This is useful when you don't want to keep adding new environment variables to every deployment one by one. For example `envlist` returns the following:

<pre class="prettyprint">
- RAILS_ENV: 'production'
- USER_ID: 'e25fa2bhc'
- API_ENDPOINT: '[https://api.acme.org](https://api.acme.org/)'
</pre>

Using `tag` returns only the environment variables that match it. You can set the tags for each environment variable on the Stack Environment Variables page on Skycap dashboard.

Example: `envlist("secret")` returns only the list of environment variables tagged with `secret`.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### inline

Usage: `inline(stencil, indent, locals)`

Returns the rendered content of a Stencil. For example: `inline("disks.yml")` will return the rendered value of an inline Stencil called `_disks.yml`.

As Stencils are almost always yaml files, indentation is important. The `indent` argument ensures all returned values are indented by the contextually-appropriate number of spaces.

The `locals` parameter is optional and can be a hash. It will use any keys provided as Directives. For example `inline("test.yml", 2, { "foo": "bar" })` will fetch the contents of test.yml, indent it by two spaces and then set the Placeholder named `${locals.foo}` to the value "bar".

Example:

<pre class="prettyprint">
kind: Deployment
metadata:
 namespace: ${formation}
 name: ${concat(service, "-dep")}
 spec:
  template:
  metadata:
   labels:
    app: ${stackname}
    tier: ${service}
  spec:
   $inline("_deploy_spec.yml",4,{ "service.port.http": "8080" })
</pre>

This example fetches the contents of a partial Stencil called `deploy_spec`, indents it by four spaces and then sets the `service.port.http` to 8080.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### now

Usage: `now([formatting])`

Returns the time of rendering. If no formatting is provided, it will return the date and time like this `2018-03-07 09:57:36 UTC`. Valid values for the formatting are:

- `year`
- `month`
- `day`
- `hour`
- `minute`
- `second`
- `epoch`

Alternatively you can use the following:

```
%Y - Year with century (can be negative, 4 digits at least)
-0001, 0000, 1995, 2009, 14292, etc.
%C - year / 100 (round down. 20 in 2009)
%y - year % 100 (00..99)

%m - Month of the year, zero-padded (01..12)
%_m blank-padded ( 1..12)
%-m no-padded (1..12)
%B - The full month name (`January'') %^B uppercased (`JANUARY'')
%b - The abbreviated month name (`Jan'') %^b uppercased (`JAN'')
%h - Equivalent to %b

%d - Day of the month, zero-padded (01..31)
%-d no-padded (1..31)
%e - Day of the month, blank-padded ( 1..31)

%j - Day of the year (001..366)

Time (Hour, Minute, Second, Subsecond):
%H - Hour of the day, 24-hour clock, zero-padded (00..23)
%k - Hour of the day, 24-hour clock, blank-padded ( 0..23)
%I - Hour of the day, 12-hour clock, zero-padded (01..12)
%l - Hour of the day, 12-hour clock, blank-padded ( 1..12)
%P - Meridian indicator, lowercase (`am'' or`pm'')
%p - Meridian indicator, uppercase (`AM'' or`PM'')

%M - Minute of the hour (00..59)

%S - Second of the minute (00..59)

%L - Millisecond of the second (000..999)
%N - Fractional seconds digits, default is 9 digits (nanosecond)
%3N millisecond (3 digits)
%6N microsecond (6 digits)
%9N nanosecond (9 digits)
%12N picosecond (12 digits)

Time zone:
%z - Time zone as hour and minute offset from UTC (e.g. +0900)
%:z - hour and minute offset from UTC with a colon (e.g. +09:00)
%::z - hour, minute and second offset from UTC (e.g. +09:00:00)
%:::z - hour, minute and second offset from UTC
(e.g. +09, +09:30, +09:30:30)
%Z - Time zone abbreviation name

Weekday:
%A - The full weekday name (`Sunday'') %^A uppercased (`SUNDAY'')
%a - The abbreviated name (`Sun'') %^a uppercased (`SUN'')
%u - Day of the week (Monday is 1, 1..7)
%w - Day of the week (Sunday is 0, 0..6)

ISO 8601 week-based year and week number:
The week 1 of YYYY starts with a Monday and includes YYYY-01-04.
The days in the year before the first week are in the last week of
the previous year.
%G - The week-based year
%g - The last 2 digits of the week-based year (00..99)
%V - Week number of the week-based year (01..53)

Week number:
The week 1 of YYYY starts with a Sunday or Monday (according to %U
or %W). The days in the year before the first week are in week 0.
%U - Week number of the year. The week starts with Sunday. (00..53)
%W - Week number of the year. The week starts with Monday. (00..53)

Seconds since the Unix Epoch:
%s - Number of seconds since 1970-01-01 00:00:00 UTC.
%Q - Number of microseconds since 1970-01-01 00:00:00 UTC.

Literal string:
%n - Newline character (\n)
%t - Tab character (\t)
%% - Literal ``%'' character

Combination:
%c - date and time (%a %b %e %T %Y)
%D - Date (%m/%d/%y)
%F - The ISO 8601 date format (%Y-%m-%d)
%v - VMS date (%e-%b-%Y)
%x - Same as %D
%X - Same as %T
%r - 12-hour time (%I:%M:%S %p)
%R - 24-hour time (%H:%M)
%T - 24-hour time (%H:%M:%S)
%+ - date(1) (%a %b %e %H:%M:%S %Z %Y)
```

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### random

Usage: `random(length)`

Returns a random string with the given length.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### registry_credentials

Usage: `registry_credentials([registry_address])`

Returns the **base 64 encoded** version of the Kubernetes friendly credentials for a Docker registry. Read the [Pulling image from a private registry in Kubernetes](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) document for more information. The result of this function can be used directly as the value for the `.dockerconfigjson` secret of `kubernetes.io/dockerconfigjson` type.

If no `registry_address` is given, the BuildGrid registry credentials are returned. To pull any other registry's credentials, use the name of the registry used when adding it to your Cloud 66 Skycap account under <strong>Accounts / External Keys and Services</strong> section. For example, if you have a [Quay.io](http://quay.io/) added to the list of your registries, you can use `registry_credentials("quay.io")` to retrieve the credential.

Here is an example on how to set up a secret using `registry_credentials`,

<pre class="prettyprint">
apiVersion: v1
kind: Secret
metadata:
 namespace: foo
 name: bar-docker-registry-secret-name
type: Opaque
data:
 .dockerconfigjson: ${registry_credentials()}
</pre>

...and then use it in a deployment.

<pre class="prettyprint">
apiVersion: v1
kind: Deployment
metadata:
 namespace: foo
  spec:
   template:
    spec:
    imagePullSecrets:
     - name: bar-docker-registry-secret-name
</pre>

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### repeat_inline

Usage: `repeat_inline(filename, indent, locals, count)`

This is an extension of the `inline` function (see above) which repeats an inline either by the number of variables set in `locals` or by the `count` parameter.

In this context `locals` can be an array or hash. If it is an array, each item should be expressed as a hash. The inline will be rendered count(locals) times (i.e. if there are 3 items in the array, it will be repeated 3 times), each time using the value of each hash in the array.

For example:
<pre class="prettyprint">
${repeat_inline("test.yml", 8, [ { "foo" : "bar" }, { "foo" : "buzz" } ])} # render test twice, one with foo=bar and once with foo=buzz
</pre>

If `count` is provided, it should be a number. In this case inline will be repeated `count` times, each time with `locals` provided as the locals in the normal inline function. In this case `locals` should be a hash. For example:

<pre class="prettyprint">
${repeat_inline("test.yml", 4, { "foo": "bar" }, 12)} # render test 12 times, every time with foo=bar
</pre>

Repeating inlines can fetch loop information using `locals_index` (for the current iteration index) and `locals_count` (for the total count). For example you could use this:

<pre class="prettyprint">
This is the ${locals_index} time out of ${locals_count} renders of ${foo}
</pre>

...to check which iteration of an inline is being rendered.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### require

Usage: `require(message)`

Stops rendering of the Stencil and returns an error with the message. This is used when you would like to create a Stencil template and make sure the end user of the Stencil supplies an important value before attempting to render it. For example `require("PORT")` will return a render error saying <strong>PORT is required</strong>

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### sanitize

Usage: `sanitize(text)`

Returns the "DNS friendly" version of the given text. For example `sanitize("Hello World!")` will return `hello-world-`.

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### vault

Usage: `vault("/path_root/path_to_key", "key_name")`

Fetches the named value from the specified path in the Vault that is attached to the current Cloud 66 account (i.e. the one which holds the current application).

For example, if your production MySQL password is stored in `/production/MySQL` with the key name `mysql_pass` then the placeholder would be:

<pre class="prettyprint">
{vault("/production/MySQL", "mysql_pass")}
</pre>

<div style="border-bottom: 1px dashed #CCC;margin-top:20px;margin-bottom:20px;"></div>

### vaultlist

Usage: `vaultlist("/path_root/path_to_keys")`

Fetches *all* the available values from any path in Vault. As above, the Vault must be attached to the current Cloud 66 account

The example below would pull all of the values from the `/production/mysql` path.

<pre class="prettyprint">
apiVersion: v1
kind: Secret
metadata:
 namespace: another_app
 name: all_secrets
 labels:
  app: ${stackname}
type: Opaque
data:
 ${vaultlist("/production/mysql", 2)}
</pre>