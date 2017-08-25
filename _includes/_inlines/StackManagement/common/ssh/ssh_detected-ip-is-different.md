<!--  usedin: [ _legacy_docker/stack-management/ssh.md, _maestro/stack-management/ssh.md, _node/stack-management/ssh.md, _rails/stack-management/ssh.md] -->


## Detected IP is different

CX detects the IP that you get by searching "what is my IP" on google. Some network providers may use a different IP for different destination's port in this case port 22 for SSH. So to avoid this palying havoc with the `cx ssh` you will need to open the port to the world first and then `cx ssh`, so try running the following commands:

{%include _inlines/StackManagement/common/ssh/code_ssh_detected-ip-is-different-leaseslt.md  product = include.product %}
