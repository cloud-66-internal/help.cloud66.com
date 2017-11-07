<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->

## Note
The gateway should be defined and open before you can use it in manifest.
```
production:
	gateway:
	    name: aws_bastion
	    username: ec2-user
```

