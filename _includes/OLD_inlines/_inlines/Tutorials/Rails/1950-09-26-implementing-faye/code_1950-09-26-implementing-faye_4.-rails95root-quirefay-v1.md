

```
require 'faye'
faye_server = Faye::RackAdapter.new(:mount => '/your_faye_mount', :timeout => 45)
Faye::WebSocket.load_adapter('thin')
faye_server.listen(<<PUT-YOUR-PORT-HERE>>)
```
