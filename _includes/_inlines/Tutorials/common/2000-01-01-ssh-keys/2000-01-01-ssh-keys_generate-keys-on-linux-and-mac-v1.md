<!-- usedin: [ _legacy_docker/Tutorials/2000-01-01-ssh-keys-v1.md, _maestro/Tutorials/2000-01-01-ssh-keys-v1.md, _node/tutorials/2000-01-01-ssh-keys-v1.md, _rails/Tutorials/2000-01-01-ssh-keys-v1.md] -->


## Generate Keys on Linux and Mac

Run the 
ssh-keygen
 command in the terminal and answer the questions when prompted, the defaults are acceptable for most use cases.

{% highlight bash %}
ssh-keygen
{% endhighlight %}

The generated keys should now be located in your home directory 
~/.ssh/


*		You'll find the **private key** in the 
~/.ssh/id_rsa
 file.
*		You'll find the **public key** in the 
~/.ssh/id_rsa.pub
 file.

Copy the public key into the 
~/.ssh/authorized_keys
 file on your server, using the following commands. Substitute your own SSH user and host names:

{% highlight bash %}
scp ~/.ssh/id_rsa.pub squire@example.com:/home/user/.ssh/uploaded_key.pub
ssh squire@example.com "echo `cat ~/.ssh/uploaded+key.pub` >> ~/.ssh/authorized_keys"
{% endhighlight %}

You can now log in to your server using your public key.




