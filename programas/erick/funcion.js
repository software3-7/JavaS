function numeroMayor() {

   var numero01;
   var numero02;

   numero01 = document.getElementById('numero1').value
   numero02 = document.getElementById('numero2').value

   if (numero01 == numero02)
   {
          //imprime que los numeros son iguales
     document.getElementById('mostrar').innerHTML = "Los numeros son iguales";
     document.getElementById('ver').innerHTML = "";
   }
   else {

       if(numero01 >= numero02)
       {
              //imprime numero mayor
       document.getElementById('mostrar').innerHTML = "EL NUMERO MAYOR ES: " + numero01;
       }
       else
       {
             //imprime numero mayor
       document.getElementById('mostrar').innerHTML = "EL NUMERO MAYOR ES: " + numero02;
       }



      if(numero01 <= numero02)

       {
              //imprime numero menor
       document.getElementById('ver').innerHTML = "EL NUMERO MENOR ES: " + numero01;
       }
       else
       {
             //imprime numero menor
       document.getElementById('ver').innerHTML = "EL NUMERO MENOR ES: " + numero02;
       }

   }

}
