---
layout: post
title: Stencil Placeholders syntax
categories: references
legacy: false
tags: ["references", "placeholders", "formations", "stencils"]
lead: A simple to use yet powerful template rendering engine
permalink: /:collection/:path
---

<h2>Overview</h2>
<p>
	Stencil Placeholders is a simple to use and yet powerful syntax for rendering of Stencils. They are focused on simplicity of use and simplicity of maintenance.
</p>

<p>
	Stencil Placeholders lack control flows like <code>if then else</code> or <code>for loops</code> to encourage simplicity of the templates. By providing adequate tools to manage groups of Stencils through Formations, Base Templates and sections as well as tags, breaking up of large and complex Stencils are encouraged.
</p>

<h2>Synatx</h2>
<h3>Basics</h3>
<p>
	All Stencil Placeholders are placed inside <code>${...}</code>.
</p>
<p>
	There are 2 types of placeholders:
	<ol>
		<li>Functions</li>
		<li>Directives</li>
	</ol>
</p>

<h4>Functions</h4>
<p>
	Functions are used to retrieve or manipulate data. For example you can use the <code>concat("foo", "bar")</code> function to concatenate 2 or more strings together. Another example is <code>now()</code> which returns the time now. Functions are always followed by <code>(arguments)</code>. If no argument is passed to a function, the <code>()</code> should still be present.
</p>

<h4>Directives</h4>
<p>
	Directives are like constants that are set at the beginning of rendering. Their value doesn't change throughout the rendering and they are not used to manipulate data but only to retrive it. An example is <code>formation</code> which returns the name of the formation or <code>snapshot</code> which returns the unique ID of the snapshot being used for rendering a Stencil.
</p>
<p>
	It is possible for a directive to have multiple parts. For example the <code>service</code> directive has different parts like <code>image</code> and <code>tag</code> which return the service's Docker image name and image tag. To address the different parts of a directive, use <code>["part"]</code> syntax: <code>service["image"]</code>
</p>

<h4>Syntax basics</h4>
<p>
	1. Placeholders are always used in a single line. Multi-line placeholders are not valid although the result of a placeholder could be multiple lines.
</p>

<p>
	2. Placehoders always return a string.
</p>

<h2>Reference</h2>

<h3>Directives</h3>

<h4 class="placeholder"><code>stackname</code></h4>
<p>
	Returns the Kubernetes friendly name of the Skycap Stack (application). All invalid characters are replaced with <code>-</code> (dash).
</p>

<h4 class="placeholder"><code>formation</code></h4>
<p>
	Returns the Kubernetes friendly name of the Formation. All invalid characters are replaced with <code>-</code> (dash).
</p>

<h4 class="placeholder"><code>service</code></h4>
<p>
	Returns the Kubernetes friendly name of the service that's relevant for this Stencil. You can choose the relevant service to a Stencil when creating and editing a Stencil. For example <code>service["image"]</code> returns the Docker image name of this service.
</p>
<p>
	If no part name is provided, this will return the service name. Options for parts are:
	<ul>
		<li><code>name</code> (default) &ndash; Name of the service</li>
		<li><code>image</code> &ndash; Image name</li>
		<li><code>tag</code> &ndash; Image tag</li>
		<li><code>display_name</code> &ndash; Display name of the service</li>
		<li><code>address</code> &ndash; Services DNS address</li>
		<li><code>tags</code> &ndash; Array of all tags for this service</li>
		<li><code>source_type</code> &ndash; Base of this service: <code>image</code> or <code>git</code></li>
	</ul>
</p>

<h4 class="placeholder"><code>snapshot</code></h4>
<p>
	Returns the snapshot unique identifier. For example <code>snapshot["gitref"]</code> return the gitref for the Stencil. Options for parts are:
	<ul>
		<li><code>uid</code> (default) &ndash; Unique ID of the Snapshot</li>
		<li><code>gitref</code> &ndash; Gitref for the Stencil used from the Stencil's git repository</li>
	</ul>
</p>

<h3>Functions</h3>

