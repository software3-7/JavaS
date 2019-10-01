function primo()
{
  var valor, NumeroPrimo;
  var valor=parseInt(document.getElementById("valor").value);

  var NumeroPrimo=true;
  i=0;
  for(i=2;i<valor;i++)
  {
    // If factor
    if(valor%i == 0)
    {
      NumeroPrimo=false;

    }
  }

  if (valor <=0) {
    document.getElementById("mostrar").innerHTML="El numero "+valor+" NO es Primo";
    document.getElementById('ver').innerHTML = "Los numeros primos deben ser positivos!";
  }
  else if((NumeroPrimo==true) && (valor!=1))
  {
    document.getElementById("mostrar").innerHTML="El numero "+valor+" es Primo";
    document.getElementById('ver').innerHTML = " ";
  }
  else {
document.getElementById("mostrar").innerHTML="El numero "+valor+" NO es Primo";
document.getElementById('ver').innerHTML = " ";
  }
}
