#You can strengthen nginx SSL security by adjusting its SSL cipher settings. You can change this using [CustonConfig](http://help.cloud66.com/managing-your-stack/customconfig). Please remember that the most secure settings (below) is not backward compatible with IE6 and Windows XP clients.

Under nginx CustomConfig you can change the default SSL cipher to one of the following:

We recommend this setting (not compatible with IE6/Win XP):



{%include _inlines/path_to_code %}



We recommend the following setting for backward compatibility (IE6/Win XP):



{%include _inlines/path_to_code %}



This article is based on the information from [this tutorial](https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html).
