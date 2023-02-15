/*formigathiago
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let contador
	let acumulador;
	let respuesta;
	let promedio;

	contador=0;
	acumulador=0;
	respuesta="si";
			
	while(respuesta == "si" || respuesta == "SI" || respuesta =="Si")
	{
		numero= prompt("ingresar un numero");
		numero= parseInt(numero);
		while(isNaN(numero))
		{
			numero= prompt("ERROR, INGRESE UN NUMERO");
			numero= parseInt(numero);
		}

		acumulador= acumulador + numero;
		contador= contador + 1;
		respuesta= prompt("¿desea ingresar otro numero? si/no");		 	
	}

	promedio= acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN