document.addEventListener("DOMContentLoaded", cargar);

function cargar() {

    if(screen.width>=360 && screen.width<=500){

        document.getElementById('verticalMenu').style.display='none';

    }
    document.getElementById('menu').addEventListener('click', mostrarMenu);

}

function mostrarMenu(){

    if(document.getElementById('verticalMenu').style.display=='none'){

        document.getElementById('verticalMenu').style.display='block';

    }else{
        document.getElementById('verticalMenu').style.display='none';
    }

}