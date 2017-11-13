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



## Important

Cloud 66 doesn't currently support password protected keys, so please ensure your key is not passworded.


## Generate Keys on Windows

If you're using PuTTY in Windows for SSH services, you can still use SSH keys. PuTTY can generate keys using the puttygen program, [download PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/).


## Connect to your server using your key

Simply ensure that your public key contents are included in ~/.ssh/authorized_keys on the target server. Then you should be able to connect with:

{% highlight bash %}
ssh {server user}@{server address}
{% endhighlight %}

If you are using a non-standard key name or location, then you can connect to your server using

{% highlight bash %}
ssh -i {your private key location} {server user}@{server address}
{% endhighlight %}


## Important

In both cases above you should not be asked to provide your password.
Once you are happy that you can connect to your server with your key, best practice would be to disable access to your server via username/password. However this is up to you and your particular requirements.

[More information regarding SSH Keys](http://library.linode.com/security/ssh-keys)

