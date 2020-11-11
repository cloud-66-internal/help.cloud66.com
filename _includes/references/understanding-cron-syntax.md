## Overview

Cron is a utility that allows you to automate some repetitive tasks in Linux. For example if you would like to create backups of certain files or directories each night, you can use Cron to automate this.

In Cloud 66 we have created an easier way to edit and control these tasks from your Dashboard using the Jobs Add-in.  However we still offer a way to use Cron's powerful scheduling syntax within Jobs. It's also useful to understand how Cron works in case you need to debug a job.

## The basics of Cron

Cron stores its entries in a file named `crontab` (short for "cron table"), usually located in the `/etc` directory. 

In our example below there are two jobs in the `/etc/crontab` file. The first job backs up the /etc directory nightly. The second job runs the [Analog](https://web.archive.org/web/20170507174724/http://www.analog.cx/) program to calculate server stats.

```bash
30 1 * * * root tar czf /usr/local/backups/daily/etc.tar.gz /etc >> /dev/null 2>&1
30 5 * * * root /usr/local/src/analog-5.32-lh/analog >> /dev/null 2>&1
```

## Understanding Cron fields

Each cron field is mapped to a specific function:

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="10%">Field</th>
    <th>Function</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Minute (0-59)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Hour (2-24)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Day of month (1-31)</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Month (1-12, Jan, Feb, etc)</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Day of week (0-6) 0 = Sunday, 1 = Monday etc or Sun, Mon, etc)</td>
  </tr>
  <tr>
    <td>6</td>
    <td>User that the command will run as</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Command to execute</td>
  </tr>
</tbody>
</table>

As you can see the first 5 fields are all dedicated to the scheduling and frequency of the task.

The asterisks in the example above are wildcards meaning that cron will ignore these fields. So when a field like "Month" is left as an asterisk that means "don't take the month into account when figuring out whether to run a job". 

So using one of our original examples:

```bash
30 1 * * * root tar czf /usr/local/backups/daily/etc.tar.gz /etc >> /dev/null 2>&1
```

This job runs the command `tar czvf /usr/local/backups/daily/etc.tar.gz /etc` at 1:30am every day. The `>> /dev/null 2>&1` part sends any standard output to `/dev/null` (the Linux trash can) and to redirect standard error (2) to the same place as the standard output (1). This means the command executes without any output to a terminal. 

## Setting more complex schedules

You can be extremely specific about when a task will run. For example:

```bash
30 15 13 6 1 * root tar czf /usr/local/backups/daily/etc.tar.gz /etc >> /dev/null 2>&1
```

This will run the command *only* on Monday June 13th at 3:30pm. Note that if this day and date combination is far into the future, the job will wait until all these conditions are met.

You can also use the following syntax to achieve the same result:

```bash
30 15 13 Jun Mon * root tar czf /usr/local/backups/daily/etc.tar.gz /etc >> /dev/null 2>&1
```

If you wanted to run a command 15 minutes after every hour regardless of the date you could add the following entry:

```bash
15 * * * * root /usr/bin/mycommand >> /dev/null 2>&1
```

If you wanted to run a command every 2 hours you could enter in */2 for the hour field. This would run the specified command at 2am, 4am, 6am, 8am, 10am, 12pm, 2pm, and so on. An example of this type of entry would be:

```bash
0 */2 * * * root /usr/bin/mycommand >> /dev/null 2>&1

```

You can also use commas to specify more than one time per entry. For instance if you wanted to run a command at 15 and 30 past each hour you would enter in `15,30` for the minute field. For example:

```bash
15,30 * * * * root /usr/bin/mycommand >> /dev/null 2>&1

```

If you wanted to run a command every day at a certain time for the first week of the month you would enter in `1-7` for the day field. For example:

```bash
15,30 */2 1-7 * * root /usr/bin/mycommand >> /dev/null 2>&1

```

This would run `mycommand` at the quarter and half hour marks of every second hour (2:15, 2:30, 4:15, 4:30 etc) for the first 7 days of the month.

## More help

- Learn how to set up a [Server Jobs](/{{page.collection}}/how-to-guides/add-ins/shell.html){% if include.product == 'rails' %}
- Learn how to set up [Rack tasks](/rails/how-to-guides/add-ins/rake-task.html){% endif %}{% if include.product == 'maestro' %}
- Learn how to run [Jobs inside Maestro containers](/maestro/how-to-guides/add-ins/docker-tasks.html){% endif %}