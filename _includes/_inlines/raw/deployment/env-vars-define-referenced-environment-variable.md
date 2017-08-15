## Define referenced environment variable

You can define a new environment variable and reference it to an existing environment variable.

- **You can reference other environment variables on the same stack**  

This is useful when referencing an environment variable which you don't control such as a server IP address.
- **You can reference environment variables available on other stacks**  

You need administrative privileges on the target stack to reference environment variables on it. You cannot use intra-stack environment variables to gain access to database credentials, only database addresses.
- **You can reference environment variables available on other services**  

You need administrative privileges on the target stack to reference environment variables on it.

Creating a reference can be done using 
&#123;&#123; ENV&#95;VAR &#125;&#125;
 or 
&#95;env&#40;ENV&#95;VAR&#58;DEFAULT_VALUE&#41; 
 syntax. Second form is useful when you want to specify a default value, If cloud66 can't find referenced environment variable it will use default value instead. DEFAULT_VALUE is optional.
To reference to an environment variable on the same stack you can use 
&#123;&#123; ENV&#95;VAR &#125;&#125;
 or 
&#95;env&#40;ENV&#95;VAR&#58;DEFAULT_VALUE&#41; 
 .
To reference to an environment variable on other stacks you can use 
&#123;&#123; STACK[STACK_UID].ENV&#95;VAR &#125;&#125;
 or 
&#95;env&#40;STACK[STACK_UID].ENV&#95;VAR&#41; 
. Your stack UID is available on the stack setting page.
To reference to an environment variable on other services you can use 
&#123;&#123; STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV&#95;VAR &#125;&#125;
 or 
&#95;env&#40;STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV&#95;VAR&#41; 
.



{%include _inlines/path_to_code %}



If you are not using prefix/suffix in environment variable definition, you can use 
&#95;env&#58;ENV&#95;VAR&#58;DEFAULT_VALUE 
 syntax



{%include _inlines/path_to_code %}



