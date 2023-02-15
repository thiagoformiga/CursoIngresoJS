/*formigathiago
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado= document.getElementById("txtIdDestino").value;
	

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este lugar hace Frio";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje="En este lugar hace Calor";
			break;

		
	}

alert(mensaje);
}//FIN DE LA FUNCIÓN