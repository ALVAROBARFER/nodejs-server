// crear variables
// diferencia "var" "let" "const"
// ¿hace falta el punto y coma?
// como creo un bucle
// operadores
// funciones y "arrow functions"
// callback
// promises
// async / await
// https://www.cogingame.com/start

// VAR es una variable que SI puede cambiar su valor
var a = 'a'

// CONST es una constante la cual NO cambiara su valor
// en ningún momento en el futuro
const b = 'b'

// LET es una variable que tambien podra cambiar su valor,
// pero solo vivira en el bloque donde fue declarada
let c = 'c'


// NO HACE FALTA USAR ;

// BUCLES

// Bucle for

for (let step = 0; step < 5; step++) {
    console.log('Camina ' + (step + 1) + ' pasos hacia el este')
  }

// Bucle while
let i = 0
while(i <= 5){
    console.log('Camina ' + (i + 1) + ' pasos hacia el este')
i++
}

//Factorial numero

//function factorial(num){

//let result = 2

// while (n > 1){
//    result *= n;
//    n--;
//  }
//for(let i = 2; i >= num; i++){
//  result *= i;
//}

// return result;
//}
//console.log(factorial(9));

let factorial = (n) => {
  let result = 1;

  if(n>1){
    result = result + n + factorial(n-1);
  }
}

//Recursividad 5!=5*4!=5*4*3!=5*4*3*2!
// result = 1*5*4! --> result= 1*4*3! --> result=1*3*2! --> result=1*2!