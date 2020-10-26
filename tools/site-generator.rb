#! /usr/bin/env ruby
require 'yaml'
PRODUCTS = %w[maestro rails node skycap]

# explicitly skipped pages/anchors
SKIPPED_REGEX = [/js\//i]
SKIPPED_PAGES = %w[searchResults search_results styleguide swiftype]
SKIPPED_ANCHORS = %w[registry_credentials repeat_inline]

def fatal(message)
	puts "FATAL! #{message}"
	exit -1
end

def warning(message)
	puts "WARNING: #{message}"
end

def configure
	# defaults
	directory = '.'
	output = 'help_links.yml'
	# parse args
	args = []
	::ARGV.each { |arg| arg.strip.gsub(/-/, '').split('=').each { |part| args << part } }
	args.each_slice(2) do |key_value|
		key = key_value[0].strip.gsub(/-/, '')
		value = key_value[1].strip
		directory = value if %w[d directory].include?(key)
		output = value if %w[o output].include?(key)
	end
	root_path = ::Dir.pwd
	# handle args
	if directory == '.'
		directory = root_path
	elsif !directory.start_with?('/')
		directory = "#{root_path}/#{directory}"
	end
	output = "#{root_path}/#{output}" unless output.start_with?('/')
	[directory, output]
end

def perform(directory)
	result = {}
	# create placeholders for each product
	PRODUCTS.each { |product| result[product] = {} }
	root_path = ::Dir.pwd
	full_file_paths = ::Dir.glob("#{directory}/**/*.html").select { |file_path| File.file?(file_path) }
	# process them
	full_file_paths.each do |full_file_path|
		puts "FOUND: #{full_file_path}"

		# strip the root_path from the full_file_path
		file_path = full_file_path.gsub("#{root_path}/", '')
		# find the name key
		name = File.basename(file_path, ".*")
		# exclude js files
		if SKIPPED_REGEX.any? { |regex| file_path =~ regex }
			puts "skipping (regex): #{file_path}"
			next
		end
		# exclude specific pages
		if SKIPPED_PAGES.any? { |skipped_page| name == skipped_page }
			puts "skipping (page): #{name}"
			next
		end
		# check for upcase in path
		fatal("Uppercase chars found in \"#{file_path}\"") if file_path =~ /[A-Z]/
		# find the product
		path = File.dirname(file_path)
		product = PRODUCTS.detect { |prod| path =~ /#{prod}/i }
		# skip if we don't have a product
		next if product.nil?
		name_key = name.gsub(/-/, '_')
		# special case for "index.html" pages
		if name_key == 'index'
			name_key = path.gsub(/\//, '-')
			name_key = name_key.gsub(/#{product}\-?/, '')
			name_key = product if name_key.strip.empty?
		end
		# generate anchors list
		content = ::IO.read(full_file_path)
		href_anchors = content.scan(/href\s?=\s?["']#(?<anchor>[a-z0-9\-_]+)["']/).flatten
		h_anchors = content.scan(/\<h[2|3].*?id\s?=\s?["'](?<anchor>[a-z0-9\-_]+)["']/).flatten
		page_anchors = href_anchors | h_anchors
		page_anchors = page_anchors.sort
		# exclude specific page anchors
		page_anchors = page_anchors.reject { |page_anchor| SKIPPED_ANCHORS.any? { |skipped_anchor| page_anchor == skipped_anchor } }
		# check for upcase in path
		fatal("Anchor with underscore char found \"#{file_path}\" --> \"#{page_anchors.join(',')}\"") if page_anchors.any? { |anchor| anchor =~ /_/ }
		# store info in the pages hash
		product_hash = result[product]
		fatal("Duplicate page found. \"#{name}\"=\"#{file_path}\" has already been added as \"#{name}\"=\"#{product_hash[name_key]}\"") if product_hash.has_key?(name_key)
		product_hash[name_key] = { page: file_path, page_anchors: page_anchors }
	end
	# sort the hash by keys
	PRODUCTS.each { |product| result[product] = result[product].sort.to_h }
	# return sorted result
	result.sort.to_h
end

def dump(result, output)
	# convert to yaml
	yaml_content = result.to_yaml(indentation: 2, line_width: -1)
	yaml_content = yaml_content.gsub(/---\s+/, '')
	# write to file
	File.open(output, 'w') { |file| file.puts yaml_content }
end

# configure directory and output
directory, output = configure
puts "[Starting]"
puts "Directory --> \"#{directory}\""
puts "Output --> \"#{output}\""
# find all relevant files
result = perform(directory)
# dump result as needed
dump(result, output)
puts "[Done]"