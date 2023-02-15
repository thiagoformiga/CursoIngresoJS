/*formigathiago
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado= prompt("ingrese un numero entre 0 y 9");
	numeroIngresado=parseInt(numeroIngresado);
	


	while( isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 9 ){
		
		numeroIngresado= prompt("Error, ingrese un numero entre 0 y 9");
		numeroIngresado= parseInt(numeroIngresado);	
	}

	document.getElementById("txtIdNumero").value = numeroIngresado
	
}//FIN DE LA FUNCIÓN