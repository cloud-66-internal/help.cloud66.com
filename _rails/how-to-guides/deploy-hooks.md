---
menuheaders: [ "Cap deploy failed" ]
layout: post
template: one-col
title: Troubleshoot Deploy Hooks
categories: how-to-guides
lead: ""
legacy: false
permalink: /:collection/:path
---




## Package Installation

We've seen this happen that deploy hooks with NPM installation fails without any logs. The reason is that some package installations throw lots of logs which overwhelms the connection and kills the connection - that is why they fail with no useful logs. You can change your deploy hook command to pipe the output to a file instead, in order to avoid facing this issue. The following is a sample to use for installing NPM:



```
production: # Environment
  last_thing: # Hook point
  - command: cd $STACK_BASE/releases/$(ls -1 -t $STACK_BASE/releases/ | head -n1) && npm install > /tmp/npminstall.log
  target: rails # Hook fields ↓
  run_on: all_servers
  apply_during: all
```

