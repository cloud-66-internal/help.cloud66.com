

## Auto-generated environment variables

As mentioned earlier, Cloud auto-generates a number of environment variables, which can be used in addition to those that you define. Depending on your stack configuration, the environment variables available will differ. Given the variety of environments that we support, it becomes difficult to keep an exhaustive list of auto-generated environment variables. 

The following variables are created for Rack-based stacks (among others):

- **RAILS_ENV** &mdash; Your stacks environment
- **RACK_ENV** &mdash; Your stacks environment
- **STACK_PATH** &mdash; The directory path to which your code is deployed

If you have a MySQL server, the following variables are created and inserted into your _database.yml_ (unless you have specified your own):

- **MYSQL_ADDRESS** &mdash; The physical address of your server
- **MYSQL_USERNAME** &mdash; Randomly generated string
- **MYSQL_PASSWORD** &mdash; Randomly generated string

For a list of environment variables available in your stack, visit the _Environment variables_ link in the right sidebar of your stack detail page. If you don't currently have a stack, the environment variables avaialable to you are shown after your code analysis.

