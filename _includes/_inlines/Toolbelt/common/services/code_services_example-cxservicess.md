<!-- usedin: [ _includes/_inlines/Toolbelt/common/services/services_example-2.md] -->

```
$ cx services scale -s mystack my_web_service 1
$ cx services scale -s mystack a_backend_service --server backend +5
$ cx services scale -s mystack a_backend_service -2
$ cx services scale -s mystack a_backend_service --group docker 3
```
