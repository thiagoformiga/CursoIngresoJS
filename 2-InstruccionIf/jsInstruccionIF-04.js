//formigathiago
//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{ 
	let edad;

	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{
		alert("sos adolescente");

	}

	//    v              f
	/*if(!(edad < 13 || edad > 17))//11
	{
		alert("Es adolescente");
	}*/
	//lo mismo 
}
//FIN DE LA FUNCIÓN