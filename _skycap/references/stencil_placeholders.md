---
layout: post
title: Stencil Placeholders syntax
categories: references
legacy: false
tags: ["references", "placeholders", "formations", "stencils"]
lead: A simple to use yet powerful template rendering engine
permalink: /:collection/:path
---

## Overview

Stencil Placeholders is a simple to use and yet powerful syntax for the rendering of Stencils. They are focused on simplicity of use and simplicity of maintenance.

Stencil Placeholders lack control flows like `if then else` or `for loops` to encourage simplicity of the templates. By providing adequate tools to manage groups of Stencils through Formations, Base Templates and sections as well as tags, breaking up of large and complex Stencils are encouraged.


## Syntax

### Basics

All Stencil Placeholders are placed inside `${...}`.

There are 2 types of placeholders:

* Functions
* Directives

#### Functions

Functions are used to retrieve or manipulate data. For example you can use the `concat("foo", "bar")` function to concatenate 2 or more strings together. Another example is `now()` which returns the time now. Functions are always followed by `(arguments)`. If no argument is passed to a function, the `()` should still be present.


#### Directives

Directives are like constants that are set at the beginning of rendering. Their value doesn't change throughout the rendering and they are not used to manipulate data but only to retrieve it. An example is `formation` which returns the name of the formation or `snapshot` which returns the unique ID of the snapshot being used for rendering a Stencil.


It is possible for a directive to have multiple parts. For example, the `service` directive has different parts like `image` and `tag` which return the service's Docker image name and image tag. To address the different parts of a directive, use `["part"]` syntax: `service["image"]`


#### Syntax basics

1. Placeholders are always used in a single line. Multi-line placeholders are not valid although the result of a placeholder could be multiple lines.

2. Placeholders always return a string.


## Reference

### Directives

<h4 class="placeholder"><code>stackname</code></h4>

Returns the Kubernetes friendly name of the Skycap Stack (application). All invalid characters are replaced with `-` (dash).


<h4 class="placeholder"><code>formation</code></h4>

Returns the Kubernetes friendly name of the Formation. All invalid characters are replaced with `-` (dash).


<h4 class="placeholder"><code>service</code></h4>

Returns the Kubernetes friendly name of the service that's relevant for this Stencil. You can choose the relevant service to a Stencil when creating and editing a Stencil. For example `service["image"]` returns the Docker image name of this service.


If no part name is provided, this will return the service name. Options for parts are:

* `name` (default) &ndash; Name of the service
* `image` &ndash; Image name
* `tag` &ndash; Image tag
* `display_name` &ndash; Display name of the service
* `address` &ndash; Services DNS address
* `tags` &ndash; Array of all tags for this service
* `source_type` &ndash; Base of this service: `image` or `git`


<h4 class="placeholder"><code>snapshot</code></h4>

Returns the snapshot unique identifier. For example, `snapshot["gitref"]` returns the gitref for the Stencil. Options for parts are:

* `uid` (default) &ndash; Unique ID of the Snapshot
* `gitref` &ndash; Gitref for the Stencil used from the Stencil's git repository


### Functions

<h4 class="placeholder"><code>registry_credentials([registry_address])</code></h4>

Returns the <strong>base 64</strong> encoded version of the Kubernetes friendly credentials for a Docker registry. See <a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/">Pulling image from a private registry in Kubernetes</a> document for more information. The result of this function can be used directly as the value for the `.dockerconfigjson` secret of `kubernetes.io/dockerconfigjson` type.

If no `registry_address` is given, the BuildGrid registry credentials are returned. To pull any other registry's credentials, use the name of the registry used when adding it to your Cloud 66 Skycap account under <strong>Accounts / External Keys and Services</strong> section. For example, if you have a Quay.io added to the list of your registries, you can use `registry_credentials("quay.io")` to retrieve the credential.

Here is an example on how to use `registry_credentials`:

<pre class="prettyprint">
apiVersion: v1
kind: Secret
metadata:
  namespace: foo
  name: bar-docker-registry-secret-name
data:
  .dockerconfigjson: ${registry_credentials()}
type: kubernetes.io/dockerconfigjson
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  namespace: foo
spec:
  template:
    spec:
      imagePullSecrets:
      - name: bar-docker-registry-secret-name
</pre>


<h4 class="placeholder"><code>concat("stringA", "stringB")</code></h4>

Concatenates the specified strings into a single string. 

<h4 class="placeholder"><code>env(name, default)</code></h4>

Returns the value of an environment variable from the Stack Environment Variables. For example `env("RAILS_ENV")` returns the value for `RAILS_ENV`. `env("RAILS_ENV", "production")` returns `production` if there is no value available for `RAILS_ENV`.

If an environment variable is defined in both Stack Environment Variables and `service.yml` for the service this Stencil is related to, the service defined environment variable will be returned.


<h4 class="placeholder"><code>vault("/path_root/path_to_key", "key_name")</code></h4>

Fetches the named value from the specified path in the Vault that is attached to the current Cloud 66 account (i.e. the one which holds the current application).

For example, if your production MySQL password is stored in `/production/MySQL` with the key name `mysql_pass` then the placeholder would be:

<pre class="prettyprint">
{vault("/production/MySQL", "mysql_pass")}
</pre>

<h4 class="placeholder"><code>vaultlist("/path_root/path_to_keys", indent_level)</code></h4>

Fetches *all* the available values from any path in Vault. As above, the Vault must be attached to the current Cloud 66 account 

The example below would pull all of the values from the `/production/mysql` path and indent them with 2 spaces.

