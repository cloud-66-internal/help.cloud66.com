<!-- post: -->


### Contents

*		[Pull code from Git](#git)
*		[Provide a Docker image](#provide_image)
*		[Configuration](#configuration)
*   [Build command](#build_command)
*   [Build root](#build_root)
*   [Command](#command)
*   [Deploy command](#deploy_command)
*   [Dockerfile path](#dockerfile_path)
*   [Git URL](#git_url)
*   [Git branch](#git_branch)
*   [Image](#image)
*   [Using Habitus for builds](#use-habitus)
        
		



When building your Docker stack, you can either let us create them for you with our powerful cluster of servers called BuildGrid, or provide us with your own image. When using BuildGrid, your image is built based on your source code and a Dockerfile, which specifies how you want it to be created.

Using BuildGrid lets you focus on what you do best and avoids you having to create internal processes to output Docker images. You can even integrate your CI solution, so that new images are built and pushed to your servers once all your tests pass.

