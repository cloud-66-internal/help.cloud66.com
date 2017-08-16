---
layout: code
post: mongodb-replica-sets_configure-mongoid.md
---


development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: &lt;%= ENV['MONGODB_ADDRESS'] %&gt;
			options:
				consistency: :strong
