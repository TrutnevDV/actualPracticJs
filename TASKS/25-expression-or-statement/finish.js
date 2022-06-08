/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //выражение инструкция - инстуркция (не правильно)

const myObject = {
  x: 10,
  y: true,
} //инструкция (правильно)

myObject.z = 'abc'//инструкция (не правильно)

delete myObject.x //выражение инструкция

let newVariable //инструкция

newVariable = 30 + 5 //выражение инструкция

console.log(newVariable) //выражение

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
} //инструкция
