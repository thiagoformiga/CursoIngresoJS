/*formigathiago
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numDiviendo;
	let numDivisor;
	let mensaje; 
	
	numDiviendo = document.getElementById("txtIdNumeroDividendo").value;
	numDivisor= document.getElementById("txtIdNumeroDivisor").value;

	numDiviendo=parseInt(numDiviendo);
	numDivisor=parseInt(numDivisor);

	mensaje= "el resto es  " + numDiviendo % numDivisor;

	alert(mensaje);
	
}

function SacarResto()

/*Ejercicio 8.bis: Ingresar dos numeros por id Se pide: mostrar por alert: 
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo) */


{
	let numeroUno;
	let numeroDos;
	let suma;
	let mensaje;
	
	numeroUno= document.getElementById("txtIdNumeroDividendo").value;
	numeroDos= document.getElementById("txtIdNumeroDivisor").value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	
	mensaje= "el resultado de la suma es " + suma;

	alert(mensaje);

	promedio= suma / 2

	mensaje = "el promedio es " + promedio

	modulo = numeroUno % numeroDos;

	mensaje= ;



}
