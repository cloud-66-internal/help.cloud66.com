
This query counts the number of records in the users table, and returns a boolean of true if that number is not zero.


	select count(*)<>0 as result from users

The result of this query may be the following, indicating that your _users_ table holds data.


	result
	---------
	1
