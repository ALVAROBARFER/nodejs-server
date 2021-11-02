// Funcion factorial numero

let num = 5

let result = 1;

function factorial1(num){

  while(num > 1){

  result = result *= num;

    num--;
  }
return result
}

console.log("El factorial de "+ num + " es " + factorial1(5))


//Funcion arrow iterativa factorial numero
num = 5

let factorial = (num) => {

  let result = 1

  if(num>1){
    result = result * num * factorial(num-1);
  }
  return result
}

console.log("El factorial de "+ num + " es " + factorial(num))
 