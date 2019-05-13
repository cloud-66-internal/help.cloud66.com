## Overview

Every Cloud 66 account has a Security Score. This measures how secure your account is against unauthorised or unwanted access. Security Score is based on industry best practices for access and authentication controls. 

## Finding your Security Score

To see the Security Score for your Cloud 66 account:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your account avatar (top-right) and select *Account Settings*
3. Click on *Login & Security* in the **Account** panel on the left
This will show you your current score (out of 100%) and suggest ways to improve it (if necessary). 

## The components of your Security Score

Your account's score is based on six (interrelated) factors:

1. Do you use **two factor authentication** (2FA) or do you rely entirely on passwords?
2. If you are already using 2FA, do you have **more than one key** to access your account?
3. Do you have an appropriate number of user accounts, or are team members **sharing logins**?
4. Are you **enforcing 2FA** for your entire team, or is it optional?
5. Are other **team members using 2FA**?
6. Are you using any **personal access tokens** in your account?

To achieve a perfect Security Score, you would need to ensure all of the factors above follow best practices - i.e. no shared logins, 2FA enforced (and enabled) for all accounts, backup 2FA keys (to allow for lost or stolen devices) and no personal access tokens. 

## Why do I need 2FA?

Over the last five years hackers have stolen several billion password and username combinations from a variety of companies and services, including LinkedIn, Yahoo and Dropbox. 

This has provided criminals and other bad actors with an incredible toolkit for breaking into online services because it has dramatically narrowed the search space for passwords actually used by humans (compared to the total available combination of characters available for use in passwords). 

If you're unconvinced of the dangers, we suggest you visit [Have I Been Pwned](https://haveibeenpwned.com/) to check your own exposure. 

2FA is an order of magnitude more secure than simple passwords because it requires access to a second, independent device or mechanism (such as a mobile phone). This does not make an account un-hackable, but it makes hacking difficult enough that criminals may simply target other (less secure) accounts. 

## FIDO Authentication

Cloud 66's 2FA uses the [FIDO](https://fidoalliance.org/what-is-fido/) (Fast IDentity Online) standard. This means:

- Greater security (thanks to public key cryptography)
- Less friction (multi-factor authentication and BYOD)
- Best practice implementation based on global standards

## How FIDO works

When a user enables 2FA on their account, the user's chosen authenticator (which can be a smartphone app, a physical key or other device) creates a public/private key pair and shares the public key with Cloud 66. 

Then, whenever anyone requests to log in, Cloud 66 will ask the designated authenticator to prove that it has the correct private key by signing the login request with that key. This is then compared to the public key and, if they correspond, the user is logged in.

You can [read more about the process here](https://fidoalliance.org/how-fido-works/).

## Physical security keys

Although app-based authentication is already very secure, you may prefer to use physical security keys for an additional layer of security. Physical keys are virtually impossible to spoof because the physical presence of a specific device is required. So, not only is the authentication key unique, it is also paired to a specific device which must be physically present during authentication.

There are a numbers of options available for physical keys:

- USB-based keys such as the [YubiKey](https://www.yubico.com/)
- Bluetooth-based keys (including wearables)
- NFC-based keys (including many smartphones)
- Any smartphone with the Krypton app installed (this is Cloud 66's preferred method)

Follow our [how-to guide](/{{page.collection}}/account/two-factor-authentication.html#adding-a-physical-fido-security-key) to learn how to add a physical security key to your Cloud 66 account. 

## Why can't we share logins?

Sharing login details, while convenient, opens your account up to significant additional risks. Apart from the fact that shared passwords are more easily leaked, they can be abused by former team members or careless (or malicious) employees. 

This practice also makes it almost impossible to audit who is responsible for changes on an account, and does not allow for different team members to have different levels of access and permissions. 

## Next steps

- [Enable 2FA](/{{page.collection}}/account/two-factor-authentication.html) on your own account
- [Enforce 2FA across your team](/{{page.collection}}/account/two-factor-authentication.html#enforcing-2fa-for-your-team)
- Add a [physical security key](/{{page.collection}}/account/two-factor-authentication.html#adding-a-physical-fido-security-key) to your account