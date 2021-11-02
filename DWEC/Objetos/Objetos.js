let cad= "Sergi:Garcia:123456";
let tfo;
cad = cad.toUpperCase();
alert(cad);
splitTodosCampos = cad.split(":");
split1Campo=cad.split(":",1);
alert(split1Campo);
tfo=splitTodosCampos[2];
//Cambio en el telefono los numeros 3 por 9
tfo = tfo.replace("2","9");
alert(tfo);
//MUestra eñ quiomto numero del telefonp
alert(tfo.charAt(4));
alert("Bienvenido al CEEDCV");