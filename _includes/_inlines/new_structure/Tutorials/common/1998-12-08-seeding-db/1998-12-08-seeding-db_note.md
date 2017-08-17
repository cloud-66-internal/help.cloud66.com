<!-- post: -->


### Note

    
The deploy hook example above will only execute during the _build_ for a new stack. If you want to seed an existing stack you could either

*   Execute the seed command manually, or
*   Change the _apply&#95;during_ specification of the deploy hook (could be used for DB data resets during subsequent testing deploys for instance)


