You can automatically provision and deploy to OVHcloud servers in any supported location via Cloud 66. To enable this, follow the steps below:

## Integrating OVH with Cloud 66

OVHcloud uses Project IDs (rather than API keys) to manage access to cloud resources. To enable Cloud 66 to manage your servers you need to:

1. Create a new Project using your [OVHcloud dashboard](https://ovh.com/manager/) (or open an existing one)
2. Open the Project and click on *Private Network* (in the left nav) and then *Create a vRack* 
3. Choose *New vRack* and then click *Create (*wait for the vRack to be set up before moving on).
4. Copy the **Project ID** (at the top left, just below your project's name
5. Log into your Cloud 66 dashboard and go to *Account Settings* → *Cloud Keys*.
6. Click the green + and then select *OVH* as your cloud platform. Choose your region, paste in your Project ID and then click *continue*.
7. You will be taken to a sign-in page on the OVH site where you can confirm all the details and supply your login details to confirm our access to your Project.
8. Once you've signed in successfully you will be taken back to Cloud 66. You can now begin deploying to OVH.

## Using multiple keys with OVH

If you need your servers to be separated for different applications, you should create a separate Project in your OVHcloud account, and then add it to Cloud 66 as a separate cloud key. Be sure to name your keys to make them easy to recognise and differentiate (use the Project name, for example). 

You will be able to choose between cloud keys (and therefore between your OVH Projects) whenever you create a new application. However you cannot use a cloud key from a different Project once an application has been created. It will always use the Project that it was assigned to during initial setup.