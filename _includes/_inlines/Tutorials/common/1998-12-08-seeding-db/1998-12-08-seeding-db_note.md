<!-- usedin: [ _legacy_docker/Tutorials/1998-12-08-seeding-db.md, _maestro/Tutorials/1998-12-08-seeding-db.md, _node/tutorials/1998-12-08-seeding-db.md, _rails/Tutorials/1998-12-08-seeding-db.md] -->


## Note

    
The deploy hook example above will only execute during the _build_ for a new stack. If you want to seed an existing stack you could either

*   Execute the seed command manually, or
*   Change the _apply_during_ specification of the deploy hook (could be used for DB data resets during subsequent testing deploys for instance)


