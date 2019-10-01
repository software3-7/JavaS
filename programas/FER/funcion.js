function convertir(tipo)
{
var mensaje = document.getElementById("mensaje");
var texto = mensaje.value;
if (tipo == 1){
  mensaje.value = texto.toUpperCase();
} else if (tipo == 2) {
  mensaje.value = texto.toLowerCase();
}
}
