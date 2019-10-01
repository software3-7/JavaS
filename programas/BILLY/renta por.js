function descuentoRenta() {

var txt, descuento;
txt = document.getElementById('renta').value
if (txt >=1) {
	if (txt <= 40000)
		descuento = txt * 0.1;
	else if ((txt > 90000) && (txt < 150000) )
		descuento = txt * 0.05;
		else
			descuento = txt * 0.04;

document.getElementById('mostrar').innerHTML = "El descuento de su renta es de: " + descuento;
}
else {
	document.getElementById('mostrar').innerHTML = "Ingrese una cantidad valida";
}

}
