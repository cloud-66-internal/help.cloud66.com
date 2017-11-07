<!--  usedin: [ _rails/deployment/sinatra-stacks-v1.md] -->


## Custom commands

Given that Sinatra applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

*  **Custom build command** - This command will run every time until the first build is successful. Example:

      
      bundle exec rake db:seed


*  **Custom deploy command** - This command will run on every deployment (including initial build). Example:

      
      bundle exec rake db:migrate


These commands can be set via [Toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/settings.html),



{%include _inlines/Deployment/Rails/sinatra-stacks/code_sinatra-stacks_custom-commands-cxsettingss-v1.md  product = include.product %}




But also in your [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html).



{%include _inlines/Deployment/Rails/sinatra-stacks/code_sinatra-stacks_custom-commands-velopment-v1.md  product = include.product %}




