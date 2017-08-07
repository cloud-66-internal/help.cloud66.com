## Assign environment variables for deployment

When you create a new stack, you are given the option to assign your own environment variables after code analysis. Once your code has been analyzed, click Add environment variables before deployment in the About your app field. This will allow you to view the environment variables that Cloud 66 sets for you, and set your own.

You can set your own by either manually entering them, or uploading a file that contain the variables. This file should use the following format:

```KEY_1=value1
KEY_2=value2```

If your application relies on specific environment variables to complete the deployment process, it is worth adding them before deploying.
