


## Get Started

To get started [download the executable](http://app.cloud66.com/starter) and run it on your development machine.



{%include _inlines/Deployment/common/cloud66-starter/code_cloud66-starter_get-started-cdmyprojec-v1.md  product = include.product %}




This will analyze the project in the current folder and generate the two files: _Dockerfile_ and _service.yml_ in the same folder, prompting for information when required.



{%include _inlines/Deployment/common/cloud66-starter/code_cloud66-starter_get-started-loudtart-v1.md  product = include.product %}




Starter supports Procfiles and generates a service in _service.yml_ for each item in the _Procfile_. It is strongly advised to use a _Procfile_ to define your own service commands, as starter will only detect the web service otherwise.

To use starter on a different folder, you can use the `p` option:



{%include _inlines/Deployment/common/cloud66-starter/code_cloud66-starter_get-started-starterpm-v1.md  product = include.product %}




For more options, please see:



{%include _inlines/Deployment/common/cloud66-starter/code_cloud66-starter_get-started-starterhel-v1.md  product = include.product %}




