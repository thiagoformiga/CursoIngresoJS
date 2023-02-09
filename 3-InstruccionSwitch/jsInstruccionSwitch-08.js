/*formigathiago
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	let destinoIngresado;
	
	destinoIngresado= document.getElementById("txtIdDestino").value;
	

	switch(destinoIngresado){
		case	"Bariloche":
			mensaje="en este lugar hace Frio";
			break;

		case	"Cataratas":
			mensaje="en este lugar hace Calor";
			break;

		case	"Mar del plata":
			mensaje="en este lugar hace Calor";
			break;
			
		case	"Ushuaia":
			mensaje="en este lugar hace Frio";
			break;
						
	}

alert(mensaje);
}//FIN DE LA FUNCIÓN