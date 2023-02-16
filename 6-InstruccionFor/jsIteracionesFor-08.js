/*formigathiago
al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */
function mostrar()
{
	let numeroIngresado;
	let i;
	let contadorDePrimos;

	contadorDePrimos=0;
	numeroIngresado=parseInt(prompt("ingresa un numero"));

	for(i=0;	i<=numeroIngresado;	i=i+2)
	{		
		contadorDePrimos= contadorDePrimos + 1;
		console.log(i);
	}
	
console.log("la cantidad de numeros primos es de: " + contadorDePrimos)

}//FIN DE LA FUNCIÓN