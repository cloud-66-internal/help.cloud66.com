<!-- usedin: [ _legacy_docker/stack-management/applying-upgrades.md, _maestro/stack-management/applying-upgrades.md, _node/stack-management/applying-upgrades.md, _rails/stack-management/applying-upgrades.md] -->


### Docker and Weave

### Tip!

It is best to keep your Docker and Weave versions up to date as they are released quite frequently with bug/security fixes

1.  Update your manifest file (Configuration Files -> Manifest.yml) and change the Docker and Weave version to the latest ones.
2. Click on DEPLOY and choose Deploy with options
3. Go to the More options tab and tick the Apply Docker upgrades check box.

### Warning!

Upgrading in-place involves downtime as the docker engine and local files are all upgraded. To have zero down-time you'd have to clone your stack and use Failover groups to switch to the new one.



