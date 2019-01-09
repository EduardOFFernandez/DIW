
function cargar(){
    document.getElementById('select').addEventListener('change', posicion1);
}


function posicion1(){

    var id = document.getElementById('select').value;
    document.getElementById('a').style.order = 0;
    document.getElementById('b').style.order = 0;
    document.getElementById('c').style.order = 0;
    document.getElementById('d').style.order = 0;
    document.getElementById('e').style.order = 0;
    document.getElementById('f').style.order = 0;
    document.getElementById('g').style.order = 0;
    document.getElementById('h').style.order = 0;
    document.getElementById('i').style.order = 0;
    document.getElementById('j').style.order = 0;
    document.getElementById(id).style.order = -1;
}

document.addEventListener("DOMContentLoaded", cargar);