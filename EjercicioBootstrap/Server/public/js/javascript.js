 document.addEventListener("DOMContentLoaded", cargar);
function onSubmit(form) {

    var data = JSON.stringify($(form).serializeArray()); //  <-----------
    console.log(data);
    return false; //don't submit
}

$(document).ready(function () {
    $("input[type=radio]").click(function (event) {
        var valor = $(event.target).val();
        if (valor == "leve") {
            $("#seleccionLeve").show();
            $("#seleccionGrave").hide();
        } else if (valor == "grave") {
            $("#seleccionLeve").hide();
            $("#seleccionGrave").show();
        } else {
            // Otra cosa
        }
    });
});


function marcarLeve() {

    document.getElementById("leve").checked = 1;

}

function radioButtonLeve() {

    if (document.getElementById('leve').checked) {
        document.getElementById('grave').checked = 0;
        document.getElementById('leve').name = "leve";

    }


}

function radioButtonGrave() {

    if (document.getElementById('grave').checked) {
        document.getElementById('leve').checked = 0;
        document.getElementById('grave').name = "grave";

    }
}




function cargar() {

    radioButtonLeve();
 
}
