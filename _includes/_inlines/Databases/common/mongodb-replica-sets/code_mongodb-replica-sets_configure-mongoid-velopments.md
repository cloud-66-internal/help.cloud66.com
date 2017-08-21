<!-- layout:code post: mongodb-replica-sets_configure-mongoid -->

```

development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= ENV['MONGODB_ADDRESS'] %>
			options:
				consistency: :strong

```
