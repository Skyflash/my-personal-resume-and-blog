source 'https://rubygems.org'

# GitHub Pages (the classic "Deploy from a branch" pipeline) ignores this
# Gemfile's Jekyll/plugin pins and always builds with THIS gem, which pins
# every version (Jekyll included) to whatever is actually running in
# production. Using it locally too avoids something working here and then
# breaking only once published (jekyll-seo-tag and jekyll-redirect-from are
# already included as dependencies of this gem; blog pagination is handled
# by hand in _layouts/blog-index.html, not by jekyll-paginate).
gem "github-pages", "~> 232", group: :jekyll_plugins

# Ruby 3.4+ stopped shipping these as default gems; Jekyll/Liquid still need them
gem 'logger'
gem 'bigdecimal'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data"

# Performance-booster for watching directories on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?

gem "webrick"
gem "rack", ">= 2.1.4"