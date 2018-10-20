---
layout: post
template: oss
externallink: https://github.com/cloud66-oss/alterant
title: Extending Alterant
label: Alterant
legacy: false
permalink: /:collection/:path
order: 6
---

## Adding new helpers

Alterant helpers can be written in both Ruby and Javascript. Ruby helpers have a limitation that means they can only return a simple Javascript hash (see examples of `YamlReader` and `JsonReader`). Javascript helpers share the same limitations as with the rest of the modifiers: no IO and file access.

### Add a new Ruby helper

Here is the code for `JsonReader` helper, written in Ruby (as it requires file access):

```ruby
module Alterant
	module Classes
		class JsonReader
			attr_reader :value

			def call(file)
				if @alter.basedir.nil?
					raise ::Alterant::RuntimeError, 'no basedir set'
				end

				content = File.read(File.join(@alter.basedir, file))
				return ::JSON.load(content)
			end

			def initialize(alter, context)
				@context = context
				@alter = alter
			end

		end
	end
end
```

The file should be located under the `classes` folder of the gem. When `JsonReader` is called from within the modifier, the `call` method is called with the passed in parameters from Javascript and result is returned to the modifier as a hash.

### Add a new Javascript helper

Here is the `Containers` helper, written in Javascript:


<pre class="prettyprint">
class Containers {
    constructor(containers) {
        this.containers = containers
    }

    by_name(name) {
        for (var c in this.containers) {
            var item = this.containers[c]
            if (item.name == name) {
                return item
            }
        }

        return null
    }
}
</pre>
