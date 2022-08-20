/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


const text = 'Andrei likes to coock';

const instExam = text instanceof String;

console.log(instExam);

console.log(typeof text);

const textUp = text.toUpperCase();

console.log(textUp);

//additional task "Сreating a string instance"

const myString = new String('Andrei');

console.log(myString instanceof String);

console.log(typeof myString);

console.log(myString.toLowerCase())

