## What is two-factor authentication?

Two-factor authentication (2FA) requires a second set of credentials, in addition to a password and username, before it will allow access to an account. {% if include.product != 'prepress' %}You can read more about the concept in [our Security Score guide](/{{page.collection}}/account/understanding-and-improving-security-score.html#why-do-i-need-2fa).{% endif %} 

## Enabling 2FA on your account

To enable two-factor authentication on your Cloud 66 account: 

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Login & Security* in the **Account** panel on the left
4. Click on the *Two-factor Authentication* tab
5. Install an authenticator app on your phone (links are provided), or open 1Password and then click the green *Next - Scan barcode and verify*  button
6. Scan the barcode provided using your newly installed authenticator app, or [using 1Password](https://support.1password.com/one-time-passwords/){:target="_blank"}. You can also manually enter the details of the key if you're having trouble scanning the barcode.
7. Enter the verification code provided by your chosen authenticator and click the *Verify* button

## Logging in with 2FA

If 2FA is enabled, when you log in you will be asked to provide the current confirmation code from your authenticator app. This code changes constantly (every minute or so), so it will be different every time you log in. 

If you use the same computer and browser you will not be asked every time you log in, but we will ask periodically or if anything about your computer changes (such as the network you're using).

## Enforcing 2FA for your team

You can also force all the members of your Cloud 66 account to use 2FA. To do this:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Login & Security* in the **Account** panel on the left
4. Scroll down to the section named "Enforce 2FA for your Team" and click the green *Force 2FA for your_team_name* button.

This will oblige all team members to set up 2FA before they are able to access the team's Cloud 66 account.

## Adding a physical FIDO2 security key

Physical security keys add another layer of security to your account, making it even harder for anyone to gain unauthorised access. {% if include.product != 'prepress' %}If you need more background info on physical keys please read our [detailed guide](/{{page.collection}}/account/understanding-and-improving-security-score.html#fido-authentication) on the subject.{% endif %}

To add a physical key:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Login & Security* in the **Account** panel on the left
4. Click on the *Security Keys* tab
5. Follow the instructions on screen to pair your physical device to your Cloud 66 account

## Troubleshooting

### If you're using a USB-based device:

- Ensure you've read the installation and usage instructions from the manufacturer
- Ensure that your computer recognises and is able to read the device (including that it is properly inserted into a compatible port)
- Work through this [troubleshooting guide](https://support.yubico.com/support/solutions/articles/15000008691-basic-yubikey-troubleshooting) from Yubikey (many of these issues are common to other USB devices)