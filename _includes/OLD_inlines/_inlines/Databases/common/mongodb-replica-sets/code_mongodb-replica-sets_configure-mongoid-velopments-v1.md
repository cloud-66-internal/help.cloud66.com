

```
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= ENV['MONGODB_ADDRESS'] %>
			options:
				consistency: :strong
```
