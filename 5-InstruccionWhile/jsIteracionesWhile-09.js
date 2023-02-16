/*
formigathiago
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	banderaDelPrimero= true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado= prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while( isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("Error, ingrese un numero");
			numeroIngresado= parseInt(numeroIngresado);	
		}
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado
		}
		else if(numeroMaximo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado
		}
		
		respuesta=prompt("desea continuar? si/no");
	}

	document.getElementById("txtIdMaximo").value= numeroMaximo;
	document.getElementById("txtIdMinimo").value= numeroMinimo;
}//FIN DE LA FUNCIÓN*/


/*While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)*/
//formigathiago
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let flag;
	let minimoPar;
	let maximoNegativo;
	let banderaDelPrimeroPar;
	let banderaDelPrimeroNegativo;

	contadorNumerosPares= 0;
	contadorNegativos= 0;
	banderaDelPrimeroNegativo=true;
	banderaDelPrimeroPar=true;
	respuesta= "si";
	flag= true;

	while(respuesta == "si")
	{
		numeroIngresado= prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while( isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("Error, ingrese un numero");
			numeroIngresado= parseInt(numeroIngresado);	
		}
		if(flag == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			flag = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado
		}
		else if(numeroMaximo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado
		}

		if(numeroIngresado % 2 == 0 ) 
		{
			if(banderaDelPrimeroPar == true || numeroIngresado < minimoPar)
			minimoPar = numeroIngresado
			banderaDelPrimeroPar= false
		}
		if(numeroIngresado < 0 )
		{
			if(banderaDelPrimeroNegativo== true || numeroIngresado > maximoNegativo)
			{
				maximoNegativo= numeroIngresado;
				banderaDelPrimeroNegativo= false;
			}
		}

		respuesta= prompt("desea continuar? si/no");
	}


	document.write("el numero maximo es: " + numeroMaximo+"<br>");
	document.write("el numero minimo es: " + numeroMinimo + "<br>");
	document.write("El menor de los pares" + minimoPar + "<br>" );
	document.write("El mayor de los negativos"+ maximoNegativo + "<br>");
}