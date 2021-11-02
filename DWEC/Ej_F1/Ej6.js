let nota1
let nota2
let nota3

nota1 = prompt("Ingrese la nota 1:")
nota2 = prompt("Ingrese la nota 2:")
nota3 = prompt("Ingrese la nota 3:")

document.write("<h3>Nota 1:</h3>")
document.write(nota1)
document.write("<h3>Nota 2:</h3>")
document.write(nota2)
document.write("<h3>Nota 3:</h3>")
document.write(nota3)

let sumaNotas


sumaNotas = parseInt(nota1) + parseInt(nota2) + parseInt(nota3)

document.write("<h3>Suma de notas:</h3>")
document.write(sumaNotas)

let promedio

promedio = sumaNotas / 3

document.write("<h3>Promedio de notas:</h3>")
document.write(promedio)

if (promedio >= 7){
    document.write("<h3>Resultado</h3>");
    document.write("Promocionado");
} else {
    document.write("<h3>Resultado.</h3>");
    document.write("Repite curso.");
}   