---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-ncident.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-curlhtt.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/unknown/General/cloud66-birdseye/code_cloud66-birdseye_get-the-list-of-all-incidents-.html" ]
 usedin: [ _legacy_docker/stack-management/cloud66-birdseye.md, _maestro/stack-management/cloud66-birdseye.md, _node/stack-management/cloud66-birdseye.md, _rails/stack-management/cloud66-birdseye.md, _skycap/stack-management/cloud66-birdseye.md] -->


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

