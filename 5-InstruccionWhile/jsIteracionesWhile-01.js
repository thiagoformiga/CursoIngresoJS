/*FORMIGATHIAGO
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/*function mostrar()
{
	let contador;
	
	contador= 1;

	while(contador < 11)
	{
		console.log(contador);
		contador = contador + 1;
	}
	
}//FIN DE LA */


//While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven

function mostrar()
{

	let edadIngresada;
	let nombre;
	let respuesta;
	let flag;
	let edadMaxima;
	let edadMinima;
	let nombreMayor;
	let nombreMenor;

	respuesta= "si";
	flag= true

	while(respuesta== "si")
	{
		nombre= prompt("cual es tu nombre?");
		edadIngresada= parseInt(prompt("¿cual es tu edad?"));

		while( isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 105)
		{
			edadIngresada= prompt("Error, ingrese una edad valida");
			edadIngresada= parseInt(edadIngresada);	
		}

		if(flag==true)
		{
			edadMaxima=edadIngresada;
			edadMinima=edadIngresada;
			flag= false;
		}
		else if(edadMaxima< edadIngresada)
		{
			nombreMayor = nombre; 
			edadMaxima= edadIngresada;

		}
		if(edadMaxima > edadIngresada)
		{
			nombreMenor = nombre
			edadMinima = edadIngresada;
		}



		respuesta= prompt("desea ingresar otro dato? (si/no)");

	}

	document.write("la persona de mayor edad es " + nombreMayor + " y tiene " + edadMaxima+ " años"+"<br>");
	document.write("la persona de menor edad es " + nombreMenor + " y tiene " +edadMinima+ " años"+"<br>");
}