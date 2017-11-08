


## Detected IP is different

CX detects the IP that you get by searching "what is my IP" on google. Some network providers may use a different IP for different destination's port in this case port 22 for SSH. So to avoid this palying havoc with the `cx ssh` you will need to open the port to the world first and then `cx ssh`, so try running the following commands:

{%include _inlines/Troubleshooting/common/ssh/code_ssh_detected-ip-is-different-leaseslt-v1.md  product = include.product %}
