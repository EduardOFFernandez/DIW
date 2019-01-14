$.getJSON( "parte", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
	if(val.grave=="grave"){
    items.push( "<li id='" + key + "' class='list-group-item'><a href='detalles.html?id="+val._id+"' >" + val.nombreAlumno + "</a><span>Editar <img src='img/editar.png'></span>  </li>" );
	}
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
