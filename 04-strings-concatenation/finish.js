/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

// option 1
const myFirstName = 'Andrei',
    mySurname = 'Iuchanka',
    profession = 'administrator';

const userProfile = `My name is ${myFirstName} ${mySurname} and I'm ${profession}`;
//option 2
// const userProfile = 'My name is ' + myFirstName + ' ' + mySurname + ' and i am ' + profession;


console.log(userProfile);