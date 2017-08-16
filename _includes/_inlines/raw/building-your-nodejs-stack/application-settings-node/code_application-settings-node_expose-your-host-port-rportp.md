---
layout: code
post: application-settings-node_expose-your-host-port.md
---


var port = process.env.PORT || 8080;
app.listen(port);
