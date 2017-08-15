#### Rails 3.2 and above
If you are running Rails 3.2 or later, you can use [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3), which speeds up deployments by only compiling changed assets.

It is also good practice to use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3. This means that only the first server in your stack will compile the assets and the rest will simply refer to the CDN.

