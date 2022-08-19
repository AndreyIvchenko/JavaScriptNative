/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


//option 1
const hiWorld = () => console.log('Hello other world!');

setTimeout(hiWorld,5000);

//option 2

setTimeout(()=>console.log('Hello world!'),3000)