<!-- usedin: [ _rails/deployment] - post: -->


## Custom commands

Given that Padrino applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

*    **Custom build command** &mdash; This command will run every time until the first build is successful. Example:

      
      bundle exec rake db:seed


*    **Custom deploy command** &mdash; This command will run on every deployment (including initial build). Example:

      
      bundle exec rake db:migrate


These commands can be set via [Toolbelt](/toolbelt/toolbelt-settings-command),



{%include _inlines/Deployment/Rails/padrino-stacks/code_padrino-stacks_custom-commands-cxsettingss.md %}




But also in your [manifest file](/building-your-stack/getting-started-with-manifest-files).



{%include _inlines/Deployment/Rails/padrino-stacks/code_padrino-stacks_custom-commands-velopment.md %}




