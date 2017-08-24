

## Define referenced environment variable

You can define a new environment variable and reference it to an existing environment variable.

- **You can reference other environment variables on the same stack**  

This is useful when referencing an environment variable which you don't control such as a server IP address.
- **You can reference environment variables available on other stacks**  

You need administrative privileges on the target stack to reference environment variables on it. You cannot use intra-stack environment variables to gain access to database credentials, only database addresses.
- **You can reference environment variables available on other services**  

You need administrative privileges on the target stack to reference environment variables on it.

Creating a reference can be done using  ``{% raw %}{{ENV_VAR}}{% endraw %}``  or `_env(ENV_VAR:DEFAULT_VALUE)`  syntax. 

Second form is useful when you want to specify a default value, If cloud66 can’t find referenced environment variable it will use default value instead. **DEFAULT_VALUE** is optional. 



```
MY_HEALTH_HECK=http://_env(WEB_ADDRESS_EXT)/health_check.html
```


If you are not using prefix/suffix in environment variable definition, you can use 
`_env:(ENV_VAR:DEFAULT_VALUE)` 
 syntax

```
MY_KEY_1=_env(WEB_ADDRESS_EXT:192.168.0.1)
```
	
To reference to an environment variable on the same stack you can use `{% raw %}{{ENV_VAR}}{% endraw %}` or `_env(ENV_VAR:DEFAULT_VALUE)` . 

To reference to an environment variable on other stacks you can use `{% raw %}{{STACK[STACK_UID].ENV_VAR}}{% endraw %}` or `_env(STACK[STACK_UID].ENV_VAR)`. 

Your stack's  **UID** is available on the stack setting page. 

To reference to an environment variable on other services you can use `{% raw %}{{STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR}}{% endraw %}`  or `_env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR)`.


