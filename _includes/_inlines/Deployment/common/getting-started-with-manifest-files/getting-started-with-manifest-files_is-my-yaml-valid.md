

### Is my yaml valid?

The manifest file is YAML formatted. You can check its validity at [YAML Lint](http://www.yamllint.com/) or with this command:
    
`$ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"`
    

If you'd like to use a _Rails/Rack_ stack, once your `manifest.yml` file is in your `.cloud66` folder and checked in, you can go ahead and build your stack.

If you'd like to use a _Docker_ stack, create it and use the _Advanced_ tab after your code has been analyzed to provide your manifest content.




