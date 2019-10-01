
function potenciar() {

var numero,numero2;

numero = document.getElementById('base').value

numero2 = document.getElementById('exponente').value

var valor = Math.pow(numero,numero2);

  document.getElementById('mostrar').innerHTML = 'Resultado: ' + valor;

}
