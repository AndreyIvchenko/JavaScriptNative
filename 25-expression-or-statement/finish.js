/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// expression statement
15 

//statement
const myObject = {//{ } <--expression statement
  x: 10,
  y: true,
} 

//expression statement
myObject.z = 'abc'  //'abc' <--expression

//expression statement
delete myObject.x 

//statement
let newVariable 

//expression statement
newVariable = 30 + 5 //<--expression

//expression statement
console.log(newVariable) // (newVariable) <--expression


//statement
if (newVariable > 10) { // (newVariable > 10) <--expression

  console.log(`${newVariable} больше 10`)  // ${newVariable} <--expression
}  
/**          ___________________________
 *                        ^
 *                    expression
 * 
 */


