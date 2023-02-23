/*formiga thiago
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", 
"casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	
	let	nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivil;
	let temperaturaIngresada;
	let	banderaMasTemperatura;
	let temperaturaMaxima;
	let nombreTemperaturaMaxima;
	let contadorMayoresViudos;
	let contadorHombresSolterosViudos;
	let contadorTerceraEdadYtemperatura;
	let contadorHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let promedioEdadHombresSolteros;
	let respuesta;

	respuesta= "si";
	banderaMasTemperatura=true;
	contadorMayoresViudos=0;
	contadorHombresSolterosViudos=0;
	contadorTerceraEdadYtemperatura=0;
	contadorHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;



	while(respuesta == "si")
	{
		nombreIngresado=prompt("ingresa tu nombre");
		edadIngresada= parseInt(prompt("ingresa tu edad"));
		while(isNaN(edadIngresada)|| edadIngresada < 0 || edadIngresada > 100)
		{
			edadIngresada= parseInt(prompt("error, ingresa una edad valida (con numeros)"));
		}

		sexoIngresado= prompt("ingresa tu sexo ('f'(para femenino)/ 'm' (para masculino) ");
		while(sexoIngresado != 'f' && sexoIngresado != 'm')
		{
			sexoIngresado= prompt("error, ingresa un sexo valido ('f'(para femenino)/ 'm' (para masculino) ");
		}

		estadoCivil= prompt("ingresa tu estado civil (soltero, casado o viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil=prompt("error, ingresa un estado civil valido (soltero, casado o viudo)");
		}
		
		temperaturaIngresada=parseFloat(prompt("ingresa tu temperatura"));
		while(isNaN(temperaturaIngresada) || temperaturaIngresada < 33 || temperaturaIngresada >41 )
		{
			temperaturaIngresada=parseFloat(prompt("error, ingresa una temperatura valida (entre los 35 y 42 grados)"));
		}

		if(banderaMasTemperatura==true || temperaturaMaxima < temperaturaIngresada)
		{
			temperaturaMaxima= temperaturaIngresada;
			nombreTemperaturaMaxima= nombreIngresado;
			banderaMasTemperatura=false;
		}

		if(edadIngresada > 17 && estadoCivil== "viudo")// otra forma mejor hacer un switch con viudo,solterosycasados con sus contadores,
		{
			contadorMayoresViudos= contadorMayoresViudos + 1;
		}

		if(sexoIngresado=='m')
		{	
			if(estadoCivil=="soltero" || estadoCivil=="viudo")
			{
				contadorHombresSolterosViudos= contadorHombresSolterosViudos+1;
			}
		}

		if(edadIngresada>59)
		{
			if(temperaturaIngresada>37)
			{
				contadorTerceraEdadYtemperatura= contadorTerceraEdadYtemperatura + 1;
			}
		}
		
		if(sexoIngresado=='m')
		{
			if(estadoCivil== "soltero")
			{
				acumuladorEdadHombresSolteros= acumuladorEdadHombresSolteros+ edadIngresada;
				contadorHombresSolteros= contadorHombresSolteros+1;
			}
		}

		respuesta= prompt("¿desea ingresar otro dato? 'si'/'no'");


	}
	promedioEdadHombresSolteros= acumuladorEdadHombresSolteros/ contadorHombresSolteros;

	document.write("la persona con mas temperatura se llama " + nombreTemperaturaMaxima + " y tiene " + temperaturaMaxima + " grados <br>");
	document.write("los mayores de edad y viudos son: " + contadorMayoresViudos+ "<br>");
	document.write("los hombres solteros o viudos son: " + contadorHombresSolterosViudos+ "<br>");
	document.write("las personas de la tercera edad y con mas de 38 grados son " + contadorTerceraEdadYtemperatura + "<br>" );
	document.write("el promedio de edad de los hombres solteros es de: " + promedioEdadHombresSolteros +"<br>");
	}
