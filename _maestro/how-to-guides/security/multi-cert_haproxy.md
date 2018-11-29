---
layout: post
template: one-col
title: Multi-certificate SSL for HAProxy
categories: how-to-guides/security
lead: "How to configure multi-certificate SSL for HAProxy in Maestro"
legacy: false
tags: ["ssl","haproxy"]
permalink: /:collection/:path
---

## Overview

Some applications require multiple SSL certificates to function (for example if they serve multiple domains). To configure HAproxy as a termination point for multiple certificates, follow the steps below. Remember to replace placeholder (e.g. `websitename`) with your own values.

This guide assumes you are familiar with Cloud 66 Toolbelt. If you aren't we have a [quick guide](/maestro/quickstarts/using-cloud66-toolbelt.html) to get you up and running.

### 1. Concatenate the certificate files

Run the following command on your local machine:

```
cat CERT1.CRT_PATH [CERT1_MID.crt_path] PRIVATE1.key_PATH > websitename1.pem

cat CERT2.CRT_PATH [CERT2_MID.crt_PATH] PRIVATE2.key_PATH > websitename2.pem
```


### 2. Upload them to /tmp on the server

```
cx upload -s app_name --server haproxy_server_name websitename1.pem_PATH websitename1.pem
cx upload -s app_name --server haproxy_server_name websitename2.pem_PATH websitename2.pem
```

### 3. Log into your HAproxy server

```
cx ssh -s app_name haproxy_server_name
```


### 4. Copy the cert files from /tmp to their directory

```
sudo cp /tmp/websitename1.pem /etc/ssl/private/websitename1.pem
sudo cp /tmp/websitename2.pem /etc/ssl/private/websitename2.pem
```


### 5. Change the settings in your HAproxy config

In the UI Find the following line in your HAproxy config page:

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and change it to:

`bind 0.0.0.0:{{port[0]}} ssl crt websitename1.pem crt websitename2.pem`


### Note
<div class="notice notice-warning"><p>Make sure websitename1.pem and websitename2.pem are the same names as the filenames you have under <code>/etc/ssl/private/</code>.</p></div>



