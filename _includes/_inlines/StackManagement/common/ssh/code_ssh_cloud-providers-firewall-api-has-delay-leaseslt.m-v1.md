<!-- usedin: [ _includes/_inlines/StackManagement/common/ssh/ssh_cloud-providers-firewall-api-has-delay-v1.md] -->

```
cx lease -s <STACK_NAME> -e <ENVIRONMENT> -p 22 -t 10
sleep 10
cx ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```
