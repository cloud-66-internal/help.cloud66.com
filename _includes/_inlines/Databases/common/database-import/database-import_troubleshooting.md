

## Troubleshoot
   
   It can happen that the desired stack is not listed when using DATABASE IMPORT, there could be a few reason behind this:
   
   1. **Your user is not Administrator on the sources stack:**
   
        If you are not the account owner or in another word you are a team member, your role on the source stack may be different from Administrator, you can ask your organization owner to check this and make a decision based on that (either change your role on the source stack or the owner import the database).
   2. **The backup on the source stack is Binary:**
   
         Since the Binary backups take the backup from the file system importing it to another stack (i.e different server) is a tricky, so we've opted out for not allowing users to import database when Binary. 
   You can check this by clicking on the backup link, and then edit to see if it a binary backup or not. If it is a binary backup you can change it to text first, run the back up and then go the destination stack and see that the source stack should be listed. After you are done with the database import you can go to the source stack and revert it back to Binary.