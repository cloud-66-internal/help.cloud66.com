<!-- layout:code post: 1925-09-26-websocket-support_test-your-websocket-server -->


&#60;html&#62;
  &#60;head&#62;
    &#60;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"&#62;&#60;/script&#62;
      &#60;script&#62;
      $(document).ready(function(){
        function debug( str ) {
          $("#debug").append( str );
        };

        ws = new WebSocket("ws://your address");
        ws.onmessage = function(evt) {
          $("#msg").append("evt.data");
        };
        ws.onclose = function() {
          debug("socket closed");
        };
        ws.onopen = function() {
          debug("connected...");
          ws.send("hello server");
        };
      });
    &#60;/script&#62;
  &#60;/head&#62;
  &#60;body&#62;
    &#60;div id="debug"&#62;&#60;/div&#62;
    &#60;div id="msg"&#62;&#60;/div&#62;
  &#60;/body&#62;
&#60;/html&#62;
