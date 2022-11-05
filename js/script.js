document.getElementById('insertar').innerHTML='texto insertado desde un Script';

// FUNCION PARA OCULTAR LOS ELEMETOS
function ocultarElemento(){
    document.getElementById('ocultar').style.display='none'
}

// FUNCION PARA MOSTRAR EL CODIGO
function mostrarElemento(){
    document.getElementById('ocultar').style.display='block'
}


// FUNCION PARA CAMBIAR EL TAMAÑO
function cambiarFont(valor){
    document.getElementById('estilo').style.fontSize= valor
}