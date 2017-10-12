<!--  usedin: [ _legacy_docker/Tutorials/2003-09-26-sharing-db-v1.md, _maestro/Tutorials/2003-09-26-sharing-db-v1.md, _node/tutorials/2003-09-26-sharing-db-v1.md, _rails/Tutorials/2003-09-26-sharing-db-v1.md] -->


## Important

Ensure that you **do not** select the option for db:schema:load during the build of your second stack, as this could destroy the data on the first stack.




Firstly, you need to [open your firewall](https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html) on the first stack to allow your second stacks web servers to access the database.

You will then reference the database credentials from your first stack in the database.yml of your second stack. You can reference the environment variables for these credentials on your first stack like so (your stack UID is available on your _Stack information_ page):



{%include _inlines/Tutorials/common/2003-09-26-sharing-db/code_2003-09-26-sharing-db_important--v1.md  product = include.product %}




For example, your environment variables would be set like this:



{%include _inlines/Tutorials/common/2003-09-26-sharing-db/code_2003-09-26-sharing-db_important--2-v1.md  product = include.product %}




Database credentials such as username and password are not available for cross-stack referencing for security reasons. Instead, copy and paste them across as environment variables. Your database.yml would look something like this:



{%include _inlines/Tutorials/common/2003-09-26-sharing-db/code_2003-09-26-sharing-db_important-ernamepas-v1.md  product = include.product %}



