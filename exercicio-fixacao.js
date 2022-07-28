//1. Crie um novo array. 
//Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.

//2. Imprima no console o array original, depois imprima-o ordenado em ordem crescente. 
//Depois, imprima-o em ordem reversa.

//3. Remova o último item do array, e em seguida, adicione o número 6.
//Depois, remova o número que está no índice 2 do array.

const arrayNumeros = [1,13,18,25,30]

console.log("original", arrayNumeros)
console.log("crescente", arrayNumeros.sort())
console.log ("decrescente", arrayNumeros.reverse())

const arrayNumerosB = arrayNumeros.slice()
arrayNumerosB.pop()
arrayNumerosB.push(6)
arrayNumerosB.splice(2,1)

console.log("Array completa", arrayNumeros, "\nArray modificada", arrayNumerosB)