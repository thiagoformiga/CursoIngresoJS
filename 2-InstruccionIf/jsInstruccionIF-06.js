//formigathiago
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

 function mostrar()
{
	let edad;
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);
	
	if(edad > 17)
	{
		mensaje= "es mayor de edad";
	}else{
		if(edad >= 13 && edad <= 17)
		{
			
			mensaje = "es adolescente";

		}else{ 
			mensaje= "es menor de edad";

		}
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN