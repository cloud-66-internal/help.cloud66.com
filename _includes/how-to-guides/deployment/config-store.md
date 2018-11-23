ConfigStore provides way to store: <strong>Key</strong>, <strong>Value</strong>, and <strong>Metadata</strong> information that can be shared across all of your applications.

{% if include.product == 'Skycap' %}
This information can then be referenced from within your application files and Skycap Stencil Templates.
{% endif %}

## ConfigStore Data Structure

Data edited from within the UI is text only and is structured as:

<ul>
    <li>
        <p><strong>Key</strong> &mdash; A text based <kbd>Key</kbd>.</p>
    </li>
    <li>
        <p><strong>Value</strong> &mdash; A text based <kbd>Value</kbd>.</p>
    </li>
    <li>
        <p><strong>Metadata</strong> &mdash; A comma separated list of <kbd>key=value</kbd> pairs. For example: <kbd>key1=value1, key2=value2</kbd></p>
    </li>
</ul>

If you need to store binary data you should <a href="#download-configstore-cli">use the <abbr title="Command Line Interface">CLI</abbr></a>.


## Application ConfigStore

Application level ConfigStore is accessed from the right hand application menu <em>Configuration</em> &rarr; <em>ConfigStore</em> tab. This page provides a way to store information where the scope is limited to a specific application.

## Account ConfigStore

Account wide ConfigStore is accessed from the <em>Account Settings page</em> &rarr; <em>ConfigStore</em> menu item. It provides a way to store information globally that can be referenced by all of by Applications.

## Accessing ConfigStore Variables?

You access ConfigStore data by using the following syntax:

### Ruby

<pre class="terminal">
<kbd>#{config_store['DB_USER']}</kbd>
</pre>

### YAML Files (Ruby Templates ERB Syntax)

<pre class="terminal">
<kbd><%= config_store['DB_USER'] %></kbd>
</pre>

### Skycap Stencil Templates

<pre class="terminal">
<kbd>${config_store("a.b")}</kbd>
</pre>

<br>

## CLI &amp; Advanced Features  

Access to advanced features is provided by the Command Line Interface. For example:

<ul>
    <li>
        <p>
            <strong>Binary Data</strong> &mdash; Support for storage of binary data.
        </p>
    </li>
</ul>


## Download ConfigStore CLI

If you are using Mac or Linux Auto Install by pasting the curl command in the Terminal is the easiest way to Install ConfigStore CLI.

Alternatively you can download the binary appropriate for your platform. <a href="">ConfigStore code is available on GitHub</a>.

### Auto Install

<kbd>curl -ssl https://s3.amazonaws.com/</kbd>

### Download CLI Binaries

<p>
    <strong>Mac</strong> &mdash; <a href="#">Download ConfigStore CLI for Mac</a>
</p>
<p>
    <strong>Linux</strong> &mdash; <a href="#">Download ConfigStore CLI for Linux</a>
</p>
<p>
    <strong>Windows</strong> &mdash; <a href="#">Download ConfigStore CLI for Windows</a>
</p>
