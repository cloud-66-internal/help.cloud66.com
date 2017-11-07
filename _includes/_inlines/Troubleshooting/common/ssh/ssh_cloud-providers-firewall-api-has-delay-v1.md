<!--  usedin: [ _legacy_docker/stack-management/ssh-v1.md, _maestro/stack-management/ssh-v1.md, _node/stack-management/ssh-v1.md, _rails/stack-management/ssh-v1.md] -->


## Cloud provider's firewall API has delay

It happens some times that on cloud providers the API for opening a port gets back with ok before the rule actually gets applied, thus SSH fails. By running the bellow commands you'll give it 10 seconds for the rule to be applied, and then you try.



{%include _inlines/Troubleshooting/common/ssh/code_ssh_cloud-providers-firewall-api-has-delay-leaseslt.m-v1.md  product = include.product %}

