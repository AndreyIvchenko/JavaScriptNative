/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const array  = [1, 'two', true, null, undefined, Infinity, [], {}];

array.forEach (e => console.log(e));

console.log(Array.isArray(array))