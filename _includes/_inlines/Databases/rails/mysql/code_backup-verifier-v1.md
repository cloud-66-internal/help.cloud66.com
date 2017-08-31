
This query will count the number of records in the users table, and returns a 1 if that number is not zero.


	select count(*)<>0 as result from users

The result of this query may be the following, indicating that your _users_ table holds data.


	result
	1
