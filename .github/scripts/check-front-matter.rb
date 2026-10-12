# Validates the YAML front matter of every page, post and collection item.
# Jekyll silently drops front matter it cannot parse, so a typo (for example an
# unquoted "Name: Title" value) publishes a blank item instead of failing the build.
# Usage: ruby .github/scripts/check-front-matter.rb   (run from the repo root)
require "yaml"
require "date"

REQUIRED = {
  "_in_the_media/" => %w[title link date],
  "_posts/" => %w[title],
  "_team/" => %w[name],
}

files = `git ls-files -- '*.md' '*.markdown' '*.html'`.split("\n").reject { |f| f.start_with?(".github/") }
errors = []
checked = 0

files.each do |path|
  text = File.read(path, encoding: "UTF-8")
  next unless text.start_with?("---\n", "---\r\n")
  match = text.match(/\A---\r?\n(.*?)^---\s*$/m)
  unless match
    errors << "#{path}: front matter starts with --- but has no closing ---"
    next
  end
  checked += 1
  begin
    data = YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: true) || {}
  rescue Psych::SyntaxError => e
    # e.line counts from the first line after the opening ---
    errors << "#{path}:#{e.line + 1}: invalid YAML (#{e.problem}). Values containing ': ' must be in quotes."
    next
  end
  unless data.is_a?(Hash)
    errors << "#{path}: front matter is not a list of key: value pairs"
    next
  end
  REQUIRED.each do |prefix, keys|
    next unless path.start_with?(prefix)
    missing = keys.select { |k| data[k].nil? || data[k].to_s.strip.empty? }
    errors << "#{path}: missing #{missing.join(', ')}" unless missing.empty?
  end
end

if errors.empty?
  puts "Front matter OK in #{checked} files."
else
  errors.each { |e| puts "::error::#{e}" }
  puts "#{errors.size} problem(s) in #{checked} files with front matter."
  exit 1
end
