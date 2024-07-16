const one = 1
let two = 2         // Prefer this one to create variables
var three = 3       // Don't use this, because of issue in block scope and functional scope
without_keyword_variable = "yes, but don't use this way!!"
let this_variable_is_not_given_any_value;

console.table([one, two, three, without_keyword_variable, this_variable_is_not_given_any_value])