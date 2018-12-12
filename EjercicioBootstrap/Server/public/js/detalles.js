var AuxID = location.search.substr(1).split("=")[1];
var leve;

$.getJSON("parte/" + AuxID, function (data) {
  var items = [];
  $.each(data, function (key, val) {
    console.log(key);

    items.push("<li id='" + key + "' class='list-group-item'>" + key + " : " + val + "</li>");
    if (key == "leve") {
      leve = "si";

    }
    if (key == "grave") {
      leve = "no";
    }
  });

  $("<ul/>", {
    "class": "list-group",
    html: items.join("")
  }).appendTo("#divLista");
});

function eliminarParte() {
  $.ajax({
    type: "DELETE",
    url: "parte/" + AuxID,
    data: "",
  });
}

function cambiarPag() {



  if (leve == "no") {
    document.getElementById('mingui').href = "listarGraves.html";
  } else {
    document.getElementById('mingui').href = "listarLeves.html";
  }

}

