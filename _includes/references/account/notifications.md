
## Available settings

You can control when and how you would like to receive notifications from Cloud 66. There is a range of events that trigger notifications, which can be sent as emails or via Hipchat, iOS push, Slack or Webhooks.

## Editing account notifications

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Notifications* in the left panel
4. Click on the tab for the notification type (either *Account notification* or *Application notifications*)
5. Next to each notification type, click on the icon(s) of the channel through which you want to be notified. (Clicking the icons of already active channels deactivates them)


## Notification channels

### Browser notifications

Browser notifications use HTML5 to notify you of your selected events directly in supported browsers. Once enabled, your browser will ask your permission for these notifications to be shown.

### Emails

Email notifications are enabled by default for all users. By default, you will get an email for a number of events, with the exception of _account suspended_ notifications. You can easily turn email notifications _on_ or _off_ for each type by clicking on the email icon.

### Slack

[Slack](https://slack.com/) is a real-time messaging, archiving and search application developed by Tiny Speck.

Visit the Slack [Integrations page](https://slack.com/integrations) and select the Cloud 66 integration. Choose the channel you would like to receive notifications in (or create a new one), and click _Add Cloud 66 Integration_. You will then receive a URL, which you can provide in Cloud 66 integration modal.

### Hipchat

[Hipchat](http://hipchat.com/) is a hosted realtime chat service by Atlassian, and you can link your account to Cloud 66 to receive notifications on Hipchat.

From the Hipchat _Account settings_ menu, click _API access_, and then the link for _API version 1_. Once on the API v1 page, create an API token. By selecting the Hipchat icon on the _account notifications_ page, you can add this token and select which room you would like your notifications to appear in. 

### iOS

Download the [Cloud 66 iOS application](https://itunes.apple.com/us/app/cloud-66/id642299804?mt=8&uo=4) to get iOS push notifications on your phone.

### Webhooks

The [Webhooks](http://www.webhooks.org/) standard uses HTTP POST to connect different systems, and is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook. To setup your webhook, click on the _Webhook_ icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

Each event type has its own payload that is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: _timestamp_ and _event_type_:


<table class='table table-bordered table-striped'>
		<thead>
			<th width="40%">Attribute</th>
			<th>Description</th>
		</thead>

	<tbody>
		<tr>
			<td>timestamp</td>
			<td>Epoch timestamp of when the event was sent</td>
		</tr>
		<tr>
			<td>event_type</td>
			<td>Type of the event, see below</td>
		</tr>
	</tbody>
</table>


The following event types are available:

<table class='table table-bordered table-striped'>
		<thead>
			<th width="40%">Event Type</th>
			<th>Description</th>
		</thead>

<tbody>
    <tr>
      <td>account.provision.ok</td>
      <td>Account provisioned succesfully</td>
    </tr>
    <tr>
      <td>account.provision.fail</td>
      <td>Account provision failed</td>
    </tr>
    <tr>
      <td>account.redeploy.ok</td>
      <td>Account redeployed succesfully</td>
    </tr>
    <tr>
      <td>account.redeploy.fail</td>
      <td>Account redeploy failed</td>
    </tr>
    <tr>
      <td>server.stopped</td>
      <td>Server heartbeat stopped</td>
    </tr>
    <tr>
      <td>server.backon</td>
      <td>Sever heartbeat restored</td>
    </tr>
    <tr>
      <td>job.fail</td>
      <td>Job run failed</td>
    </tr>
    <tr>
      <td>job.backon</td>
      <td>Job run succeeded (after fail)</td>
    </tr>
    <tr>
      <td>process.down</td>
      <td>Process is down</td>
    </tr>
    <tr>
      <td>app.auth</td>
      <td>App authorized to access the account</td>
    </tr>
    <tr>
      <td>app.deauth</td>
      <td>App deauthorized from accessing the account</td>
    </tr>
    <tr>
      <td>account.redeploy.hook.fail</td>
      <td>Account redeployment hook failed</td>
    </tr>
    <tr>
      <td>account.deploy.started</td>
      <td>Account deployment started</td>
    </tr>
  </tbody>

</table>
