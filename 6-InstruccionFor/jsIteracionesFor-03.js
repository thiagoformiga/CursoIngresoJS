//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
//formigathiago
function mostrar()
{
	let repeticiones;
	
	repeticiones= parseInt(prompt("ingresa numero de repeticiones"));

	for(i=0;	i< repeticiones;  i++)
	{
		document.write("hola utn fra" +"<br>");
	}
	

}//FIN DE LA FUNCIÓN