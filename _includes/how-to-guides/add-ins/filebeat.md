

## About using Filebeat
[Filebeat](https://www.elastic.co/products/beats/filebeat) is an open source file harvester, used to fetch log files and feed them into Logstash, and this add-in makes it easy to add across your servers.

## Add Filebeat to your stack
To add Filebeat, access the add-ins menu of your stack and click _Filebeat_ under the _External Addins_ category.

We'll ask you for your ELK stack endpoint - if you don't have one, you can deploy one using [this public Git repository](https://github.com/deviantony/docker-elk).

An ELK stack consists of Elasticsearch, Logstash, and Kibana. Logstash is an open source tool for collecting, parsing, and storing logs for future use. Kibana is a web interface that can be used to search and view the logs that Logstash has indexed. Both of these tools are based on Elasticsearch, which is used for storing logs

After the add-in is installed on your server(s) and configured and some logs are send to the ELK stack, go to your ELK stack address and you should be able to see them in the Kibana. One last thing to do is to: go to _Settings_ > _Indices_ tab, search for `filebeat-*` and add a new index template by clicking on _Create_.

If no logs are coming in, make sure that port 5044 is open on your ELK stack and is receiving connections!

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>For Docker stacks this will be added to the host, not as a container.</p>
</div>
{%endif%}