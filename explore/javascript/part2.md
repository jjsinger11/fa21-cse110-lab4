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
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '3' + 2 = '32'
    The string '3' is concatenated the int 2 which is type casted to a string.
    B. '3' - 2 = 1
    The string '3' is type casted to the int 3, and then you subtract 2 to get 1.
    C. 3 + null = 3
    The int 3 is added to null which has a numeric value of 0.
    D. '3' + null = '3null'
    The string 3 is concatenated with null which is type casted to a string.
    E. true + 3 = 4
    true has a numeric value of 1 which is added to 3 to get 4.
    F. false + null = 0
    false has a numeric value of 0 and null has a numeric value of 0, so when they are added it's just 0.
    G. '3' + undefined = '3undefined'
    The string 3 is concatenated with undefined which is typecasted to get '3undefined'.
    H. '3' - undefined = NaN
    undefined, which is type casted to a numeric value of NaN, is subtracted from the string 3 to get NaN.
15. A. '2' > 1 = true <br/>
    The string '2' is type casted to an int. Then 2 is compared to 1 to get true. <br/>
    B. '2' < '12' = false
    The string '2' and '12' are compared in order. So the '2' is compared to the '1' in '12'. Since '2' is bigger than '1' in lexigraphic order, then false is returned.
    C. 2 == '2' = true
    The int 2 is compared to the string '2' which is type casted to an int. This returns true.
    D. 2 === '2' = false
    2 is compared to '2' and since the types are different, this is false.
    E. true == 2 = false
    true is type casted to the int 1 which is not equal to 2.
    F. true === Boolean(2) = true
    Boolean of any number besides 0 returns true which is equal to true.

15. The == operator check equality and type casts for varaibles that aren't the same type. The === operator will only work for values that are type equivalent.