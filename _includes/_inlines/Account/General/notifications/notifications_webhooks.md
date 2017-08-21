<!-- post: -->

### Webhooks

The [Webhooks](http://www.webhooks.org/) standard uses HTTP POST to connect different systems, and is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook. To setup your webhook, click on the _Webhook_ icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

Each event type has its own payload that is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: _timestamp_ and _event_type_:



	

| Attribute          |    			Description 					|
| ------------------ | --------------------------------------------:|
| timestamp          |   Epoch timestamp of when the event was sent |
| event_type         |   			Type of the event, see below	|




The following event types are available:



| Event Type         |    			Description 					|
| ------------------ | --------------------------------------------:|
| account.provision.ok.  |   Account provisioned succesfully |
| account.provision.fail         | Account provision failed	|
| account.redeploy.ok          |   Account redeployed succesfully |
| account.redeploy.fail	         | Account redeploy failed	|
| server.stopped	          |   Server heartbeat stopped |
| server.backon         |   	Sever heartbeat restored	|
| job.fail	          |   Job run failed |
| job.backon	         |   	Job run succeeded (after fail)	|
| process.down          |  Process is down|
| app.auth         |   	App authorized to access the account	|
| app.deauth         |  App deauthorized from accessing the account |
| account.redeploy.hook.fail      |   	Account redeployment hook failed	|
|account.deploy.started     |   Account deployment started |
	