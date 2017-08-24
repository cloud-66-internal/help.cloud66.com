
```

production:
	glusterfs:
		configuration:
			version: 3.7
			replica_count: 2
			mount_targets: ['app','redis']
			volumes:
		  	- volume:
				name: images-data
				mount: "/mnt/images"
				access_control:
			  		read: ['web', 'api']
			  		write: ['web']
		  	- volume:
				name: videos
				mount: /mnt-data/videos
				access_control:
			  		read: ['web']
			  		write: ['web']

```
