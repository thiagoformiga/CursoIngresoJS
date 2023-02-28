/*Bienvenidos.
formigatthiago
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
/*function mostrar()
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

}*/
//Recu 2020 3 bis: 
/*Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.
*/

function mostrar()
{
	let nombeDelPasajeroTitular;
	let respuesta;
	let destinoIngresado;
	let temporada;
	let cantitdadDePasajerosQueViajan;
	let banderaDestinoMasElegido;
	let cantidadDestinoMasElegido;
	let nombreDestinoMasElegido;
	let banderaNombrePasajeroTitularConMenosPasajeros;
	let cantidadDelTitularConMenosPasajeros;
	let nombrePasajeroTitularConMenosPasajeros;
	let acumuladorDePersonasqueViajanEnAlta;
	let promedioDePersonasqueViajanEnAlta;
	let acumuladorDePersonasQueViajan;
	let acumuladorDePersonasEuropa;
	
	banderaDestinoMasElegido=true;
	banderaNombrePasajeroTitularConMenosPasajeros=true;
	acumuladorDePersonasqueViajanEnAlta = 0;
	acumuladorDePersonasQueViajan=0;
	acumuladorDePersonasEuropa= 0;
	respuesta="si";

	while(respuesta=="si")
	{
		nombeDelPasajeroTitular=prompt("ingresa el nombre del pasajero titular");
		destinoIngresado=prompt("ingresa el destino (“Brasil”, “Caribe” o “Europa”)");
		while(destinoIngresado!= "Brasil" && destinoIngresado!="Caribe" && destinoIngresado!= "Europa")
		{
			destinoIngresado=prompt("erro, ingresa el destino valido (“Brasil”, “Caribe” o “Europa”)");
		}
		temporada=prompt("ingresa la temporada (“alta”,”baja”,“media”)");
		while(temporada!= "alta" && temporada!="baja" && temporada!= "media")
		{
			temporada=prompt("ingresa la temporada (“alta”,”baja”,“media”)");		
		}
		cantitdadDePasajerosQueViajan= parseInt(prompt("ingresa la cantidad de pasajeros (no puede ser mayor a 220 personas)"));
		while(isNaN(cantitdadDePasajerosQueViajan)|| cantitdadDePasajerosQueViajan < 1 || cantitdadDePasajerosQueViajan > 250)
		{
			cantitdadDePasajerosQueViajan= parseInt(prompt("error, ingresa la cantidad de pasajeros valida (no puede ser mayor a 220 personas)"));
		}
		acumuladorDePersonasQueViajan= acumuladorDePersonasQueViajan + cantitdadDePasajerosQueViajan;
		
		if(banderaDestinoMasElegido==true || cantidadDestinoMasElegido < cantitdadDePasajerosQueViajan )
		{
			cantidadDestinoMasElegido= cantitdadDePasajerosQueViajan;
			nombreDestinoMasElegido= destinoIngresado;
			banderaDestinoMasElegido=false;
		}
		if(banderaNombrePasajeroTitularConMenosPasajeros==true || cantidadDelTitularConMenosPasajeros > cantitdadDePasajerosQueViajan)
		{
			cantidadDelTitularConMenosPasajeros= cantitdadDePasajerosQueViajan;
			nombrePasajeroTitularConMenosPasajeros = nombeDelPasajeroTitular;
			banderaNombrePasajeroTitularConMenosPasajeros= true;
		}
		
		switch(temporada)
		{
			case "alta":
				acumuladorDePersonasqueViajanEnAlta= acumuladorDePersonasqueViajanEnAlta + cantitdadDePasajerosQueViajan
				break;
		} 
		if(destinoIngresado== "Europa")
		{
			acumuladorDePersonasEuropa= acumuladorDePersonasEuropa+ cantitdadDePasajerosQueViajan;
		}

		respuesta=prompt("¿Desea realizar otro ingreso? 'si'/ 'no'");

	}/// fin del while

	promedioDePersonasqueViajanEnAlta= acumuladorDePersonasqueViajanEnAlta/ acumuladorDePersonasQueViajan *100;

	document.write("El destino más elegido es "+ nombreDestinoMasElegido+"<br>");
	document.write("El nombre del pasajero titular que lleva menos pasajeros es "+nombrePasajeroTitularConMenosPasajeros+"<br>");
	document.write("El promedio de personas, que viajan en temporada alta "+ promedioDePersonasqueViajanEnAlta +"% <br>");
	document.write("El total de personas que viajaron a Europa es de: "+acumuladorDePersonasEuropa+"<br>");
}

