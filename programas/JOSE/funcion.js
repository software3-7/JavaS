function rectangulo() {
var Base, Altura, Area, Perimetro;
Base = document.getElementById('base').value

Altura = document.getElementById('altura').value

Area = Base*Altura
Perimetro = (2*Altura)+(2*Base);

document.getElementById('mostrar').innerHTML = "El area del rectangulo es : " + Area;
document.getElementById('ver').innerHTML = "El area del rectangulo es : " + Perimetro;

}
