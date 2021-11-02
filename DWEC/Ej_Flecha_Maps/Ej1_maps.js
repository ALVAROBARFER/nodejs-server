window.onload=inicio;
function inicio(){
    document.querySelector('#boton').onclick=programaCiudades;

    
}

const mapaCiudades = new Map([["Madrid", 3223000],["Barcelona", 1620000],["Teruel", 35691],["Valencia", 791413]]);

function programaCiudades(){

    let opcion = document.querySelector('#opcion').value;

    if(opcion == 'a'){

        //document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p></p>');
        document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Ciudades y sus habitantes.</p>');

        for (let [clave,valor] of mapaCiudades) {
            document.querySelector('#caja').insertAdjacentHTML("beforeend", clave+" - "+valor);
            document.querySelector('#caja').insertAdjacentHTML("beforeend", '<br>');
            
        };
    } else {
        if(opcion == 'b'){
            document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Número de cuidades.</p>');
            document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>'+mapaCiudades.size+'</p>');
            
        } else {
            if(opcion == 'c'){
                document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Borrar ciudad</p>');
                let ciudad = prompt("Introduzca la ciudad a borrar:");
                mapaCiudades.delete(ciudad);

                document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Se ha borrado '+ciudad+' de la lista.</p>');
                
            } else {
                if(opcion == 'd'){
                    document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Añadir ciudad y sus habitantes.</p>');
                    
                    let ciudad = prompt("Introduzca la ciudad:");
                    let hab = prompt("Introduzca el número de habitantes:");

                    mapaCiudades.set(ciudad, hab);

                    document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Se ha añadido '+ciudad+' con '+hab+' habitantes a la lista.</p>');
                    
                } else {
                    if(opcion == 'e'){
                        document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Ciudad con mayor número de habitantes.</p>');
                        
                        let ciudadMax;
                        let max = 0;

                        for([ciudad, hab] of mapaCiudades){
                            
                            if(max < hab){

                                max = hab;

                                ciudadMax = ciudad;

                            }
                        }
                        console.log(max)

                        if (mapaCiudades.get(ciudadMax) == max){

                            document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p class="rojo">'+ciudadMax+'</p>');

                        }

                    } else{
                        if(opcion == 'f'){
                            document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Ciudad con menor número de habitantes.</p>');

                            let ciudadMin;
                            let min = 50000000;

                            for([ciudad, hab] of mapaCiudades){
                                    
                                if(min > hab){
    
                                    min = hab;
                                    ciudadMin = ciudad;

                                }
                            }
                            if (mapaCiudades.get(ciudadMin) == min){

                                document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p class="verde">'+ciudadMin+'</p>');

                            }
                            
                        } else{
                            if(opcion == 'g'){
                                
                                document.body.appendChild("Programa finalizado.");
                            } else{

                                document.querySelector('#caja').insertAdjacentHTML("beforeend", '<p>Introduzca una opción correcta!</p>');
                            
                            }
                        }
                    }
                }
            }
        }
    }
}