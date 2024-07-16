# Introduction
+ you can use or don't use semi-colons in js, doesn't affect anything.
+ `typeof()` operator can be used to display the data type of the variable
+ To use the newer standards of javascript, top your file with this line ~
    ```js
    "use strict";
    ```


# Variables
+ To create constant variables,
    ```js
    const name = "anna"
    ```
+ To created normal variables,
    ```js
    var fname = "anna"          // avoid this method due to scope issue
    let lname = "ortega"        // prefer this one always
    ```

# Data Types
1. numbers
2. strings (in "")
3. boolean
4. null (standalone value, a representation of nothing: khaali)
5. undefined (variable is declared but not being assigned anything)

# Console Methods
+ To print the value of a single variable,
    ```js
    console.log(<variable>)
    ```

+ To print multiple variables in a single run,
    ```js
    console.table([<variable, variable .........>])
    ```
