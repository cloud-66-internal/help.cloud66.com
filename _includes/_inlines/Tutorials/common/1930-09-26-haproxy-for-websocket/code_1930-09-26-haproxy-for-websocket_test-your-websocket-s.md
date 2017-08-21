<!-- layout:code post: 1930-09-26-haproxy-for-websocket_test-your-websocket-server -->

```

<html>
  <head>
    <script src=&#39;http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js&#39;></script>
    <script>
      $(document).ready(function(){
        function debug(str){ $(&quot;#debug&quot;).append(&quot;<p>&quot;+str+&quot;</p>&quot;); };

        ws = new WebSocket(&quot;ws://your_address&quot;);
        ws.onmessage = function(evt) { $(&quot;#msg&quot;).append(&quot;<p>&quot;+evt.data+&quot;</p>&quot;); };
        ws.onclose = function() { debug(&quot;socket closed&quot;); };
        ws.onopen = function() {
          debug(&quot;connected...&quot;);
          ws.send(&quot;hello server&quot;);
        };
      });
    </script>
  </head>
  <body>
    <div id=&quot;debug&quot;></div>
    <div id=&quot;msg&quot;></div>
  </body>
</html>

```
