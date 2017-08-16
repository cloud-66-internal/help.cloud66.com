---
post: 
---

## Cloud 66 Starter

Cloud 66 starter is an open-source command line tool to generate a _Dockerfile_ and a _service.yml_ file from arbitrary source code. The _service.yml_ file is a Cloud 66 service definition file which is used to define the service configurations on a stack.

Starter works in the same way as BuildPacks do, but only generates the above mentioned files; the image compile step happens on the [BuildGrid](http://help.cloud66.com/building-your-stack/introduction-to-docker-deployments). Starter does not require any additional third party tools or frameworks to work (it's compiled as a Go executable).

