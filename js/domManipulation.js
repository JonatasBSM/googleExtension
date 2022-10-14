var document = window.document

var inputSerie = document.getElementById('osm_serie_0').value
console.log(typeof(inputSerie))
var inputNum = document.getElementById('osm_num_0').value

if ((inputNum == null) || (inputSerie == null)) {
    alert("Erro ao redirecionar para a NoPaper!")
}

window.open("http://portal.labapoiobrasil.com.br/osm/index-impressao-laudo/" + inputSerie.trim() + '/' + inputNum.trim(), '_blank');