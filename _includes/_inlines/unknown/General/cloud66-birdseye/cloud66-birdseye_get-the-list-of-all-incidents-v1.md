<!--  usedin: [ _legacy_docker/stack-management/cloud66-birdseye-v1.md, _maestro/stack-management/cloud66-birdseye-v1.md, _node/stack-management/cloud66-birdseye-v1.md, _rails/stack-management/cloud66-birdseye-v1.md, _skycap/stack-management/cloud66-birdseye-v1.md] -->


### Get the list of all incidents


{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-ncident-v1.md  product = include.product %}


With CURL:

{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-curlhtt-v1.md  product = include.product %}


**Result**

{%include _inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents--v1.md  product = include.product %}


*Status*

Status is an integer number with the following mapping:

- 0 - Pending. Incident has been reported or observed.
- 1 - Investigating: Either Cloud 66 or the vendor is investigating the incident.
- 2 - Resolved: Incident is reported as resolved either by the vendor or Cloud 66.

