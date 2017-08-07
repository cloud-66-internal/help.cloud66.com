## AUTO_GENERATE environment variables

 AUTO_GENERATE environment variables allow you to insert a generic environment variable into your stack, and Cloud 66 will automatically replace their value with a random string. This is useful to have Cloud 66 automatically generate values for secrets that you do not want to have commited into your repository.

To use AUTO_GENERATE environment variables, you define any environment variables with the value AUTO_GENERATE or AUTO_GENERATE_{number} - where number is the length of the value to auto-generate - ie. AUTO_GENERATE_32.

If you use these values, then Cloud 66 will replace them with a fixed random string of the specified length (10 is the default length). Using this, you can safely commit your env file to your git repository with the following content for example, then load it when you create your new stack for concrete values.

```RAILS_SECRET=AUTO_GENERATE_64
A_KEY=AUTO_GENERATE```
