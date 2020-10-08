
## View & update account information

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*

You can use this interface to change things like contact details and global account settings like timezone. 

## Add or remove users

You can do this via the *Account Settings* page described above. For detailed help please read our [how-to guide on user management](/{{page.collection}}//account/team-accounts.html).

## Organizations

When you sign up for Cloud 66 you will have your own organization even if you sign up to join a team. To switch your organization, use the dropdown menu in the top right corner of your Cloud 66 account, and simply select the name of the organization you would like to switch to.

#### Note
<div class="notice notice-warning"><p>
If you are only part of your default (account owner) organization, you will not see this dropdown.
</p></div>

## Service accounts

Service accounts are special, limited accounts that belong to a team (not to account owners) and that have no login privileges on your main Cloud 66 account. They are useful for centralizing automated actions such as webhooks, API calls and notifications. This allows people to leave and join your team(s) without any danger of breaking integrations or duplicating notifications. 

For more info please read our [full guide to service accounts](/{{page.collection}}/account/service-accounts.html).


## Closing your account

To close (delete) your account:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on **Delete My Account** at the bottom of the main panel, and confirm that you wish to proceed.
4. We will check if your account has any of the following: **secondary** **user accounts** (teams and organizations), **applications** and **outstanding balances**. If any of these checks fail, you will need to follow the guides below.
5. If all of the checks pass, your account will now be closed. We are sorry to see you go, and hope to welcome you back soon!

### If your account has secondary users...

You will need to delete or remove **all** (non-owner) users from your account before you can close it. To do this follow the instructions in our [Team Accounts guide](/{{page.collection}}/account/team-accounts.html#deleting-user-accounts--teams). 

### If your account has applications...

You will need to delete all your applications from your account before you can close it. {% if include.product != 'skycap' %}To do this follow the instructions in our [App deletion guide](/{{page.collection}}/the-basics/adding-updating-deleting.html#deleting-an-application).{% endif %}

### If your account has an outstanding balance...

We will calculate your final bill and display it to you. You can click the *Pay Final Bill* button to trigger a credit card payment and clear this balance. Please bear in mind that this balance may include pro-rata charges for partial periods of usage (particularly if you have just deleted applications).

