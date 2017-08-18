<!-- post: -->


### Get the list of all incidents


{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-ncident.md %}




With CURL:



{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-curlhtt.md %}




**Result**



{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-.md %}




*Status*

Status is an integer number with the following mapping:

- 0 - Pending. Incident has been reported or observed.
- 1 - Investigating: Either Cloud 66 or the vendor is investigating the incident.
- 2 - Resolved: Incident is reported as resolved either by the vendor or Cloud 66.

