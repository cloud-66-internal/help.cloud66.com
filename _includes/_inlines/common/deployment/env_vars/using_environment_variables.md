## Using environment variables

Using environment variables is done differently depending on your application settings, but these are some examples.

- <b>Bash scripts</b>

<pre class="prettyprint">$ENV_VAR</pre>

- <b>.YML files</b><br/>

<pre class="prettyprint">username: &lt;%= ENV['DB&#95;USER'] %&gt;</pre>

- <b>.RB files</b><br/>

<pre class="prettyprint">working_directory "#{ENV['STACK_PATH']}"</pre>