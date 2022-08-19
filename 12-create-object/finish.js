/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const userProfile = {
    name:'Ann',
    surname: 'Iv',
    favoriteNumber: 40

}

//option 1
const infoUserProfile = 'My name is ' + userProfile.name +' ' +userProfile.surname + ' and my favorite number is '+ userProfile.favoriteNumber;

console.log(infoUserProfile)

//option 1
const infoUserProfile2 = `My name is ${userProfile.name} ${userProfile.surname} and my favorite number is ${userProfile.favoriteNumber}`
console.log(infoUserProfile2)
