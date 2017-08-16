<!-- post: 1950-09-26-implementing-faye_4.-rails&95;root -->


require 'faye'
faye&#95;server = Faye::RackAdapter.new(:mount =&gt; '/your&#95;faye&#95;mount', :timeout =&gt; 45)
Faye::WebSocket.load&#95;adapter('thin')
faye&#95;server.listen(&lt;&lt;PUT-YOUR-PORT-HERE&gt;&gt;)
