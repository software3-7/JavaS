function CalcularEdad(){
  var nombre = document.getElementById('nombre').value
  var fechaNacimiento = new Date(document.getElementById('fecha').value);
  var fechaActual = new Date();

  var trollMesActual, trollMesNacimiento, trollDiaNacimiento;
    trollMesActual = fechaActual.getMonth();
    trollMesNacimiento = fechaNacimiento.getMonth();
    trollDiaNacimiento= fechaNacimiento.getDate();

  var diaActual, mesActual, yearActual;
    diaActual = fechaActual.getDate();
    mesActual = ++trollMesActual;
    yearActual = fechaActual.getFullYear();

  var diaNacimiento, mesNacimiento, yearNacimiento;
    diaNacimiento = ++trollDiaNacimiento;
    mesNacimiento = ++trollMesNacimiento;
    yearNacimiento = fechaNacimiento.getFullYear();

  var edad;
  var year;
  var variable;

  if (yearNacimiento < yearActual) {
    edad = yearActual - yearNacimiento;

    if (mesNacimiento > mesActual) {
      edad = --edad;
    }
    else if ((mesNacimiento == mesActual) && (diaNacimiento > diaActual)) {
      edad = --edad;
    }
    else {
      edad = edad;
    }
  }
  else if ((yearNacimiento == yearActual) && (mesNacimiento <= mesActual) && (diaNacimiento <= diaNacimiento)) {
    edad = yearActual - yearNacimiento;
    }

  if (yearNacimiento > yearActual) {
    edad = " invalida !";
    alert("¡La fecha es invalida!");
  }
  else if ((yearNacimiento == yearActual) && (mesNacimiento > mesActual)) {
    edad = " invalida !";
    alert("¡La fecha es invalida!");
  }
  else if ((yearNacimiento == yearActual) && (mesNacimiento == mesActual) && (diaNacimiento > diaActual)) {
    edad = " invalida !";
    alert("¡La fecha es invalida!");
  }
  else if (edad == undefined) {
    if (nombre == "") {
      variable = " poder calcular la edad";
    }
    else {

      variable = " calcular la edad de " + nombre;
    }
    document.getElementById('mostrar').innerHTML = "La fecha de nacimiento no ha sido definida";
    document.getElementById('ver').innerHTML = "Por favor, ingrese una fecha de nacimiento para " + variable;
  }
  else {
    if (edad == 1) {
      year = " año";
    }
    else {
      year = " años";
    }
    if (nombre == "") {
      if ((yearNacimiento == yearActual) && (mesNacimiento == mesActual) && (diaNacimiento == diaActual)) {
          document.getElementById('mostrar').innerHTML= "¡¡¡ " + nombre + " Nació Ahora !!!";
          document.getElementById('ver').innerHTML="Por lo tanto la edad es de " + edad + year;
      }
      else if ((yearNacimiento < yearActual) && (mesNacimiento == mesActual) && (diaNacimiento == diaActual)) {
        document.getElementById('mostrar').innerHTML="La edad es de " + edad + year;
        document.getElementById('ver').innerHTML="¡¡¡ Feliz cumpleaños !!!";
      }
      else {
        document.getElementById('mostrar').innerHTML="La edad es de " + edad + year;
        document.getElementById('ver').innerHTML=" ";
      }
    }
    else {
      if ((yearNacimiento == yearActual) && (mesNacimiento == mesActual) && (diaNacimiento == diaActual)) {
          document.getElementById('mostrar').innerHTML= "¡¡¡ " + nombre + " Nació Ahora !!!";
          document.getElementById('ver').innerHTML="Por lo tanto la edad de " + nombre + " es " + edad + year;
      }
      else if ((yearNacimiento < yearActual) && (mesNacimiento == mesActual) && (diaNacimiento == diaActual)) {
        document.getElementById('mostrar').innerHTML="La edad de " + nombre + " es de " + edad + year;
        document.getElementById('ver').innerHTML="¡¡¡ Feliz cumpleaños " + nombre + " !!!";
      }
      else {
        document.getElementById('mostrar').innerHTML="La edad de " + nombre + " es " + edad + year;
        document.getElementById('ver').innerHTML=" ";
      }
    }
  }
}
function check_text(input) {
if (input.validity.patternMismatch){
    input.setCustomValidity("Ingrese su nombre (no puede contener caracteres especiales)");
}
else {
    input.setCustomValidity("");
}
}
