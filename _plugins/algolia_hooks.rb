module Jekyll
  module Algolia
    module Hooks
      def self.should_be_excluded?(filepath)
        return true if filepath =~ %r{/shells/toolbelt.md}
		return true if filepath =~ %r{/styleguide}
        false
      end
    end
  end
end
