---
layout: post
template: one-col
title: Using environment variables in a Dockerfile
categories: how-to-guides/build-and-config
order: 6
lead: "How to automatically pull environment variables into a Dockerfile"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## Overview

Your application may need to call environment variables during its build step - particularly if your build has multiple, dependent stages. A common way of achieving this is to add these calls to your Dockerfile. We explain how to achieve this below, and give examples.

## Calling an environment variable in a Dockerfile

You can pull the value of an environment variable from your Cloud 66 account into a Dockerfile using the `ENV` command and the format `$NAME_OF_KEY`. Note that the key name **must** be capitalized. For example the following:

```docker
ENV WEB_IP "$WEB_ADDRESS_INT"
```

...would pull the internal IP address of the application's webserver into the Dockerfile and assign it to a local variable named "WEB_IP". 

Note that this assumes that the environment variable you are calling **already exists** in your Cloud 66 application. If it doesn't, this call will result in a build error. 

You can also use the following format if you don't need to set the output as a variable and just need the value of the key for another operation.

```docker
RUN echo $WEB_ADDRESS_INT
```

## Pulling binaries into your Dockerfile using env_vars

It's possible to add small binary files (30KB or smaller) to your application during the build step using a combination of Base64 encoding and environment variables. To do so:

1. Hash the file using `cat filename.ext | base64` and copy the resulting hash (it may be very long, so take care).
2. Paste it into a new env_var in your Cloud 66 application dashboard
3. Add a RUN command to your Dockerfile. For example:
`RUN echo $QR_CODE | base64 -D > /var/www/QR-code.png` 

This will create a PNG called QR-code under the /var/www directory with the output of the base64 decoding.

For step 1 you can also use this method: `base64 -i filename.ext -o hashfilename` 

...if you'd prefer to output the hash as a file. This often makes it easier to copy the entire hash value (rather than copying from the terminal).