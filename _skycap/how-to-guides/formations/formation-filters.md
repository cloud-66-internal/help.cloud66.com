---
layout: post
template: one-col
title: Using Formation Filters
order: 6
categories: how-to-guides/formations
lead: "How to define and use Formation Filters"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path:output_ext
---

## Overview

Formation Filters allow you to quickly render and deploy parts of your application, while leaving other parts undisturbed. 

You can use Filters to systematically include (or exclude) [Stencils](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil), [Helm charts](/skycap/how-to-guides/deployment/helm.html), [Transformations](/skycap/tutorials/using-transformations-with-skycap.html) and [Policies](/skycap/tutorials/using-validation-policies.html) from a deployment operation. 

Filters can be positive ("only include components that match X") or negative ("don't include anything with property Y") or a combination of both.

## How Formation Filters work

Filters are simple logical tests against two properties:

- Name
- Tag

You can create a filter to exclude or include any of the following Skycap components:

- Stencils
- Helm charts
- Transformations
- Policies

...based on whether they match a filter. When you run a deployment command using Toolbelt, you can call a Filter to intelligently include and exclude components based on your rules. For example:

```bash
cx snapshots render --stack "Hello World" --snapshot "SNAPSHOT_ID" --formation "FORMATION_ID" --filter "dev-only.json"
```

...will use the Filter named `dev-only.json` to select which components will be subject to the `render` command. Filters are technically JSON formatted files, but the syntax for writing rules is not JSON-based (see below).

### Filter syntax

Filters are logical tests enclosed in round brackets. The operators currently supported are:

- `==` for positive matches ("equals") - for **tags** this also supports partial matches ("contains")
- `!=` for negative matches ("does not equal")

An common example of a Filter would be `(tag != "dev")` - this would exclude any component tagged with "dev". 

You can also make chains of conditional filters using:

- `&&` - logical AND
- `||` - logical OR

## Adding filters to a Formation

Each Formation has its own set of Filters. To add a Filters for a Formation:

1. Open your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on the Skycap application in question
2. Click on the name of the Formation 
3. Click the *Create Filters* link below the name of the Formation
4. Click on the green + and then choose a template
5. Give your filter a name and a description to help you identify it more easily 
6. Add your logical rules to any of the components as needed
7. Click Save Formation Filter

Once a Filter has been saved, you can call it via the Toolbelt whenever you render or deploy components. You can find a handy example of this by clicking on the name of any Filter. You can call a filter using its name or it's UUID. 

## Using filters with Toolbelt (cx)

Filters are primarily used via the Cloud 66 Toolbelt (cx). This can be as simple as adding a filter argument to any cx command. For example:

```shell
cx formations deploy -s "My App" -f "my-formation"
```

...would deploy all the components of "My App" as configured under "my-formation", whereas:

```bash
cx formations deploy -s "My App" -f "my-formation" --filter "dev-only"
```

...would only deploy the components specified in the "dev-only" filter and ignore the rest.

You can automatically generate a filtered cx command via your Dashboard. To do this:

1. Open the Formation detail page
2. Use the dropdown below the Formation's name to select a filter (if the dropdown is missing you have no filters)
3. Copy the command in the yellow block below your Services panel

### More examples

You can find specific `cx` commands for a filter by visiting its detail page. To do this:

1. Open the Formation detail page
2. Click *Edit Filters* (just under the Formation name and the snapshot date)
3. Click on the name of the filter
4. The example render command is listed at the bottom of the table. You'll notice that it automatically references the current Formation and the most recent Snapshot. 

For example:

```bash
cx snapshots render --stack "My App" --snapshot "SNAPSHOT_ID" --formation "my-formation" --filter "filtername"
```