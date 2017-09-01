<!-- usedin: [ _includes/_inlines/Databases/common/mongodb-replica-sets/mongodb-replica-sets_configure-mongoid-v1.md] -->

```
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= ENV['MONGODB_ADDRESS'] %>
			options:
				consistency: :strong
```
