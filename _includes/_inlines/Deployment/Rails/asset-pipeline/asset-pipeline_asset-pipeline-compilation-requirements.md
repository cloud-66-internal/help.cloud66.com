<!-- post: -->


## Asset pipeline compilation requirements

Asset pipeline compilation uses *ExecJS* to run *JavaScript* code from within Ruby.

The ExecJS library in turn requires that you have at least one library available on your server that is capable of compiling Javascript.
Libraries for Javascript compilation on your server that are currently supported by Cloud 66 are:

1. **therubyracer** &mdash;  Google V8 embedded within Ruby. Installed by including "therubyracer" in your Gemfile.
2. **Node.js** &mdash; Cloud 66 will *automatically* install this on your server if you don't include "therubyracer" in your Gemfile.

