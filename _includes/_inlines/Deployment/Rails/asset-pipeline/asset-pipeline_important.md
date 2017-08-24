<!-- usedin: [ _rails/deployment] - post: -->


### Important

If you disable Asset Pipeline Precompilation but want to use Asset Pipeline Compilation, you need to use Live Compilation (on demand) by adding the following line into your 
application.rb:


{%include _inlines/Deployment/Rails/asset-pipeline/code_asset-pipeline_important-figassetsco.md %}


Live Compilation (on-demand) [does not perform as well as Precompilation](http://guides.rubyonrails.org/asset_pipeline.html#live-compilation) and is generaly not recommended for production environments.

