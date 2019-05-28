---
layout: post
template: one-col
title: Writing and debugging Copper rules
order: 5
categories: how-to-guides/formations
lead: "How to write validation policies in Copper DSL"
legacy: false
tags: ["formations", "stencils"]
permalink: /:collection/:path:output_ext
---

Validation policies in Skycap rely on Copper, an open-source tool developed by Cloud 66. It has its own excellent [documentation](https://copper.sh/docs/copper-dsl/) and this should be the starting point for anyone wanting to craft their own validation policies for Skycap.

## Debugging Copper DSL

Writing valid and conformant rules in Copper DSL will usually require some debugging. Rather than using the Skycap web interface to debug, we suggest that you:

1. [Install Copper](https://copper.sh/docs/getting-started/) on your local machine
2. Download the yml file (Stencil) from your application against which you want to test a rule
3. Write your rule in [Copper DSL](https://copper.sh/docs/copper-dsl/) and save it as a `.cop` file
4. Test the rule against your yml file in your terminal using the `$ copper check` function (you can find the syntax [here](https://copper.sh/docs/getting-started/)).

Once you have a rule that works locally, you can add it to Skycap and run it against the Stencil in question by Rendering the Formation. 

If you’re unsure of how to do this, follow  the [validation policies tutorial](/skycap/tutorials/using-validation-policies.html) to acquaint yourself with the steps required.

