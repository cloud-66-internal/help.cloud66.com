module Jekyll
  module Algolia
    module Hooks
      def self.should_be_excluded?(filepath)
        return true if filepath =~ %r{toolbelt.md}
		return true if filepath =~ %r{styleguide.html} 
		return true if filepath =~ %r{/shells/stacks.md}
		return true if filepath =~ %r{/index.md}
		false
      end
    end
  end
end
