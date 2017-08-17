<!-- post: -->


## How can I use a manifest file?

The way to use this functionality differs from _Rails/Rack_ to _Docker_ stacks:

- For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
- For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the `Configure manifest` item in the right menu of your stack page.

