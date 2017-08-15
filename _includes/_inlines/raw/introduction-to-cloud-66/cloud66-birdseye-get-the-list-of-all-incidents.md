### Get the list of all incidents


{%include _inlines/path_to_code %}



With CURL:



{%include _inlines/path_to_code %}



**Result**



{%include _inlines/path_to_code %}



*Status*

Status is an integer number with the following mapping:

- 0 - Pending. Incident has been reported or observed.
- 1 - Investigating: Either Cloud 66 or the vendor is investigating the incident.
- 2 - Resolved: Incident is reported as resolved either by the vendor or Cloud 66.

