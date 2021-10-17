1. 3 is logged on line 12. This is because the for loop runs three times, and `var` variables have no scope.
2. 150 is logged on line 13. This is because this is 50% off the last price in the discounted array, and `var` variables have no scope.
3. 150 is logged on line 14. This is because finalPrice is a `var` variable, and it has no scope.
4. The function will return a discounted array with values 50, 100, and 150. This is 50 percent off all the prices in the array. The discounted array is a `var` variable, so it's value is able to accessed here.
5. Line 12 will log an error because i is not defined in this scope. `let` variables are only present in the block scope they are defined in.
6. Line 13 will log an error because discountedPrice is not defined in this scope. `let` variables are only present in the block scope they are defined in.
7. Line 14 will log 150 which is the final price that was being calculated. Since it is defined in the same scope that the console.log call is in, it is able to be used here.
8. This function will return a discounted array of 50, 100, and 150. These are all the discounted prices of the items. The discounted array is present in this scope because it has the `let` variable type and the return function is in the same block as it.
9. There will be a reference error on line 11. This is because i is a `let` variable and not defined in this scope.
10. The console will log 3 on line 12 becasue length is a `const` variable that is in a valid scope to be called.
11. This function will return a the list of discounted prices which are 50, 100, and 150. Ever thought this array has a `const` type, this only means that you cannot resign the referene to the array. You however **CAN** assign new values to indices inside the array.
12. A. student.name
12. B. student['Grad Year']
12. C. student.greeting()
12. D. student['Favorite Teacher'].name
12. E. student.courseLoad[0]