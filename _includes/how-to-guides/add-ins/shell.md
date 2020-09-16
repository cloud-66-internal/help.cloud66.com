## Overview

The Server Jobs add-in allows you to define and schedule regular server tasks (shell commands). Under the hood, these are run as cronjobs.

## Adding a new server job

To add a new server job: 

1. Click the *+* button on the add-ins panel of your Application Overview
2. Click the Install Now button on the Server Jobs add-in block. 
3. Choose a server and give your new job a name
4. Specify the shell command you want to run
5. Set a schedule for the job, or set it to run only on demand. 
6. Clicks the green Create Job button

You will now see your new job listed in your Application Overview.  You can edit it, or run it on demand by clicking on the small downward arrow. Your run results (success, failure and any output) can be seen in real-time on the job detail page.

## Using parameters

When you are running a job on demand via dashboard or [toolbelt](/{{page.collection}}/references/toolbelt.html#job-management), you can pass it parameters (if it is written to accept them).

### Notation

Jobs use a facility in the shell called *positional parameters*. Positional parameters are a series of special variables ($1, $2 ... $n) that contain the contents of the command line. Where **n** is greater than 9 using braces. For example, to refer to the 15th positional parameter, use the notation `${15}`.

```bash
cp $1 $2
ls $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}

```

### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default

```bash
cp $1 ${2:-/tmp}
```

### Passing parameters to job

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value.

**Job command:** `cp $1 ${2:-/tmp}`

**Passing arguments via dashboard:** `"log*.txt" tmp/logs`

**Passing arguments via Toolbelt:** `--arg "log*.txt" -- arg tmp/logs`