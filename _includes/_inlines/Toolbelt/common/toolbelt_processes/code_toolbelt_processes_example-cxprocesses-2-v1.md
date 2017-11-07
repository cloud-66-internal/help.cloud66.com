<!-- usedin: [ _includes/_inlines/Toolbelt/common/toolbelt_processes/toolbelt_processes_example-v1.md] -->

```
$ cx processes scale -s mystack --server backend1 --name worker [+5]
$ cx processes scale -s mystack --server backend2 --name worker [-5]
$ cx processes scale -s mystack --server backend3 --name worker 15
$ cx processes scale -s mystack --name worker 2
```
