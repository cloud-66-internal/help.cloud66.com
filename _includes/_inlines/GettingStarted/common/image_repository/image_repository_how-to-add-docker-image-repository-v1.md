


### How To Add Docker Image Repository

You need to go to _Account_ --> _Keys & External Services_ --> _Docker Image Repo_  and click on _ADD A PROVIDER_ or click on __+__ if you already have one and want to add a second one.

When you [specify the Google Container Registy as a Docker image repo](https://app.cloud66.com/image_repositories) you need to  choose `I'm using a different provider or my own custom repo` and use the following settings:

*   Custom Repo provider URL = https://gcr.io
*   Username for provider = oauth2accesstoken
*   Password for provider = (output of the commmand `$ gcloud auth print-access-token`)
*   Email address for provider = fake@fake.com
