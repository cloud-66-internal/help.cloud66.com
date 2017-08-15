### Pre-stop sequence

This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. For example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        pre_stop_sequence: 1m:USR2:30s:USR1:50s
{% endhighlight %}

The example above, we'll wait 1 minute before sending the USR2 signal, then wait 30 seconds before sending the USR1 signal, and then wait 50 seconds before we force a kill. These are some examples of duration values that `stop_grace` and `pre_stop_sequence` can use - `1m` (1 minute), `30s` (30 seconds) and `1h` (1 hour).

Valid time values are `s` for seconds, `m` for minutes and `h` for hours. Valid signal values for a signal are (without the quotes):

{% highlight ruby %}
'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

* * *

