/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const myArr = [{
	carBrand: 'BMW',
 	price: 15000,
 	isAvailableForSale: true,
},
{
	carBrand: 'Toyota',
 	price: 7000,
 	isAvailableForSale: true,
},
{
	carBrand: 'Honda',
 	price: 1500,
 	isAvailableForSale: false,
}]

console.log(myArr)

myArr.push({
	carBrand: 'Mercedes',
 	price: 71000,
 	isAvailableForSale: true,
})

console.log(myArr)