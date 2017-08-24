<!-- usedin: [ _includes/_inlines/Tutorials/Rails/1950-09-26-implementing-faye] - layout:code post: 1950-09-26-implementing-faye_4.-rails&95;root -->

```
require 'faye'
faye_server = Faye::RackAdapter.new(:mount => '/your_faye_mount', :timeout => 45)
Faye::WebSocket.load_adapter('thin')
faye_server.listen(<<PUT-YOUR-PORT-HERE>>)
```
