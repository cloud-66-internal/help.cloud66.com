---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/asset-pipeline/code_asset-pipeline_application.rb-nfigassetse.html" ]
 usedin: [ _rails/deployment/asset-pipeline.md] -->


### Application.rb

Asset Pipeline precompilation will be disabled if `config.assets.enabled` variable is assigned to *false* in your `application.rb` file:



{%include _inlines/Deployment/Rails/asset-pipeline/code_asset-pipeline_application.rb-nfigassetse.md %}




    
Setting this value to false means that your application doesn't use the asset pipeline at all, so precompilation is not relevant
.

