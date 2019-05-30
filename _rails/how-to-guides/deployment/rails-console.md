---
layout: post
template: one-col
title: Running the Rails Console
categories: how-to-guides/deployment
order: 3
lead: "How to run the Rails console for your Cloud 66 application"
tags: ["debugging"]
legacy: false

permalink: /:collection/:path:output_ext
---

Start by [SSHing to your server](/rails/how-to-guides/common-tools/ssh.html). Then go to your `STACK_PATH` (e.g. `cd $STACK_PATH`) and run the following command:

```
$ bundle exec rails c <environment>
```

**Possible values for \<environment\>:**

*   development (default)
*   test
*   production

To run your Rails console as the Nginx user, you can use the following command:

```
$ sudo -u nginx bash -c 'source /var/.cloud66_env && bundle exec rails c'
```


