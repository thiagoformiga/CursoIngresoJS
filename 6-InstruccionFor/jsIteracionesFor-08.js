/*formigathiago
al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */
function mostrar()
{
	let numeroIngresado;
	let i;
	let contadorDeDivisores;

	contadorDeDivisores=0;
	numeroIngresado=parseInt(prompt("ingresa un numero"));

	/*for(i=1;	i<=numeroIngresado;	i++)
	{
		if(numeroIngresado % i==0)
		{
			contadorDeDivisores= contadorDeDivisores + 1
			console.log(i);
		}

	}
	if(contadorDeDivisores == 2)
	{
		console.log( numeroIngresado + " es primo");
	}
	else
	{
		console.log(numeroIngresado + " no es primo");
	}*/

	for(i=2;	i<numeroIngresado;	i++)
	{
		if(numeroIngresado% i ==0)
		{
			console.log(numeroIngresado + " es primo")
			break;
		}
	}
}//FIN DE LA FUNCIÓN