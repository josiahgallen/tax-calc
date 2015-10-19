# tax-calc
You don’t always need a complex control structure to solve simple problems. Sometimes a program requires an extra step in one case, but in all other cases theres nothing to do.

Leslie Sutton [12:02 PM]
Write a simple program to compute the tax on an order amount. The program should prompt for the order amount and the state. If the state is “WI” then the order must be charged 5.5% tax. The program should display the subtotal, tax, and total for Wisconsin residents but display just the total for non-residents.

Leslie Sutton [12:03 PM]
Example Output:
What is the order amount? 10
What is the state? WI
The subtotal is $10.00
The tax is $0.55
The total is $10.55
OR
What is the order amount? 10
What is the state? MN
The total is $10.00

Constraints
Implement this program using only a simple if statement - don’t use an else cause
Ensure that all money is rounded up to the nearest cent
Use a simple output statement at the end of the program to display the program results

Leslie Sutton [12:04 PM]
Challenges
Allow the user to enter a state abbreviation in upper, lower or mixed case
also allow the user to enter the states full name in upper, lower or mixed case
