class Alumno{

    constructor(dni, nombre, notaMedia){

        this.dni = dni

        this.nombre = nombre

        this.notaMedia = notaMedia
    }

    consultarNota(){

        alert("El alumno " + this.nombre + " tiene una nota media de: " + this.notaMedia)
    }

    cambiarNota(){

        this.notaMedia = nuevaNota
    }

}



class Colegio{
    constructor(nombre, numeroAulas, numeroAlumnos){

        this.nombre = nombre

        this.numeroAulas = numeroAulas

        this.arrayAlumnos = new Array()

        for (let i = 0; i < numeroAlumnos; i++){
            
            this.arrayAlumnos[i] = new Alumno()
        }
    }

}