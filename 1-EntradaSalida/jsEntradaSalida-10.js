/*
thiago formiga
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldoUno;
	let descuento;
	let nuevoSueldo;
	let sueldoDos;
	let porcentaje;


	porcentaje= 25;
	
	// para calcular el sueldo le sumo el porcenaje al sueldo original
	
	sueldoUno = document.getElementById("txtIdImporte").value;
	
	sueldoDos = parseInt (sueldoUno);

	descuento = (sueldoDos * porcentaje / 100);

	nuevoSueldo = (sueldoDos - descuento);
	
	 document.getElementById("txtIdResultado").value=nuevoSueldo;
}



/*Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO" */
function mostrarAumento()
{
	let importe;
	let descuento;
	let calculo;
	let resultado;

	importe= document.getElementById("txtIdImporte").value;
	importe= parseInt(importe);
	
	descuento= prompt("ingresar descuento");
	
	calculo= importe * descuento / 100;
	
	resultado= importe - calculo;

	document.getElementById("txtIdResultado").value =resultado;

}
