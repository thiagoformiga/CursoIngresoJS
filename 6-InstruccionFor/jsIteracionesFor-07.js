/*formigathiago
al presionar el botón pedir un número. mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	let numeroIngresado;
	let i;
	let contadorDeDivisores;

	contadorDeDivisores=0;
	numeroIngresado=parseInt(prompt("ingresa un numero"));

	for(i=1;	i<=numeroIngresado;	i++)
	{
		if(numeroIngresado % i==0)
		{
			contadorDeDivisores= contadorDeDivisores + 1
			console.log(i);
		}

	}

console.log("la cantidad de divisores del numero ingresado es de: "+ contadorDeDivisores);

}//FIN DE LA FUNCIÓN