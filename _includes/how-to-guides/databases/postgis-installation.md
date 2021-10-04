## Installing with Cloud 66

{% if page.collection == "maestro" %}
Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](/maestro/quickstarts/getting-started-with-manifest.html) documentation for more information.
{%else%}
Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) documentation for more information.
{%endif%}

In order for your manifest file to be picked up, you need a file called **manifest.yml** to be present within a folder named **.cloud66**, which is in turn located in the root of your source code, checked into your repository.


```shell
[source_repo]/.cloud66/manifest.yml
```

For Cloud 66 to install PostGIS, your manifest file should contain the following:

```yaml
production:
    postgresql:
        configuration:
            postgis: true
```

If you would like to specify versions, it should look something like this:


```yaml
production:
    postgresql:
        configuration:
        	version: 9.6
            postgis:
                version: 2.3.1
```

Once your application has been deployed, you can find your PostGIS file in `/etc/postgresql/share/contrib/postgis-2.1/postgis.sql` on your database server.


## More info

Follow [this excellent guide](https://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS23UbuntuPGSQL96Apt) if you need more help installing PostGIS. 
