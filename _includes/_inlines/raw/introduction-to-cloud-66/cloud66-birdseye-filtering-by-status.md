### Filtering by status

By default there is no filter on status of returned incidents. If you want to filter them by status, you can add the `status` parameter to the call URL. Use the following values:

- pending : returns all pending incidents
- investigating : returns all incidents being investigated
- resolved : returns all resolved incidents

For example:



{%include _inlines/path_to_code %}



You can mix status for incidents returns, you can use a comma separated list:



{%include _inlines/path_to_code %}



This will only return non-resolved incidents.

