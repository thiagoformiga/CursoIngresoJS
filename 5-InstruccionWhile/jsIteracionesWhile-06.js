/*formigathiago
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/ 
/*function mostrar()
{
	let numeroingresado;
	let acumulador;
	let contador;
	let promedio;
	let i;
	
	i=0; 
	acumulador = 0;
	contador= 0;
		

	while(i < 5 ){
		
		i= i + 1;//variable contador
		numeroingresado= parseInt(prompt("ingresa un numero"));
		while(isNaN(numeroingresado))
		{
			numeroingresado= prompt("ERROR, INGRESE UN NUMERO");
			numeroingresado= parseInt(numeroingresado);
		}


		contador= contador + 1
		acumulador = acumulador + numeroingresado;	
	}

	promedio= acumulador/contador;
	
	
	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value = promedio;*/

//}//FIN DE LA FUNCIÓN

//formigathiago
// ejercicio 6 con for
function mostrar()
{
	let numeroingresado
	let acumulador
	let contador;
	let promedio;
	let i;
	
	i=0;
	contador=0;
	acumulador=0;

	for(let i = 0;		i<5;		i++)
	{
		numeroingresado= prompt("ingrese un numero")
		numeroingresado= parseInt(numeroingresado);
		while(isNaN(numeroingresado))
		{
			numeroingresado= prompt("ERROR, INGRESE UN NUMERO");
			numeroingresado= parseInt(numeroingresado);

		}

		contador= contador + 1
		acumulador = acumulador + numeroingresado;	
	}

	promedio= acumulador/contador;
	
	
	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}