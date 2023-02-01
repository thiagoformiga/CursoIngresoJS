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
