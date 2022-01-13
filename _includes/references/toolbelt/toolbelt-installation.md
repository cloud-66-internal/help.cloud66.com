
## Configuring Toolbelt

### Installation

1. Download the [cx executable](https://app.cloud66.com/toolbelt) to a directory in your PATH
2. Initialize it by running `cx stacks list`  
3. Authenticate using your browser

For more detailed help on installation please refer to our [Getting Started](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) guide.

### Installing on a server (headless)

To install Toolbelt on a server (without a browser):

1. Install and authenticate `cx` on your local machine (see above)
2. Log into your server via your terminal and move to the `.cloud66` directory (under `home`) 
3. Create a file named `cx.json` in that folder
4. Go to the terminal on your local machine, where you already have Toolbelt authorised and execute `cx dump-token`, which will give you your authorisation token
5. Copy this token and paste it into the (remote) `cx.json` file that you created in Step 3
6. Save the file and then run `cx stacks list` on the server to confirm that Toolbelt is initialised


### Multi-account support

Toolbelt supports user with multiple Cloud 66 accounts via profiles. Please read our [separate guide](/{{page.collection}}/references/toolbelt/toolbelt-profiles.html) for more details.