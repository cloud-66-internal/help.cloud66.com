<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


## What is a manifest file?

A manifest file allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack. See [Getting started with manifest files](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) for an introduction.

{% if include.product == "rails" %}
For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
{% endif %}
{% if include.product == "maestro" or include.product == "legacy_docker" %}
For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the _Configure manifest_ item in the right menu of your stack page.
{% endif %}
Once you're ready, start by going through each section below to build your manifest file.

