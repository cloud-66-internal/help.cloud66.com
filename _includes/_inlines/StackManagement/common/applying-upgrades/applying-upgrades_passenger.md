<!-- usedin: [ _legacy_docker/stack-management/applying-upgrades.md, _maestro/stack-management/applying-upgrades.md, _node/stack-management/applying-upgrades.md, _rails/stack-management/applying-upgrades.md] -->


### Passenger

The recommended way to upgrade your passenger to the latest one is:

* Scale up a new web server and drop the old one, so the scaled up one will automatically have the [latest version](/introduction-to-cloud-66/technical-specifications#versions) supported by Cloud 66.

