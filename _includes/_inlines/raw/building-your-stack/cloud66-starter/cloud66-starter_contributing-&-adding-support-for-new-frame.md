---
post: 
---

## Contributing & Adding support for new frameworks and languages

We will be adding support for new languages and frameworks over the time. However, if you find yourself interested in adding one, it's fairly easy to do:

- Get the source code and compile it (it's written in Go!)
- Create a new directory under `packs/` for you language or framework, e.g `packs/java/`.
- You then need to implement two interfaces, `packs.Analyzer` and `packs.Detector`.
- The `Detector` tells starter if the project is written in the given language or framework (in this example Java)
- The `Analyzer` analyze the project and write the `Dockerfile` and `service.yml`.
- Create a template with the name of the language under the `templates/dockerfiles` folder, e.g `java.dockerfile.template`
- Use Golang template syntax to build the template for `Dockerfile`
