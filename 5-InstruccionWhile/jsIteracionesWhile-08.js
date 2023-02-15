/*formigathiago
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta;
	let contador;
	let multiplicacionNegativos;
	let sumaPositivos;

	multiplicacionNegativos= 1;
	contador= 0;
	sumaPositivos= 0;
	respuesta="si";
		
	while(respuesta == "si" || respuesta == "si" || respuesta =="Si")
	{	
		contador= contador + 1;

		numero= prompt("ingresar un numero");
		numero= parseInt(numero);
		while(isNaN(numero))
		{
			numero= prompt("ERROR, INGRESE UN NUMERO");
			numero= parseInt(numero);
		}

		if(numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else 
		{
			multiplicacionNegativos= multiplicacionNegativos * numero

		}

		respuesta= prompt("¿desea ingresar otro numero? si/no");		
	}


	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN