
You can enable/disable asset pipeline precompilation for Rails stacks after the analysis step of your stack creation, or in your manifest file.

The asset pipeline compilation option will be hidden if you have enabled/disabled asset pipeline compilation in your application.rb or in the manifest file.

### Important

If you disable Asset Pipeline Precompilation but want to use Asset Pipeline Compilation, you need to use Live Compilation (on demand) by adding the following line into your application.rb:

	config.assets.compile = true

Live Compilation (on-demand) [does not perform as well as Precompilation](http://guides.rubyonrails.org/asset_pipeline.html#live-compilation) and is generaly not recommended for production environments.

### Application.rb

Asset Pipeline precompilation will be disabled if `config.assets.enabled` variable is assigned to false in your `application.rb` file:

	config.assets.enabled = false

Setting this value to false means that your application doesn't use the asset pipeline at all, so precompilation is not relevant.

### Manifest.yml

Use our [Cloud 66 manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) to enable/disable asset pipeline pre-compilation using the following parameter with a true or false, find an example below:

```
development:
    rails:
        configuration:
            asset_pipeline_precompile: true
```

There is an hierarchical order to set up asset pipeline precompilation. The top one will override the others.

1. In application.rb
2. In the Cloud 66 manifest file
3. In the Cloud 66 interface

### Asset pipeline compilation requirements

Asset pipeline compilation uses _ExecJS_ to run _JavaScript_ code from within Ruby.

The ExecJS library in turn requires that you have at least one library available on your server that is capable of compiling Javascript. Libraries for Javascript compilation on your server that are currently supported by Cloud 66 are:

1. **therubyracer** — Google V8 embedded within Ruby. Installed by including “therubyracer” in your Gemfile.
2. **Node.js** — Cloud 66 will automatically install this on your server if you don’t include “therubyracer” in your Gemfile.

### Compile only modified assets

Cloud 66 supports this through [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3). All you need to do is to add Turbo Sprocket gem to your Gemfile. This is only supported for Rails 3.2 and above.

### About speeding up Rails deployments

While Cloud 66 works hard to improve your deployment speeds on our side, we recommend the following enhancements to [Asset Pipeline Compilation](http://guides.rubyonrails.org/asset_pipeline.html) on your side to speed up your deployments.

#### Below Rails 3.2

Unfortunately these measures are not available to Rails versions before 3.2.

#### Rails 3.2 and above

If you are running Rails 3.2 or later, you can use [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3), which speeds up deployments by only compiling changed assets.

It is also good practice to use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3. This means that only the first server in your stack will compile the assets and the rest will simply refer to the CDN.

#### Rails 4 and above

Rails 4 has Turbo Sprockets enabled by default, and again, we suggest that you use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3.

