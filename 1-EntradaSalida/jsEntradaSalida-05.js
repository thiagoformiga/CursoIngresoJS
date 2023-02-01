/*
thiagoformiga
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// id nombre txtIdNombre
	//id edad txtIdEdad
	let nombreingresado;
	let edadingresada;
	let mensaje;
	
	nombreingresado = document.getElementById("txtIdNombre").value;
	edadingresada = document .getElementById("txtIdEdad").value;
	mensaje= "te llamas "+ nombreingresado+ " y tenes "+ edadingresada+ " años ";

	alert(mensaje);
}

