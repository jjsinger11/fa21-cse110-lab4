1. The bug was that we were taking both of the integer values as strings, so they were just being concatenated.
2. I fixed it by using the `parseInt()` function to make both the numbers integers.