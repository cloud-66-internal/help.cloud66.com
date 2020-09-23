## Overview

Many of the infrastructural and configuration components managed by Cloud 66 can be tagged. This includes entire applications, individual servers within an application, and many other elements like services and templates. These tags are useful for searching and filtering application components, both manually and as part of automated processes. 

## Adding tags to a server

To **add** a tag to a server:

1. Log into your Cloud 66 dashboard and click on your application
2. Click on the Servers tab in the main panel
3. Click on the name of the server you'd like to tag
4. Click on the tag icon (🏷) at the top right of the Server info panel and then click on *Add Tags*
5. Type in your tag and click *Save*
6. You should now be able to see the tag just below your server's name.

![Tagging a server](/assets/shared/tagging-server.png "How to tag a server")

### Beta only

<div class="notice notice-warning"><p>
The tag propagation feature below is currently only available to users in our Beta Programme. If you'd like to join the programme please <a href="/{{page.collection}}/resources/cloud-66-beta-program.html">follow our quick guide</a> to add yourself to the programme.</p></div>

## Propagation of tags to cloud providers

Some cloud providers (see table below) support the propagation of your Cloud 66 tags into their own tagging systems. This allows you to more easily identify and link components across different platforms. At the moment the only components that support this feature are **cloud servers** and **load balancers.** The level of support also differs depending on cloud provider. 

### Supported cloud providers and components

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="25%">Cloud provider</th>
    <th width="40%">Components supported</th>
    <th width="20%">Supports key/value tags?</th>
    <th width="15%">Tag limit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>AWS</td>
    <td>servers, load balancers</td>
    <td>yes</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Azure (new)</td>
    <td>servers, load balancers</td>
    <td>yes</td>
    <td>50</td>
  </tr>
  <tr>
    <td>DigitalOcean</td>
    <td>servers</td>
    <td>no</td>
    <td>64</td>
  </tr>
  <tr>
    <td>Hetzner</td>
    <td>servers</td>
    <td>yes</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Packet</td>
    <td>servers</td>
    <td>no</td>
    <td>100</td>
  </tr>
</tbody>
</table>


### Syntax of propagated tags

When Cloud 66 propagates your tags, we transform them to ensure they are compatible with cloud provider systems. The exact nature of this transformation depends on:

- Whether they are **simple text tags**, or **key/value pairs**
- Whether the provider supports **key/value** formatting for tags

### Simple tags

For **simple tags**, we: 

1. Sanitize the tag to conform to DNS standards (non-conforming characters are transformed into `-`) 
2. Remove any trailing and leading dashes and transform any consecutive dashes into single dashes.
3. Prepend the tag with `cloud66-`. 
4. Truncate the tag down to 63 characters in length

So the tag `hello!world` would become `cloud66-hello-world` in the cloud provider's systems.

### Key/value tags

If a provider *supports* **key/value tags** (see table above), then we:

1. Sanitize both key and value to conform to DNS standards (non-conforming characters are transformed into `-`)
2. Remove any trailing and leading dashes and transform any consecutive dashes into single dashes.
3. Prepend the *key* with `cloud66-` and truncate down to 63 characters in length
4. Truncate the *value* to 63 characters in length

So if your original tag is `hello&&there=world` then we will propagate it as:

- KEY: `cloud66-hello-there`
- VALUE: `world`

If a provider *does not support* **key/value tags**, then we concatenate the entire key/value into a single tag, sanitize it, prepend it with `cloud66-` and truncate it as normal. So if your original tag is `hello%fish=world` then we will propagate it as `cloud66-hello-fish-world`

### Tag limits

Cloud providers all have limits on the number of tags each component can have (see table above). If a component has reached its limit for tags we will not attempt to propagate tags to that component as this can result in data loss or other issues.