## Define referenced environment variable

You can define a new environment variable and reference it to an existing environment variable.

- <b>You can reference other environment variables on the same stack</b><br/>
This is useful when referencing an environment variable which you don't control such as a server IP address.
- <b>You can reference environment variables available on other stacks</b><br/>
You need administrative privileges on the target stack to reference environment variables on it. You cannot use intra-stack environment variables to gain access to database credentials, only database addresses.
- <b>You can reference environment variables available on other services</b><br/>
You need administrative privileges on the target stack to reference environment variables on it.

Creating a reference can be done using <kbd>&#123;&#123; ENV&#95;VAR &#125;&#125;</kbd> or <kbd>&#95;env&#40;ENV&#95;VAR&#58;DEFAULT_VALUE&#41; </kbd> syntax. Second form is useful when you want to specify a default value, If cloud66 can't find referenced environment variable it will use default value instead. DEFAULT_VALUE is optional.
To reference to an environment variable on the same stack you can use <kbd>&#123;&#123; ENV&#95;VAR &#125;&#125;</kbd> or <kbd>&#95;env&#40;ENV&#95;VAR&#58;DEFAULT_VALUE&#41; </kbd> .
To reference to an environment variable on other stacks you can use <kbd>&#123;&#123; STACK[STACK_UID].ENV&#95;VAR &#125;&#125;</kbd> or <kbd>&#95;env&#40;STACK[STACK_UID].ENV&#95;VAR&#41; </kbd>. Your stack UID is available on the stack setting page.
To reference to an environment variable on other services you can use <kbd>&#123;&#123; STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV&#95;VAR &#125;&#125;</kbd> or <kbd>&#95;env&#40;STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV&#95;VAR&#41; </kbd>.

<pre class="prettyprint">
MY&#95;HEALTH&#95;CHECK=http&#58;&#47;&#47;&#95;env&#40;WEB&#95;ADDRESS&#95;EXT&#41;&#47;health&#95;check&#46;html
</pre>

If you are not using prefix/suffix in environment variable definition, you can use <kbd>&#95;env&#58;ENV&#95;VAR&#58;DEFAULT_VALUE </kbd> syntax

<pre class="prettyprint">
MY&#95;KEY&#95;1=&#95;env&#58;WEB&#95;ADDRESS&#95;EXT&#58;DEFAULT&#95;VALUE
</pre>

If you are not using prefix/suffix in environment variable definition, you can use <kbd>&#95;env&#58;ENV&#95;VAR&#58;DEFAULT_VALUE </kbd> syntax

<pre class="prettyprint">
MY&#95;KEY&#95;1=&#95;env&#58;WEB&#95;ADDRESS&#95;EXT&#58;DEFAULT&#95;VALUE
</pre>

