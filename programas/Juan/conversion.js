function conver(){
  var pies = document.getElementById('ft').value
  var pies1metro = 0.3048;
  var resultado = pies*pies1metro;
document.getElementById('mostrar').innerHTML=resultado;
}
function convert(){
  var pulgadas = document.getElementById('inc').value
  var pulgadas1metro = 0.0254;
  var resultado = pulgadas*pulgadas1metro;
document.getElementById('ver').innerHTML=resultado;
}
