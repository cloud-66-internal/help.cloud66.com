---
layout: code
---

development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: &lt;%= "[#{ENV['MONGODB_ADDRESSES'].split(',').map {|addr| "\"#{addr}:27017\""}.join(',')}]" %&gt;
			options:
				consistency: :strong
