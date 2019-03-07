
## Environment variable setup

These commands allow you to list and set environment variables on your application.


## List environment variables


### Usage

```
$ cx env-vars list [-s <stack>] [--history] [environment_variables] 
```


### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		| Name of the application|
|setting   				   | 	—			| Name of environment variable |
|value					   | 	—			| Value for environment variable |
{:.table}


### Example

```
$ cx env-vars set My_Awesome_App FIRST_VAR=123
```
