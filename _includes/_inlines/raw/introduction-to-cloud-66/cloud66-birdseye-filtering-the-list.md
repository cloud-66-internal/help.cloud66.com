#### Filtering the list
You can filter the result for the incidents with the following filters:

- `vendor` Cloud provider's name. Valid options are `digitalocean`, `linode`, `aws`, `rackspace`, `gce`
- `dc` Cloud vendor data centre. This is case-insensitive name of the data centre where the incident is related to. For example: `ams1` or `us-east-1`. You can also use multiple data centres in a comma seperated list.
- `status` Incident status. Valid options are `pending`, `investigating`, `resolved`
- `from_date` Incident starting date filter. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`
- `to_date` Incident end date filter. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`
- `tags` Incident tags. Use commas to seperate multiple tags, for example: `network,images`
- `since` Date filter for the last time an incident was updated. This is useful to fetch any changes since last time incidents were checked. The valid format for the date is `YYYY-MM-DD-HH:MM:SS`

With CURL:



{%include _inlines/path_to_code %}



