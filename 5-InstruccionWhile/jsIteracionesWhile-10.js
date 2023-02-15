/*formigathiago
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let ContadorPositivos;
	let contadorNegativos;
	let ContadorCeros;
	let contadorNumerosPares;
	let promedioPositivos;
	let PromedioNegativos;
	let Diferencia;
	let respuesta;

	ContadorPositivos= 0;
	contadorNegativos= 0; 
	sumaNegativos= 0;
	sumaPositivos=0
	ContadorCeros= 0;
	contadorNumerosPares= 0;
	respuesta= "si";

	while(respuesta == "si")
	{
		numeroIngresado= prompt("ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{	
			numeroIngresado= prompt("Error, ingrese un numero");
			numeroIngresado= parseInt(numeroIngresado);	
		}
		
		if(numeroIngresado < 0){
				//ej1y4
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos= contadorNegativos + 1;
		}else if(numeroIngresado > 0){
				//ej2y3
			sumaPositivos = sumaPositivos + numeroIngresado;
			ContadorPositivos= ContadorPositivos + 1;
		}else{	
			//5	
			ContadorCeros= ContadorCeros + 1;
		}

		if(numeroIngresado % 2 == 0 ){
			//6
			contadorNumerosPares= contadorNumerosPares + 1;
		}

		respuesta= prompt("¿desea continuar? 'si/no' " );
	}

		//7,8y9
	promedioPositivos= sumaPositivos / ContadorPositivos;
	PromedioNegativos= sumaNegativos/ contadorNegativos;
	Diferencia= sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es de: "+ sumaNegativos +"<br>");
	document.write("la suma de positivos es de: "+ sumaPositivos +"<br>");
	document.write("la cantidad de positivos es de: "+ ContadorPositivos +"<br>");
	document.write("la cantidad de negativos es de: "+ contadorNegativos +"<br>");
	document.write("la cantidad de ceros es de: "+ ContadorCeros +"<br>");
	document.write("la cantidad de numeros pares es de: "+contadorNumerosPares+"<br>");
	document.write("el promedio de numeros positivos es de: "+ promedioPositivos + "<br>");
	document.write("el promedio de numeros negativos es de: "+ PromedioNegativos +"<br>");
	document.write("la diferencia entre positivos y negativos es de: "+Diferencia +"<br>");
	

	

	
}//FIN DE LA FUNCIÓN