<!-- usedin: [ _legacy_docker/stack-management/applying-upgrades-v1.md, _maestro/stack-management/applying-upgrades-v1.md, _node/stack-management/applying-upgrades-v1.md, _rails/stack-management/applying-upgrades-v1.md] -->


#### In-place upgrades

Performing in-place Ruby upgrades on your stack carries some risk. Our deployment process always deploys the latest release of Ruby on new servers, so all new stacks and scaled up servers will have the latest version of Ruby installed.

We roll out automatic upgrades in case of security issues, and this will be made clear in your [StackScore](/building-your-stack/stack-definition#stackscore). You will need to redeploy your stack with the _Apply Ruby upgrades_ option from _Deploy with Options_ menu which will apply the security patches and then redeploy your application as usual.

If you have updated your base Ruby version in your Gemfile, we will attempt to upgrade your Ruby version to the latest patch version of your specified base version during the _Apply Upgrades_ step - note that there may be some server downtime during the Ruby base version upgrade operation.

When you _Deploy with options_ and select _Apply Ruby upgrades_, in addition to other upgrades, we will upgrade your installed LibYAML version if we detect your version is not current.




