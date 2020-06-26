---
layout: post
template: one-col
title: Using HashiCorp Vault with Skycap
categories: how-to-guides/configuration
order: 12
lead: "How to integrate HashiCorp Vault into your Skycap workflows"
legacy: false
tags: ["integration,secrets"]
permalink: /:collection/:path:output_ext
---

## Overview

[HashiCorp Vault](https://www.vaultproject.io/) is an open-source service for storing, securing, and controlling access to sensitive or secret data, including passwords, keys, tokens and certificates. 

If you have your own instance of Vault, you can integrate it with Skycap to pull secrets as dynamic values into your Stencils at render without ever exposing them during the configuration process.

## Enabling Vault integration

To connect your Vault to your Cloud 66 account:

1. Ensure you have your Vault address, including the port, and [non-root and renewable token](https://www.vaultproject.io/docs/concepts/tokens.html) that Cloud 66 can use 
2. Open your [Dashboard](https://app.cloud66.com/dashboard)
3. Click on your account avatar (top-right) and select *Account Settings*
4. Click on *External Services* in the **Settings** panel on the left
5. Click on the *HashiCorp Vault* tab at the top of the main panel
6. Click the *Add Vault* button
7. Fill in the details of your Vault and click *Connect to Vault*

Cloud 66 will now try to connect to your Vault using these credentials and, if successful, your Vault will now be available for use within Skycap.

## Using Vault with Skycap

You can pull a single value from Vault into any Stencil using the following placeholder syntax:

`vault("/path_root/path_to_key","key_name")`

You can also pull an entire set of values from any path in Vault using the following command:

`vaultlist("/path_root/path_to_keys",indent_level)`

The `indent_level` parameter is important because YAML files use indentation for their hierarchical structure, and most Stencils (and Kubernetes configuration files) are written in YAML.

### Examples

The Stencil below fetches the username and password for the production database credentials stored in Vault. 

<pre class="prettyprint">
apiVersion: v1
kind: Secret
metadata:
  namespace: my_app
  name: db-credentials
  annotations:
    cloud66.com/formation-uuid: ${formation["uuid"]}
    cloud66.com/stencil-uuid: ${stencil["uuid"]}
    cloud66.com/snapshot-uid: ${snapshot["uid"]}
    cloud66.com/snapshot-gitref: ${snapshot["gitref"]}
  labels:
    app: ${stackname}
type: Opaque
data:
  password: ${vault("/production/db-credentials", "password")}
  username: ${vault("/production/db-credentials", "username")}

</pre>


This Stencil would pull all of the values from Vault and indent them by two spaces:

<pre class="prettyprint">
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
 
</pre>
