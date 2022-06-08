/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */


const myArray = [1, true, false, 'abc']

myArray.push('last', 15, 1)

const length = myArray.length

console.log(length)