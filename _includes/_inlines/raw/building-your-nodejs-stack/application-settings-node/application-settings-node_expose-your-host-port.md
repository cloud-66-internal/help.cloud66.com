---
post: 
---

##  Expose your host port

If your application binds to a port, we need to expose it to the internet and make sure we can load balance traffic to your application. We provide you with an environment variable called `PORT` to tell which port your need to bind your application to. Make sure your use the following line:



{%include _inlines/application-settings-node/code_application-settings-node_expose-your-host-port-rportp.md %}



