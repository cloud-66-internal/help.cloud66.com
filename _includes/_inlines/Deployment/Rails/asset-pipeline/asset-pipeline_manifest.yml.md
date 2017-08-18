<!-- post: -->


### Manifest.yml

Use our [Cloud 66 manifest file](/building-your-stack/getting-started-with-manifest-files) to enable/disable asset pipeline pre-compilation using the following parameter with a true or false, find 
an example
 below:



{%include _inlines/Deployment/Rails/asset-pipeline/code_asset-pipeline_manifest.yml-velopment.md %}




There is an hierarchical order to set up asset pipeline precompilation. The top one will override the others.

1.  In application.rb
2.  In the Cloud 66 manifest file
3.  In the Cloud 66 interface

