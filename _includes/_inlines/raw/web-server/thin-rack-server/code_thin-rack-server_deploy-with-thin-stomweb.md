---
layout: code
post: thin-rack-server_deploy-with-thin.md
---


custom&#95;web: bundle exec thin start --socket /tmp/web&#95;server.sock --pid /tmp/web&#95;server.pid -e $RACK&#95;ENV -d
