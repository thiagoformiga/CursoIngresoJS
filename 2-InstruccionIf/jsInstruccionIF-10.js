/*formigathiago
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	let numero;
	let mensaje;
	let max;
	let min;

	max = 10;
	min = 1;
	

	numero= Math.floor(Math.random()*max + min);

	if(numero >= 9)
	{
		mensaje="EXCELENTE nota: " + numero;
	}else{
		if(numero >= 4)
		{
			
			mensaje="APROBÓ nota: " + numero;

		}else{ 
			mensaje="Vamos, la proxima se puede nota: " + numero;
		}
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN