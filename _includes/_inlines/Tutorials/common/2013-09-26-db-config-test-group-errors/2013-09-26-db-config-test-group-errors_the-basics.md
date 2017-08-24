<!-- usedin: [ _rails/Tutorials] - post: -->


## The basics

Errors can occur during deployments due to there being different adapters defined in the "development" and the "test" groups in your database.yml file.
Your error will differ depending on the adapters you've chosen.

For example, if your database.yml file's "development" group contains:

	adapter: postgresql


And it also contains a "test" group with:



{%include _inlines/Tutorials/common/2013-09-26-db-config-test-group-errors/code_2013-09-26-db-config-test-group-errors_the-basics-apte.md %}




This will result in the following slightly obtuse error during your code deployment:



{%include _inlines/Tutorials/common/2013-09-26-db-config-test-group-errors/code_2013-09-26-db-config-test-group-errors_the-basics-init.md %}



