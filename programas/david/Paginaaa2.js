
function Paginaaa(){
var base = document.getElementById('b').value
var altura = document.getElementById('h').value
var resultado = "RESPUESTA: "
var areaTriangulo = (base*altura)/2;

document.getElementById('mostrar').innerHTML=resultado+areaTriangulo;
}
