post: ssh_detected-ip-is-different.md -->
```
cx lease -s <STACK_NAME> -e <ENVIRONMENT> -p 22 -t 10 -f 0.0.0.0/0
cx ssh -s <STACK_NAME> -e <ENVIRONMENT> <SERVER_NAME>
```
