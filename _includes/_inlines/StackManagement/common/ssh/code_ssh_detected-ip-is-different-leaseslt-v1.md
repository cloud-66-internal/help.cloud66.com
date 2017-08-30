<!-- usedin: [ _includes/_inlines/StackManagement/common/ssh/ssh_detected-ip-is-different-v1.md] -->

```
cx lease -s <STACK_NAME> -e <ENVIRONMENT> -p 22 -t 10 -f 0.0.0.0/0
cx ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```
