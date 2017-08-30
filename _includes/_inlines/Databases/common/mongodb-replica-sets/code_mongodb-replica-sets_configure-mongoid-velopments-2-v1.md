<!-- usedin: [ _includes/_inlines/Databases/common/mongodb-replica-sets/mongodb-replica-sets_configure-mongoid-v1.md] -->

```

development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= "[#{ENV['MONGODB_ADDRESSES'].split(',').map {|addr| "\"#{addr}:27017\""}.join(',')}]" %>
			options:
				consistency: :strong

```
