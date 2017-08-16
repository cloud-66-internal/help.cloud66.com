---
post: 
---

#### Target the first server in a server group



{%include _inlines/2013-01-20-whenever/code_2013-01-20-whenever_target-the-first-server-in-a-serve.md %}



This will only run _MyClass.some_job_ on your primary app server, and _MyClass.another_job_ on all app servers. It checks whether or not each server
has the _PRIMARY_ environment variable set to true.




