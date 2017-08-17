<!-- post: -->


### 5. Change the settings in your HAproxy config

In th UI Find the following line in your HAproxy config page

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and chenge it to:

`bind 0.0.0.0:{{port[0]}} ssl crt websitename1.pem crt websitename2.pem`