<h4 class="placeholder"><code>registry_credentials([registry_address])</code></h4>
<p>
	Returns the <strong>base 64</strong> encoded version of the Kubernetes friendly credentials for a Docker registry. See <a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/">Pulling image from a private registry in Kubernetes</a> document for more information. The result of this function can be used directly as the value for the <code>.dockerconfigjson</code> secret of <code>kubernetes.io/dockerconfigjson</code> type.
</p>

<p>
	If no <code>registry_address</code> is given, the BuildGrid registry credentials are returned. To pull any other registry's credentials, use the name of the registry used when adding it to your Cloud 66 Skycap account under <strong>Accounts / External Keys and Services</strong> section. For example, if you have a Quay.io added to the list of your registires, you can use <code>registry_credentials("quay.io")</code> to retrive the credential.
</p>

<p>
	Here is an example on how to use <code>registry_credentials</code>:
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
</p>

<h4 class="placeholder"><code>env(name, default)</code></h4>
<p>
	Returns the value of an environment variable from the Stack Environment Variables. For example <code>env("RAILS_ENV")</code> returns the value for <code>RAILS_ENV</code>. <code>env("RAILS_ENV", "production")</code> returns <code>production</code> if there is no value available for <code>RAILS_ENV</code>.
</p>
<p>
	If an environment variable is defined in both Stack Environment Variables and <code>service.yml</code> for the service this Stencil is related to, the service defined environment variable will be returned.
</p>

<h4 class="placeholder"><code>inline(stencil)</code></h4>
<p>
	Returns the rendered content of a Stencil. For example: <code>inline("disks.yml")</code> will return the rendered value of an inline Stencil called <code>_disks.yml</code>.
</p>

<h4 class="placeholder"><code>sanitize(text)</code></h4>
<p>
	Returns the "DNS friendly" version of the given text. For example <code>sanitize("Hello World!")</code> will return <code>hello-world-</code>.
</p>


<h4 class="placeholder"><code>envlist(indent[, tag])</code></h4>
<p>
	Returns a YAML compatible list of all Stack Environment Variables. This is useful when you don't want to keep adding new environment variables to every deployment one by one. For example <code>envlist(2)</code> returns the following:
<pre class="prettyprint">
  - RAILS_ENV: 'production'
  - USER_ID: 'e25fa2bhc'
  - API_ENDPOINT: 'https://api.acme.org'
</pre>
</p>

<p>
	As Stencils are almost always yaml files, the indentation is important. <code>indent</code> argument ensures all returned values of the list are indented with the given number of spaces. <code>tag</code> only returns the environment variables that match the it. You can set the tags for each environment variable on the Stack Environment Variables page on Skycap dashboard: <code>envlist(4, "secret")</code> returns only the list of environment variables tagged with <code>secret</code>.
</p>

<h4 class="placeholder"><code>require(message)</code></h4>
<p>
	Stops rendering of the Stencil and returns an error with the message. This is used when you would like to create Stencil template and make sure the end user of the Stencil fills some value before attempting to render it. For example <code>require("PORT")</code> will return a render error saying <strong>PORT is required</strong>
</p>

<h4 class="placeholder"><code>now([formatting])</code></h4>
<p>
	Returns the time of rendering. If no formatting is provided, it will return the date and time like this <code>2018-03-07 09:57:36 UTC</code>. Valid values for the formatting are:
	<ul>
		<li><code>year</code></li>
		<li><code>month</code></li>
		<li><code>day</code></li>
		<li><code>hour</code></li>
		<li><code>minute</code></li>
		<li><code>second</code></li>
		<li><code>epoch</code></li>
	</ul>

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
</p>

<h4 class="placeholder"><code>random(length)</code></h4>
<p>
	Returns a random string with the given length.
</p>

<h4 class="placeholder"><code>digest(text, algorithm, encoding)</code></h4>
<p>
	Returns an encoded and digested copy of the given text. The options for algorithm are:
	<ul>
		<li><code>md5</code></li>
		<li><code>sha1</code></li>
		<li><code>sha2</code></li>
	</ul>

	The options for encoding are:

	<ul>
		<li><code>base64</code></li>
		<li><code>hex</code></li>
	</ul>
</p>
