Add an SSL certificate to a stack.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks ssl --stack <application name> --type <certificate type> --domain <domain name> --ssl-termination --cert <certificate file> --key <SSL key file> --intermediate <intermediate cert file> --overwrite
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
| \--type &lt;certificate type&gt; | yes | — | The type of certificate (lets_encrypt or manual) |
| \--domain &lt;domain name&gt; | Depends on --type | — | Domain name applicable to this SSL certificate (required for  lets_encrypt, optional for manual). Repeatable for multiple domains |
| \--ssl-termination | no | — | Enable SSL termination |
| \--cert &lt;certificate file&gt; | Depends on --type | — | SSL certificate file path (required for manual) |
| \--key &lt;SSL key file&gt; | Depends on --type | — | SSL key file path (required for manual) |
| \--intermediate &lt;intermediate cert file&gt; | no | — | SSL intermediate certificate file path |
| \--overwrite | yes, if cert already exists | — | Required confirmation flag to update an existing SSL certificate |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks ssl add -s my-stack --type lets_encrypt --domain 'web.domain.com' --domain 'api.domain.com' --overwrite

$ cx stacks ssl add -s my-stack --type manual --cert /certs/my_certificate --key /ssl/my_key --intermediate /certs/my_intermediate_cert
{% include references/toolbelt/boilerplate/footer.html %}