```
apiVersion: v1
kind: Secret
metadata:
  namespace: another_app
  name: all_secrets
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
    cloud66.com/stencil-uuid: ${stencil["uuid"]}
    cloud66.com/snapshot-uid: ${snapshot["uid"]}
    cloud66.com/snapshot-gitref: ${snapshot["gitref"]}
  labels:
    app: ${stackname}
type: Opaque
data:
  ${vaultlist("/production/mysql", 2)}
 
```


<h4 class="placeholder"><code>configstore("key")</code></h4>

Returns the value of the `key` specified. By default this will use the **application-level** ConfigStore.

<h4 class="placeholder"><code>configstore("key", account["configstore_namespace"])</code></h4>

As above, but returns the value from an **account-level ConfigStore** using the namespace UID as the lookup. The same can be done for `application`.

For example:

<pre class="prettyprint">

kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  namespace: ${formation}
  name: mysql-pvc
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
    cloud66.com/stencil-uuid: ${stencil["uuid"]}
spec:
  accessModes:
    - ${configstore("mysql_access_mode")
  resources:
    requests:
      storage: ${configstore("mysql_storage")

</pre>

<h4 class="placeholder"><code>inline(stencil)</code></h4>

Returns the rendered content of a Stencil. For example: `inline("disks.yml")` will return the rendered value of an inline Stencil called `_disks.yml`.


<h4 class="placeholder"><code>sanitize(text)</code></h4>

Returns the "DNS friendly" version of the given text. For example `sanitize("Hello World!")` will return `hello-world-`.



<h4 class="placeholder"><code>envlist(indent[, tag])</code></h4>

Returns a YAML compatible list of all Stack Environment Variables. This is useful when you don't want to keep adding new environment variables to every deployment one by one. For example `envlist(2)` returns the following:

<pre class="prettyprint">
  - RAILS_ENV: 'production'
  - USER_ID: 'e25fa2bhc'
  - API_ENDPOINT: 'https://api.acme.org'
</pre>


As Stencils are almost always yaml files, the indentation is important. `indent` argument ensures all returned values of the list are indented with the given number of spaces. `tag` only returns the environment variables that match it. You can set the tags for each environment variable on the Stack Environment Variables page on Skycap dashboard: `envlist(4, "secret")` returns only the list of environment variables tagged with `secret`.


<h4 class="placeholder"><code>require(message)</code></h4>

Stops rendering of the Stencil and returns an error with the message. This is used when you would like to create a Stencil template and make sure the end user of the Stencil fills some value before attempting to render it. For example `require("PORT")` will return a render error saying <strong>PORT is required</strong>


<h4 class="placeholder"><code>now([formatting])</code></h4>

Returns the time of rendering. If no formatting is provided, it will return the date and time like this `2018-03-07 09:57:36 UTC`. Valid values for the formatting are:

* `year`
* `month`
* `day`
* `hour`
* `minute`
* `second`
* `epoch`


Alternatively you can use the following:

<pre class="prettyprint">
  %Y - Year with century (can be negative, 4 digits at least)
          -0001, 0000, 1995, 2009, 14292, etc.
  %C - year / 100 (round down.  20 in 2009)
  %y - year % 100 (00..99)

  %m - Month of the year, zero-padded (01..12)
          %_m  blank-padded ( 1..12)
          %-m  no-padded (1..12)
  %B - The full month name (``January'')
          %^B  uppercased (``JANUARY'')
  %b - The abbreviated month name (``Jan'')
          %^b  uppercased (``JAN'')
  %h - Equivalent to %b

  %d - Day of the month, zero-padded (01..31)
          %-d  no-padded (1..31)
  %e - Day of the month, blank-padded ( 1..31)

  %j - Day of the year (001..366)

Time (Hour, Minute, Second, Subsecond):
  %H - Hour of the day, 24-hour clock, zero-padded (00..23)
  %k - Hour of the day, 24-hour clock, blank-padded ( 0..23)
  %I - Hour of the day, 12-hour clock, zero-padded (01..12)
  %l - Hour of the day, 12-hour clock, blank-padded ( 1..12)
  %P - Meridian indicator, lowercase (``am'' or ``pm'')
  %p - Meridian indicator, uppercase (``AM'' or ``PM'')

  %M - Minute of the hour (00..59)

  %S - Second of the minute (00..59)

  %L - Millisecond of the second (000..999)
  %N - Fractional seconds digits, default is 9 digits (nanosecond)
          %3N  millisecond (3 digits)
          %6N  microsecond (6 digits)
          %9N  nanosecond (9 digits)
          %12N picosecond (12 digits)

Time zone:
  %z - Time zone as hour and minute offset from UTC (e.g. +0900)
          %:z - hour and minute offset from UTC with a colon (e.g. +09:00)
          %::z - hour, minute and second offset from UTC (e.g. +09:00:00)
          %:::z - hour, minute and second offset from UTC
                                            (e.g. +09, +09:30, +09:30:30)
  %Z - Time zone abbreviation name

Weekday:
  %A - The full weekday name (``Sunday'')
          %^A  uppercased (``SUNDAY'')
  %a - The abbreviated name (``Sun'')
          %^a  uppercased (``SUN'')
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
or %W).  The days in the year before the first week are in week 0.
  %U - Week number of the year.  The week starts with Sunday.  (00..53)
  %W - Week number of the year.  The week starts with Monday.  (00..53)

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
</pre>


<h4 class="placeholder"><code>random(length)</code></h4>

Returns a random string with the given length.


<h4 class="placeholder"><code>digest(text, algorithm, encoding)</code></h4>

Returns an encoded and digested copy of the given text. The options for algorithm are:

* `md5`
* `sha1`
* `sha2`

The options for encoding are:

* `base64`
* `hex`


