

```
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= "[#{ENV['MONGODB_ADDRESSES'].split(',').map {|addr| "\"#{addr}:27017\""}.join(',')}]" %>
			options:
				consistency: :strong
```
