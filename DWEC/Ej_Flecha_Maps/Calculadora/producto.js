function mostrarProducto(){
    let param1 = 4
    let param2 = 6
    let producto = (param1,param2) => {
        result = param1 * param2
    
        return result
    }

    alert(param1+"*"+param2+"="+producto(param1,param2))
}