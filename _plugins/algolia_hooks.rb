module Jekyll
  module Algolia
    module Hooks
      def self.should_be_excluded?(filepath)
		return true if filepath =~ %r{toolbelt.md}
		return true if filepath =~ %r{styleguide.html} 
		return true if filepath =~ %r{/shells/stacks.md}
		return true if filepath =~ %r{/index.md}
		# return true if filepath =~ %r{/tutorials/deploy-hooks.md}
		return true if filepath =~ %r{/add-ins/database-backups.md}
		false
			end
			
			# fields `excerpt` and `excerpt_html` reduced to 500 characters
			def self.before_indexing_all(records, context = {})
				records.each do |record|
					if record.key? :excerpt
						record[:excerpt] = record[:excerpt].slice(0, 100)
					end

					if record.key? :excerpt_html
						record[:excerpt_html] = record[:excerpt_html].slice(0, 100)
					end
				end

				records
			end
    end
  end
end
