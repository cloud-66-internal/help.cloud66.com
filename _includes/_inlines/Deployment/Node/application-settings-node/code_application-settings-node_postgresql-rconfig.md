<!-- usedin: [ _includes/_inlines/Deployment/Node/application-settings-node/application-settings-node_postgresql.md] -->

```

var config = {
  user: process.env.POSTGRESDB_USERNAME,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASSWORD,
  host: process.env.POSTGRESDB_URL,
  max: 10,
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);

```
