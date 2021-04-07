

## About using Logentries

Logentries is a great service for centralizing your log files, and this add-in makes it easy to add across your servers.

## Add Logentries to your application

To add Logentries:

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Custom Server**
4. A panel will slide out from the left with options. Configure as needed and then click *Add Server* to continue.

You can now watch the logs, as usual to see the progress of the process.

We'll ask you for your Logentries account key - if you don't have one, you can signup to a Logentries account.

You can find your Logentries account ID in your account page. For more information, please see the [Logentries guide to how find the account key](https://docs.logentries.com/docs/accountkey/).

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}
#### Note
<div class="notice notice-danger">
	<p>For docker applications this will be added to the host not as a container.</p>
</div>
{%endif%}

## Troubleshoot

### No Logs or Logs are empty in Logentries

If your log files (<span style="background-color: #FFFF00">make sure they exist on the server</span>) are not showing up in your Logentries account or they are empty, try to <b>SCAN FOR NEW LOGS</b>. In order to do that you will need to:

- Go to your log analyzer config page (click on logentries in your Application Overview under External add-ins).
- Push the SCAN FOR NEW LOGS button.