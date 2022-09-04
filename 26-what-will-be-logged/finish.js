/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
    console.log(a)
  }
}

fn()(true)
/**
 * привет из функции fn    <-----вызов fn()
 * true                    <-----вызов ф-ции внутри fn (true)
 */