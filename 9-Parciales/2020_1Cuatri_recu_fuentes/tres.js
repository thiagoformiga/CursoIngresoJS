/*Bienvenidos.
formigatthiago
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	let	nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivil;
	let nacionalidad;
	let temperaturaIngresada;
	let	banderaMasTemperatura;
	let temperaturaMaxima;
	let nacionalidadMasTemperatuta;
	let contadorMujeresSolteraViudas;
	let contadorTerceraEdadYtemperatura;
	let contadorMujeresCasadas;
	let acumuladorEdadMujeresCasadas;
	let promedioDeEdadMujeresCasadas;
	let respuesta;

	respuesta= "si";
	banderaMasTemperatura=true;
	contadorMayoresDeEdadSolteros=0;
	contadorMujeresSolteraViudas=0;
	contadorTerceraEdadYtemperatura=0;
	contadorMujeresCasadas=0;
	acumuladorEdadMujeresCasadas=0;



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
		nacionalidad= prompt("Ingresa tu nacionalidad. (Argentino o Extranjero))");
		while(nacionalidad != "Argentino" && nacionalidad != "Extranjero")
		{
			nacionalidad= prompt("error, Ingresa una nacionalidad valida. (Argentino o Extranjero))");
		}
		

		if(banderaMasTemperatura==true || temperaturaMaxima < temperaturaIngresada)
		{
			temperaturaMaxima= temperaturaIngresada;
			nacionalidadMasTemperatuta= nacionalidad;
			banderaMasTemperatura=false;
		}

		if(edadIngresada > 17 && estadoCivil== "soltero")// otra forma mejor hacer un switch con viudo,solterosycasados con sus contadores,
		{
			contadorMayoresDeEdadSolteros= contadorMayoresDeEdadSolteros + 1;
		}

		if(sexoIngresado=='f')
		{	
			if(estadoCivil=="soltero" || estadoCivil=="viudo")
			{
				contadorMujeresSolteraViudas= contadorMujeresSolteraViudas+1;
			}
		}

		if(edadIngresada>59)
		{
			if(temperaturaIngresada>37)
			{
				contadorTerceraEdadYtemperatura= contadorTerceraEdadYtemperatura + 1;
			}
		}
		
		if(sexoIngresado=='f')
		{
			if(estadoCivil== "casado")
			{
				acumuladorEdadMujeresCasadas= acumuladorEdadMujeresCasadas+ edadIngresada;
				contadorMujeresCasadas= contadorMujeresCasadas+1;
			}
		}

		respuesta= prompt("¿desea ingresar otro dato? 'si'/'no'");


	}
	promedioDeEdadMujeresCasadas= acumuladorEdadMujeresCasadas/ contadorMujeresCasadas;

	document.write("la persona con mas temperatura se llama " + nacionalidadMasTemperatuta +nacionalidadtemperaturaMaxima + " grados <br>");
	document.write("los mayores de edad y solteros son: " + contadorMayoresDeEdadSolteros+ "<br>");
	document.write("las mujeres solteras o viudas son: " + contadorMujeresSolteraViudas+ "<br>");
	document.write("las personas de la tercera edad y con mas de 38 grados son " + contadorTerceraEdadYtemperatura + "<br>" );
	document.write("el promedio de edad de las mujeres casadas es de: " + promedioDeEdadMujeresCasadas +"<br>");

}
