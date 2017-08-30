<!-- usedin: [ _includes/_inlines/Tutorials/common/1930-09-26-haproxy-for-websocket/1930-09-26-haproxy-for-websocket_test-your-websocket-server-v1.md] -->

```
<html>
  <head>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js'></script>
    <script>
      $(document).ready(function(){
        function debug(str){ $("#debug").append("<p>"+str+"</p>"); };

        ws = new WebSocket("ws://your_address";);
        ws.onmessage = function(evt) { $("#msg").append("<p>"+evt.data+"</p>"); };
        ws.onclose = function() { debug("socket closed"); };
        ws.onopen = function() {
          debug("connected...");
          ws.send("hello server");
        };
      });
    </script>
  </head>
  <body>
    <div id="debug"></div>
    <div id="msg"></div>
  </body>
</html>
```
