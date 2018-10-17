function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
}

$(document).ready(function() {
    $("input[type=radio]").click(function(event){
        var valor = $(event.target).val();
        if(valor =="leve"){
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