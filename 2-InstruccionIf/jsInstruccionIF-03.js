//formigathiago
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	let edad;

	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad >=18)
	{
		alert("sos mayor de edad");

	}
	else { 

		alert("sos menor de edad");
	}
	

}//FIN DE LA FUNCIÓN