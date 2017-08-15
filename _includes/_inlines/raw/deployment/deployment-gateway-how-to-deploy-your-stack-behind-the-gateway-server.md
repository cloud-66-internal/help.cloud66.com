## How to deploy your stack behind the gateway server

Gateway management is available through [toolbelt](/toolbelt/toolbelt-gateway-management) .

First you need to define a gateway:



{%include _inlines/path_to_code %}



In order to use this gateway for a stack deployment, you need to first specify it in the manifest:



{%include _inlines/path_to_code %}



and then make it available before you start the deployment:



{%include _inlines/path_to_code %}



Now you can start deploying your stack.

After the deployment is finished you can invalidate the gateway or leave it until the TTL is over.



{%include _inlines/path_to_code %}



