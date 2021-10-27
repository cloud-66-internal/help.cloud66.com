## What is a glob?

A glob (or "glob pattern") is a way to specify a set of text entities (like names or tags) based on a simple wildcard pattern - a bit like a very simple regular expression. For example, if you wished to match all the entities that had the word "new" anywhere in their text, you could use the glob `*new*`. Or if you wanted words only starting with "new", you could use the glob `new*`

## Glob syntax

Globs use wildcards to match strings of text. See below for the list and explanations of each. Globs are case sensitive. Spaces are considered characters.

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th>Wildcard</th>
    <th>Description</th>
    <th>Example</th>
    <th>Matches</th>
    <th>Does not match</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>*</code></td>
    <td>matches any number of any characters including none</td>
    <td><code>*New*</code></td>
    <td><code>New</code>, <code>reNew</code>, or <code>Newly</code></td>
    <td><code>Ne</code>, <code>newly</code> or <code>ew</code></td>
  </tr>
  <tr>
    <td><code>?</code></td>
    <td>matches any single character</td>
    <td><code>?en</code></td>
    <td><code>ten</code>, <code>men</code>, <code>len</code></td>
    <td><code>en</code></td>
  </tr>
  <tr>
    <td><code>[abc]</code></td>
    <td>matches one character from the bracket</td>
    <td><code>[MT]en</code></td>
    <td><code>Men</code> or <code>Ten</code></td>
    <td><code>pen</code>, <code>men</code> or <code>MTen</code></td>
  </tr>
  <tr>
    <td><code>[a-z]</code></td>
    <td>matches one character from the range given in the bracket</td>
    <td><code>Count[0-9]</code></td>
    <td><code>Count0</code>, <code>Count2</code> etc.</td>
    <td><code>Count</code>, <code>Count 1</code> or <code>Count10</code></td>
  </tr>
</tbody>
</table>