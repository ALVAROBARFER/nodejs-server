let num

num = prompt("Introduzca un número: ")

numeroAleatorio = (sides) => Math.floor(Math.random() * sides) + 1;

document.write("<h3>Número aleatorio entre 1 y n</h3>")
document.write(numeroAleatorio(num))

const funcion = numeroAleatorio