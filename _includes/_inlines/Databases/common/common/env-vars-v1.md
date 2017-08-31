
## Environment Variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.

{%include _inlines/Databases/common/{{ include.dbtype }}/env-vars-table-v1.md  product = include.product %}


In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.