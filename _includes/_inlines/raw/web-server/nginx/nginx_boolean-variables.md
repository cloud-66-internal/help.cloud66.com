---
post: 
---

### Boolean variables

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false` (even if you are checking for true).

Good syntax:

*   if passenger != true
*   if passenger != false
*   if passenger == true
*   if passenger == false	

Bad syntax:

*   Bad: if passenger
*   Bad: if !passenger
