<!-- post: -->


## How do I actually restart my servers?

In order to minimise down-time, you can restart one server at a time (assuming you have a [load balancer](/web-server/load-balancing) in place). Selecting an out-of-hours time is recommended to minimise disruption. You can also use the [maintenance page](/managing-your-stack/stack-network-settings#maintenance) to temporarily notify your users that you are performing maintenance.

To restart your server, it is recommended that you [SSH to your server](/managing-your-stack/ssh-to-your-server) and run either of the following terminal commands:



```
sudo reboot 
```





{%include _inlines/StackManagement/common/server-restart-notifications/code_server-restart-notifications_how-do-i-actually-restart.md %}







