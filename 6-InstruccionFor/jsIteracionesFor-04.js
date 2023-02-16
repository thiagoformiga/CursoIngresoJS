//al presionar el botón repetir hasta que utilizamos 'BREAK'.
//formigathiago
function mostrar()
{
	let i;
	let ingresaNumeros;

	
	for(i=0;	i < 6;	i++)
	{
		ingresaNumeros=parseInt(prompt("ingresa un numero"));
		console.log(ingresaNumeros);
		if(i == 4)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN