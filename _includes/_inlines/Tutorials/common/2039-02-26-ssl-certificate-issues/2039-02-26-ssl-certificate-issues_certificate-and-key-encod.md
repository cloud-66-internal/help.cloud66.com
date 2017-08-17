<!-- post: -->


### Certificate and key encoding

Certificates and key files need to have only a _new line_ character at the end (instead of both _new line_ and _carriage return_ characters). To see if that's the case, you can open them in a text editor like TextMate and show the invisible characters.  

![TextMate Show Invisible Characters](http://assets.cloud66.com/help/images/show_invisible_characters_textmate.png)

This is an example of a wrong line ending:

![Wrong Line Ending for SSL certificate](http://assets.cloud66.com/help/images/wrong_encoding_of_ssl_certificate.png)

