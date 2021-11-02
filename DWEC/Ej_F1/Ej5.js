let num1
let num2
let num3
let num4

num1 = prompt("Introduzca el número 1:")
num2 = prompt("Introduzca el número 2:")
num3 = prompt("Introduzca el número 3:")
num4 = prompt("Introduzca el número 4:")

let suma
let producto

suma = parseInt(num1)+ parseInt(num2)

producto = num3 * num4


document.write("<h3>Suma</h3>")
document.write(num1+"+"+num2+"="+suma)
document.write("<h3>Producto</h3>")
document.write(num3+"x"+num4+"="+producto)
