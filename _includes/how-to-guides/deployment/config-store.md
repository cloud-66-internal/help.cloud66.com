## Overview

ConfigStore provides way to store, track, manage and share configuration data in a centralised, version-controlled repository. Each ConfigStore record contains **Key**, **Value**, and **Metadata** information that can be shared across all of your applications.

Some of the advantages of using ConfigStore are:

* Common configuration variables can be shared between different applications (even if they use different cloud providers, different regions or different frameworks)
* Configuration variables are pulled from a central repo and don't need to be hardcoded into configuration files and shipped out to servers. This makes updating variables quicker and more reliable
* Variables can be queried via the API
* ConfigStore supports wildcards in keys to allow for filtering and contextual lookups

{% if include.product == 'Skycap' %}
This information can then be referenced from within your application files and <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil">Skycap Stencils</a>).
{% endif %}

You can use ConfigStore with any Cloud 66 application. One example of a use case might be a centralised place to store different webhooks per environment for a monitoring service like New Relic or Scout, or API parameters for a push notification service like OneSignal or Amazon SES.

## ConfigStore vs environment variables

When you add environment variables to your application they become Linux operating system environment variables.

ConfigStore provides an alternative place to store centralised information that will not be exposed in OS level environment variables.

This is particularly useful for information that you need to access from Kubernetes configuration files (for example within [Skycap Stencil Templates](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil)) which may not have direct access to the underlying operating system.

## ConfigStore Data Structure

Data edited in ConfigStore via the [Dashboard](https://app.cloud66.com/dashboard) is text only and is structured as:

* **Key** &mdash; A text based `Key`.
* **Value** &mdash; A text based `Value`.
* **Metadata** &mdash; A comma separated list of `key=value` pairs. For example: `key1=value1, key2=value2`

<!--
If you need to store binary data you should <a href="#download-configstore-cli">use the <abbr title="Command Line Interface">CLI</abbr></a>.
-->

## Levels of ConfigStore

There are two levels of ConfigStore:

* At application level
* At account level

### Application-level 

To access ConfigStore for a particular application:

1. Open the application overview page from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Configuration*  in the **Application** panel on the right of the screen
3. Click on the *ConfigStore* tab at the top of the main panel

This page provides a way to store information where the scope is **limited to a specific application**. Variables stored in this repository will not automatically be available to any other application in your account. This is useful for storing variables that are either very application-specific or where the risk of sharing outweighs the benefits of centralisation.
### Account-level 

To access your account-wide ConfigStore:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *ConfigStore* in the **Account** panel on the left

This provides a way to store config information **globally** that can be referenced by all of your applications. This is useful for sharing common variables and variable patterns across all of your applications. 

This approach requires some additional care and planning to prevent unintended consequences, such as applications connecting to incorrect resources or cloud services and creating confusion or dirty data. 
## ConfigStore metadata

The *Metadata* field in ConfigStore is intended to store useful reminders about the nature of the configuration variable being stored. This can include:

* The type of value (e.g. *integer*, *string*, *GUID* etc.)
* A description of the configuration variable
* Valid format(s) for the variable (e.g. `mm/dd/yy` vs `dd/mm/yyyy`)

...and essentially anything else that might be useful to know about any configuration variable.

## Namespaces
Every ConfigStore has its own unique namespace in the form of a 36-character GUID. This includes both account level and application level ConfigStores. 

You can find the namespace:

* For an application: under the ConfigStore tab 
* For an account: under Account Settings - ConfigStore

This namespace can be used to reference a particular ConfigStore, either via the API or using placeholders in configuration templates (see below).

## Accessing ConfigStore Variables

You access ConfigStore data by using the following syntax:
### Skycap Stencils

The basic syntax for Stencils is:

<pre class="terminal">
value: ${configstore("a.b")}
</pre>

If you want need to pull a value from the ConfigStore for a **specific application** the syntax is:

<pre class="terminal">
value: ${configstore("a.b", application["configstore_namespace"])}
</pre>

To fetch a value from the **account-level** ConfigStore, use the following syntax:

<pre class="terminal">
value: ${configstore("a.b", account["configstore_namespace"])}
</pre>
### Environment Variables

To load values from ConfigStore as environment variables in any application, open the [Environment Variables](/skycap/tutorials/setting-environment-variables.html) page via your Dashboard and use the following format as the *value* for any key:

```
_configstore(NAMESPACE_UUID.KEY)
```

### Service.yml placeholder
The following syntax must be used for  service.yml :

```
envs:
  - ABC: _env(XYZ)
```

This will define `XYZ` as an environment variable for the given service, which pulls `ABC` from the Application which in turn could come from the ConfigStore.

<!--

## CLI &amp; Advanced Features  

Access to advanced features is provided by the ConfigStore Command Line Interface. For example storing binary data in ConfigStore records. The CLI provides the following advanced features:

<ul>
    <li>
        <p>
            <strong>Binary Data</strong> &mdash; Support for storage of binary data.
        </p>
    </li>
</ul>


## Download ConfigStore CLI

If you are using Mac or Linux Auto Install by pasting the curl command in the Terminal is the easiest way to Install ConfigStore CLI.


### Auto Install

<kbd>curl -ssl https://s3.amazonaws.com/</kbd>

### ConfigStore Binaries
<p>
    <strong>Mac</strong> &mdash; <a href="#">Download ConfigStore CLI for Mac</a>
</p>
<p>
    <strong>Linux</strong> &mdash; <a href="#">Download ConfigStore CLI for Linux</a>
</p>
<p>
    <strong>Windows</strong> &mdash; <a href="#">Download ConfigStore CLI for Windows</a>
</p>

-->
