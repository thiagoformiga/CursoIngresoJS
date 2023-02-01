/*
thiagoformiga
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numUno;
	let numDos;
	let mensaje;
	
	numUno= document.getElementById("txtIdNumeroUno").value;
	numDos= document.getElementById("txtIdNumeroDos").value;
	
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	mensaje = "el resultado de su suma es "+ (numUno + numDos);

	alert(mensaje);	
}

function restar()
{   
	let numUno;
	let numDos;
	let mensaje;
	
	numUno= document.getElementById("txtIdNumeroUno").value;
	numDos= document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	mensaje = "el resultado de su resta es " + (numUno - numDos)

	alert(mensaje)

}

function multiplicar()
{ 
	let numUno;
	let numDos;
	let mensaje;
	
	numUno= document.getElementById("txtIdNumeroUno").value;
	numDos= document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	mensaje = "el resultado de su multiplicación es " + numUno * numDos

	alert(mensaje)
}

function dividir()
{
	let numUno;
	let numDos;
	let mensaje;
	
	numUno= document.getElementById("txtIdNumeroUno").value;
	numDos= document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	mensaje = "el resultado de su división es " + numUno / numDos

	alert(mensaje)
	
}

