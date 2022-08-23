/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)

//3

console.log(true && null) //null
console.log(3||null)//3
console.log(3||false)//3

