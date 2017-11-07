<!-- usedin: [ _legacy_docker/stack-management/applying-upgrades-v1.md, _maestro/stack-management/applying-upgrades-v1.md, _node/stack-management/applying-upgrades-v1.md, _rails/stack-management/applying-upgrades-v1.md] -->


### Passenger

The recommended way to upgrade your passenger to the latest one is:

* Scale up a new web server and drop the old one, so the scaled up one will automatically have the [latest version](https://help.cloud66.works/general/introduction/technical-specifications.html) supported by Cloud 66.

