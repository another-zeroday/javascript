# Introduction
+ you can use or don't use semi-colons in js, doesn't affect anything.
+ `typeof()` operator can be used to display the data type of the variable
    ```js
    // Both of them works the same
    console.log(typeof(45))
    console.log(typeof 45)
    ```

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
6. symbol
7. NaN (not a number)

# Data-type Conversion
+ To convert a string to number
    ```js
    let num_in_string = "45"
    console.table([num_in_string, typeof num_in_string])
    
    let num = Number(45)
    console.table([num, typeof num])
    ```
+ Notes: 
    1. If there's a alphabet found in a string and its being tried to convert it into a number, then no error will be raised! Though the data type of that value will be a number , but the value of it will become `NaN` , which stands for "Not a Number".
        ```js
        let num_in_string = "a45"
        console.table([num_in_string, typeof num_in_string])

        let num = Number(num_in_string)
        console.table([num, typeof num])
        ```
        ```terminal
        NaN: number
        ```
    2. If `null` value is tried to be converted into a number, it will be converted to zero.
        ```js
        let null_value = null
        console.table([null_value, typeof null_value])

        let num = Number(null_value)
        console.table([num, typeof num])
        ```
        ```terminal
        0: number
        ```
    3. If an `undefined` value is tried to be converted into a number, it will be converted to `NaN` with a data-type of number.
        ```js
        let undefined_value = undefined
        console.table([undefined_value, typeof undefined_value])

        let num = Number(undefined_value)
        console.table([num, typeof num])
        ```
        ```terminal
        NaN: number
        ```
    4. Boolean values are conerted to their respective 0(false) and 1(true).
+ To convert values to Boolean.
    ```js
    let value;
    let bool_value = Boolean(value)
    ```
+ Note:
    1. Any integer except 0 is converted to `true` except 0, which is a `false` .
    2. A `null` value is converted to `false` .
    3. A `undefined` value is converted to `false` .
    4. An empty string `""` is converted to `false` .
    5. A non-empty string `""` is converted to 'true` .

+ Normally, anything is converted to string easily! No hidden problems, as of now! 


# Console Methods
+ To print the value of a single variable,
    ```js
    console.log(<variable>)
    ```

+ To print multiple variables in a single run,
    ```js
    console.table([<variable, variable .........>])
    ```