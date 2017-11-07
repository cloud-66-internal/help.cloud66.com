class AlgoliaSearchJekyllPush < Jekyll::Command
  class << self
    def custom_hook_excluded_file?(file)
	    puts "INSERT: #{file.path}"
      return false if file.path =~ %r{/.*_test.*/}
      true
    end
  end
end
