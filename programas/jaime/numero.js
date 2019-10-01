// JavaScript Document

function fibonacci(){
	var lista=document.getElementById("lista").value;
	var numero=0;
	var fibo1=0;
	var fibo2=1;
	var fibo3=0;
	var yo="";
	lista = --lista;
while (numero < lista ) {

  fibo3 = fibo1 + fibo2;

  fibo1 = fibo2;

  fibo2 = fibo3;

	numero ++;

	yo=fibo3;



	}
	numero = ++numero;
	if (numero == 1) {
			document.getElementById("mostrar").innerHTML = "El fibonacci " + numero + " es " + "1";
	}
	else {
			document.getElementById("mostrar").innerHTML = "El fibonacci " + numero + " es " + yo;
	}


}
