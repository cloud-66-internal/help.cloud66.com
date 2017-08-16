<!-- layout:code post: services_example -->


$ cx services scale -s mystack my_web_service 1
$ cx services scale -s mystack a_backend_service --server backend +5
$ cx services scale -s mystack a_backend_service -2
$ cx services scale -s mystack a_backend_service --group docker 3
