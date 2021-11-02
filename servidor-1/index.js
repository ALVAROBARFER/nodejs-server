// Importamos el framework express
const express = require("express");
const app = express();

// Inicializamos express
app.use(express.json())

// Indicamos que use un puerto 
// para desplegar la aplicación
const port = process.env.PORT|| 8000;

/*app.get('/', function(request, response) {

    // Se define la cabecera HTTP, con el estado HTTP 
    //(OK: 200) y el tipo de contenido
    response.writeHead(200, {'Content-Type': 'text/plain'});
 
    // Se responde, en el cuerpo de la respuesta con
    // el mensaje "Hello World"
    response.end('Hola Mundo!\n');
 })*/

 app.get('/', function(request, response)  {

    response.writeHead(200, {'Content-Type': 'html'});

    response.end('<p>Parrafo html</p>');
 })

 let coches = [
    {marca: "Opel", modelo: "Corse"},
    {marca: "Kia", modelo: "Río"}
];

app.get('/coches', (req, res)=>{
    res.json(coches);
});

app.post('/coches', (req, res) =>{
    coches.push(req.body)

    res.json(coches)
});

app.get('/coches/:id', (req,res) =>{
    const id = parseInt(rep.params.id);

    const idisIdInvalido = isNaN(id) || id >= coches.length || id < 0;

    if(isNaN(id) || id >= coches.length || id < 0) {
        res.status(400).json({error: 404, message: "Id inválida"});
    } else{
        const result = coches[id];

        res.json(result);
    }
});

app.put('/coches/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isIdInvalido){

    } else {

    }
    
});

app.get('/Datos', function(peticion, respuesta){
    respuesta.send("Datos web");
});

app.get('/html', function(peticion, respuesta){
    respuesta.sendFile(__dirname + "/views/index.html");
});

// Arrancamos la aplicación
app.listen(port, () =>{
    console.log('Servidor desplegado en el port '+ port)
})