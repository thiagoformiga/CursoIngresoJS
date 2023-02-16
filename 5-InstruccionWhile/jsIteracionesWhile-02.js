/*FORMIATHIAGO
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/*function mostrar()
{
	let i;

	i= 10;

	while(i > 0 )
	{
		console.log(i);
		i= i - 1;
	}
		
	
}FIN DE LA FUNCIÓN*/

//while 2 bis: Ingresar 5 números, y determinar la cantidad de 
//números que son mayores que 10 y menores 20 (inclusive en ambos casos)
//formigathiago
/*function mostrar()
{
	let numeroIngresado;
	let contador;
	let contadorDeMayores;
	

	contador=0
	contadorDeMayores= 0;

	while(contador< 5)
	{
		numeroIngresado= prompt("ingresa un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("error, ingresa un numero valido");
			numeroIngresado= parseInt(numeroIngresado);
		}
		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadorDeMayores= contadorDeMayores + 1;	
		}

		contador= contador + 1; 
	}

	alert("la cantidad de numeros que se encuentran entre 10 y 20 (incluidos) es de: " + contadorDeMayores);
}*/


/*While 2 bis bis: Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son 
mayores que 10 y menores 20 
(inclusive en ambos casos). También el promedio de los números que cumplen la condición anterior. */
//formigathiago
function mostrar()
{
	let numeroIngresado;
	let contadorDeMayores;
	let sumaDeMayores;
	let respuesta;
	let promedio;

	contadorDeMayores= 0;
	sumaDeMayores= 0;
	respuesta= "si";

	while(respuesta== "si")
	{
		numeroIngresado= prompt("ingresa un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("error, ingresa un numero valido");
			numeroIngresado= parseInt(numeroIngresado);
		}
		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			sumaDeMayores= sumaDeMayores + numeroIngresado;
			contadorDeMayores= contadorDeMayores + 1;	
		}
		respuesta= prompt("desea continuar? 'si/no' ");
	}
	promedio= sumaDeMayores/ contadorDeMayores;

	document.write("la cantidad de numeros que se encuentran entre 10 y 20 (incluidos) es de: " + contadorDeMayores + "<br>");
	document.write("el promedio de los numeros que se encuentran entre 10 y 20 (incluidos) es de: " + promedio + "<br>");

}