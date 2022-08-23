/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myFamily = ['Andrei', 'Anna'];

myFamily.push('Uliana','Ostap');

myFamily.push('Tima','Nusha');

console.log(myFamily);

console.log(myFamily.length);

//destructur array myFamily
const [n1, n2, n3 , n4, n5, n6] = myFamily;
console.log(n1,n6)