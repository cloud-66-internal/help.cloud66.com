node_modules/aglio/bin/aglio.js -t default-collapsible -i api.md -o /tmp/index.html
s3cmd put --acl-public /tmp/index.html s3://developers.cloud66.com