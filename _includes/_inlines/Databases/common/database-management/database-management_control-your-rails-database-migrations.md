<!--  usedin: [ _legacy_docker/Databases/database-management.md, _maestro/Databases/database-management.md, _node/Databases/database-management.md, _rails/databases/database-management.md] -->


## Control your Rails database migrations

Cloud 66 chooses a server to perform the migrations - all other servers will wait until the migrations are finished before continuing with deployment. You can see which server performs the migrations in the Stack Information page, and change it using the `c66.migrations.run` [reserved tag](/deployment/cloud-66-reserved-tags#tags).

You can control your Rails database migrations by setting `run.deploy.command` option through [Stack settings](/toolbelt/toolbelt-settings-command) via [Toolbelt](/toolbelt/toolbelt-introduction) which gives you the option of running migrations or not.



{%include _inlines/Databases/common/database-management/code_database-management_control-your-rails-database-migrat.md  product = include.product %}




When you have disabled `run.deploy.command` in [Stack settings](/toolbelt/toolbelt-settings-command) , you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.

