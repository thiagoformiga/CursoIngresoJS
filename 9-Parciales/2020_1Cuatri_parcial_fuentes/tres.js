/*formiga thiago
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", 
"casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
/*function mostrar()
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
	}*/


/*Parcial 2020 3 bis:  "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d )la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/ 
function mostrar()
{
	let paisIngresado;
	let continenteIngresado;
	let cantidadDeHabitantesIgresada;
	let nivelDePobrezaIngresada;
	let temperaturaIngresada;
	let contadorTemperaturasPares;
	let contadorDeTemperaturasImpares;
	let contadorTemperaturasaImparesEuropa;
	let banderaNombrePaisMenosHabitantes;
	let nombrePaisMenosHabitantes;
	let cantidadNombrePaisMenosHabitantes;
	let contadorPaisesMasCuarentaGrados;
	let contadorDePaisesAmericanosConMenosDeCeroGrados;
	let acumuladorDeHabitantes;
	let contadorDeHabitantes;
	let promedioDeHabitantes;
	let contadorDeHabitantesPaisesQueSuperanLosCuarentaGrados;
	let acumuladorDeHabitantesPaisesQueSuperanLosCuarentaGrados;
	let promedioDeHabitantesPaisesQueSuperanLosCuarentaGrados;
	let banderaTemperaturaMinima;
	let paisTemperaturaMinima;
	let temperaturaMinima;
	let acumuladorHabitantesEuropa;
	let acumuladorHabitantesAmerica;
	let acumuladorHabitantesAsia;
	let acumuladorHabitantesAfrica;
	let acumuladorHabitantesOceania;
	let continenteConMasHabitantes;

	contadorTemperaturasPares=0;
	contadorDeTemperaturasImpares=0;
	contadorTemperaturasaImparesEuropa=0;
	banderaNombrePaisMenosHabitantes= true;
	contadorPaisesMasCuarentaGrados=0;
	contadorDePaisesAmericanosConMenosDeCeroGrados=0;
	acumuladorDeHabitantes=0;
	contadorDeHabitantes=0;
	acumuladorDeHabitantesPaisesQueSuperanLosCuarentaGrados=0;
	contadorDeHabitantesPaisesQueSuperanLosCuarentaGrados=0;
	acumuladorHabitantesEuropa=0;
	acumuladorHabitantesAmerica=0;
	acumuladorHabitantesAsia=0;
	acumuladorHabitantesAfrica=0;
 	acumuladorHabitantesOceania=0;
	banderaTemperaturaMinima= true;


	for(let i=0;  i < 5;  i++ )
	{	
		paisIngresado= prompt("ingresa un pais");
		continenteIngresado= prompt("indica a que continente pertenece (America , Asia , Europa ,Africa y Oceania)");
		while(continenteIngresado!= "America" && continenteIngresado!=  "Asia" && continenteIngresado!= "Europa" && continenteIngresado!= "Africa" && continenteIngresado!="Oceania")
		{
			continenteIngresado= prompt("ERROR, indica un continente valido (America , Asia , Europa ,Africa y Oceania)");
		}
		cantidadDeHabitantesIgresada= parseInt(prompt("indica la cantidad de habitantes(entre 1 millon y 7000 millones)"));
		while(isNaN(cantidadDeHabitantesIgresada)|| cantidadDeHabitantesIgresada < 1 || cantidadDeHabitantesIgresada > 7000)
		{
			cantidadDeHabitantesIgresada= parseInt(prompt("error, indica la cantidad de habitantes valida (entre 1 millon y 7000 millones)"));
		}
		acumuladorDeHabitantes= acumuladorDeHabitantes+cantidadDeHabitantesIgresada;
		contadorDeHabitantes=contadorDeHabitantes+1;

		nivelDePobrezaIngresada= prompt("ingresa el nivel economico entre (pobre, rico, millonario)");
		while(continenteIngresado== "Europa" && nivelDePobrezaIngresada == "pobre")
		{
			nivelDePobrezaIngresada= prompt("error, no hay paises pobres en Europa (rico o millonario)");
		}
		while(nivelDePobrezaIngresada!= "pobre" && nivelDePobrezaIngresada!= "rico" && nivelDePobrezaIngresada!= "millonario")
		{
			
			nivelDePobrezaIngresada= prompt("error, ingresa el nivel economico valido (pobre, rico, millonario)");
		}
		temperaturaIngresada= parseFloat(prompt("ingresa la temperatura del pais(entre -50 y 50)"));
		while(isNaN(temperaturaIngresada)||temperaturaIngresada <-50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada= parseFloat(prompt("error, ingresa una temperatura valida(entre -50 y 50)"));
		}
		//a
		if(temperaturaIngresada % 2 == 0)
		{
			contadorTemperaturasPares= contadorTemperaturasPares + 1;				
		}
		else
		{
			contadorDeTemperaturasImpares= contadorDeTemperaturasImpares+1;
			if(continenteIngresado== "Europa")//b		
			{
				contadorTemperaturasaImparesEuropa= contadorTemperaturasaImparesEuropa+1;
			}
		}
		//c
		if(banderaNombrePaisMenosHabitantes==true || cantidadNombrePaisMenosHabitantes > cantidadDeHabitantesIgresada)
		{
			nombrePaisMenosHabitantes= paisIngresado;
			cantidadNombrePaisMenosHabitantes= cantidadDeHabitantesIgresada;
			banderaNombrePaisMenosHabitantes=false;
		}
		//d
		if(temperaturaIngresada > 40)
		{
			contadorPaisesMasCuarentaGrados= contadorPaisesMasCuarentaGrados+1;
			acumuladorDeHabitantesPaisesQueSuperanLosCuarentaGrados= acumuladorDeHabitantesPaisesQueSuperanLosCuarentaGrados+ cantidadDeHabitantesIgresada;
			contadorDeHabitantesPaisesQueSuperanLosCuarentaGrados= contadorDeHabitantesPaisesQueSuperanLosCuarentaGrados+1;
		}
		else if(temperaturaIngresada < 1 && continenteIngresado== "America")//e
		{
			contadorDePaisesAmericanosConMenosDeCeroGrados= contadorDePaisesAmericanosConMenosDeCeroGrados+1;
		}
		//i
		if( banderaTemperaturaMinima==true || temperaturaMinima > temperaturaIngresada)
		{
			paisTemperaturaMinima= paisIngresado;
			temperaturaMinima= temperaturaIngresada;
			banderaTemperaturaMinima=false;
		}

		switch(continenteIngresado)//i
		{
			case "Europa":
				acumuladorHabitantesEuropa= acumuladorHabitantesEuropa + cantidadDeHabitantesIgresada;
				break;
			case "America":
				acumuladorHabitantesAmerica =acumuladorHabitantesAmerica + cantidadDeHabitantesIgresada; 
				break;
		    case "Asia":
				acumuladorHabitantesAsia= acumuladorHabitantesAsia+ cantidadDeHabitantesIgresada;
				break;
			case "Africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadDeHabitantesIgresada;
				break;
			case "Oceania":
				acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadDeHabitantesIgresada;
				break;
		}
		if(acumuladorHabitantesEuropa >acumuladorHabitantesAmerica && acumuladorHabitantesEuropa > acumuladorHabitantesAsia && acumuladorHabitantesEuropa>acumuladorHabitantesAfrica && acumuladorHabitantesEuropa > acumuladorHabitantesOceania)
		{
			continenteConMasHabitantes= " es Europa";
		}
		else if(acumuladorHabitantesAmerica>acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceania && acumuladorHabitantesAmerica>= acumuladorHabitantesEuropa)
		{
			continenteConMasHabitantes= " es America";
		}
		else if(acumuladorHabitantesAsia>acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesAfrica && acumuladorHabitantesAsia > acumuladorHabitantesOceania && acumuladorHabitantesAsia>= acumuladorHabitantesAmerica)
		{
			continenteConMasHabitantes= " es Asia";
		}
		else if(acumuladorHabitantesAfrica>acumuladorHabitantesEuropa && acumuladorHabitantesAfrica > acumuladorHabitantesAmerica && acumuladorHabitantesAfrica > acumuladorHabitantesOceania && acumuladorHabitantesAfrica>= acumuladorHabitantesAsia)
		{
			continenteConMasHabitantes = " es Africa";
		}
		else
		{
			continenteConMasHabitantes= " es Oceania";
		}
		
	}
	promedioDeHabitantes= acumuladorDeHabitantes/ contadorDeHabitantes;//f
	promedioDeHabitantesPaisesQueSuperanLosCuarentaGrados= acumuladorDeHabitantesPaisesQueSuperanLosCuarentaGrados/ contadorDeHabitantesPaisesQueSuperanLosCuarentaGrados;//g

	document.write("La cantidad de temperaturas pares es de: "+contadorTemperaturasPares+"<br>");
	document.write("la cantidad de temperaturas impares de europa es de: "+contadorTemperaturasaImparesEuropa+"<br>");
	document.write("El nombre del pais con menos habitanteses: "+ nombrePaisMenosHabitantes+"<br>");
	document.write("la cantidad de paises que superan los 40 grados son: "+ contadorPaisesMasCuarentaGrados+"<br>");
	document.write("la cantidad de paises de america que tienen menos de 0 grados es de: "+contadorDePaisesAmericanosConMenosDeCeroGrados+"<br>");
	document.write("el promedio de habitantes entre los paises ingresados: "+promedioDeHabitantes+"millones de habitantes"+"<br>");
	document.write("el promedio de habitantes entre los paises que superan los 40 grados es de: "+promedioDeHabitantesPaisesQueSuperanLosCuarentaGrados+"millones de habitantes"+"<br>");
	document.write("la temperatura mínima ingresada es: "+temperaturaMinima+" y el nombre del pais que registro es "+paisTemperaturaMinima+"<br>");
	document.write("el continente tiene mas habitantes es " + continenteConMasHabitantes+"<br>");
}

