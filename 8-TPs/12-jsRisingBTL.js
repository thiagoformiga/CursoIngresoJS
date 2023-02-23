/*FORMIGATHIAGO
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga 
de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y 
luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	
 	let  edadIngresada;
 	let sexoIngresado;
	let i;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let legajo;
	let Nacionalidad;
	
	
	for(i=0;	i<1;	i++){
		edadIngresada= parseInt(prompt(" ingresa tu edad(entre '18 y 90' años)"));
		while(isNaN(edadIngresada)|| edadIngresada < 18 || edadIngresada > 90)
		{		
			edadIngresada= parseInt(prompt("ERROR, ingresa una edad valida (entre '18 y 90' años)"));	
		}

		sexoIngresado= prompt("ingrese su sexo (“M” para masculino y “F” para femenino)");
		while(sexoIngresado != "M" && sexoIngresado != "F" )
		{
			sexoIngresado= prompt("ERROR, ingrese su sexo (“M” para masculino y “F” para femenino)");
		}
		if(sexoIngresado== "M")
		{
			sexoIngresado= "Masculino";
		}
		else
		{
			sexoIngresado= "Femenino";
		}


		estadoCivilIngresado=parseInt(prompt("cual es tu estado civil? (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"));
		
		while(isNaN(estadoCivilIngresado)|| estadoCivilIngresado < 1 || estadoCivilIngresado > 4 )
		{
		 	estadoCivilIngresado=parseInt(prompt("Erorr, cual es tu estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"));
		}

		if(estadoCivilIngresado== 1)
		{
			estadoCivilIngresado= "soltero";
		}
		else if(estadoCivilIngresado== 2)
		{
			estadoCivilIngresado= "casado"
		}
		else if(estadoCivilIngresado== 3)
		{
			estadoCivilIngresado= "divorciado";
		}
		else
		{
			estadoCivilIngresado= "viudo";
		}
		

		sueldoBruto=parseInt(prompt("cual es tu sueldo bruto? (no debe ser menor a 8000)"));
		while(isNaN(sueldoBruto)||sueldoBruto < 8001)
		{
			sueldoBruto=parseInt(prompt("ERROR, cual es tu sueldo bruto? (no debe ser menor a 8000)"));
		}

		legajo= parseInt(prompt("cual es tu numero de legajo? (recuerda que son 4 digitos sin ceros a la izquierda)"));

		while(isNaN(legajo)|| legajo < 1000)
		{
			legajo= parseInt(prompt("Error, cual es tu numero de legajo? (recuerda que son 4 digitos sin ceros a la izquierda)"));
		}
	
		Nacionalidad=prompt("cual es tu nacionalidad? (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");
		while(Nacionalidad != "A" && Nacionalidad != "E" && Nacionalidad != "N")
		{
			Nacionalidad=prompt("ERROR, cual es tu nacionalidad? (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");
		}
		if(Nacionalidad=="A")
		{
			Nacionalidad= "Es Argentino";
		}
		else if(Nacionalidad=="E")
		{
			Nacionalidad= "Es extranjero";
		}
		else
		{
			Nacionalidad= "Es Nacionalizado";
		}
	
	
	
	
	
	}
	document.getElementById("txtIdEdad").value= "su edad es de " + edadIngresada;
	document.getElementById("txtIdSexo").value= "su sexo es " + sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value= "su estado civil es " + estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value= "su sueldo bruto es de: $" + sueldoBruto;
	document.getElementById("txtIdLegajo").value= "su numero de legajo es: " + legajo;
	document.getElementById("txtIdNacionalidad").value=  Nacionalidad;
 
}





/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

a. Se pedirán un número positivo y se mostrará la cantidad de números pares desde
el número ingresado hasta el cero.
b. Se pedirán un número positivo y se mostrará la cantidad de números impares
desde el número ingresado hasta el cero.
c. Se pedirán un número positivo y se mostrará la cantidad de números divisibles de
este número que se encuentran desde el 1 al 100.
d. Se pedirán un número positivo y se mostrará si el número es un número primo o
no.
e. Se pedirán un número positivo y se mostrará la cantidad de números Primos
desde el número ingresado hasta el cero..
*/
/*
function ComenzarIngreso () 
{
 	let numeroingresado;
    let i;
	let contadorDePares;
	let contadorDeImpares;
	let contadorDeDivisibles;
	let contadorDePrimos;


	contadorDePares= 0;
	contadorDeImpares=0;
	contadorDeDivisibles=0;
	contadorDePrimos=0;

	numeroingresado= parseInt(prompt("ingrese un numero"));
	while(isNaN(numeroingresado) || numeroingresado < 0)
	{
		numeroingresado= prompt("Error, ingresa un numero positivo");
	}
	//a y b
	for(i=numeroingresado;    i > -1;  i--)
	{
		if(i % 2 == 0)
		{
			contadorDePares= contadorDePares + 1;			
		}
		else
		{
			contadorDeImpares= contadorDeImpares + 1;
		}
	}
	//c
	for(i=1;	i<101;	i++)
	{
		if(i % numeroingresado== 0)
		{
			contadorDeDivisibles= contadorDeDivisibles+1;
		}
	}

	
	document.write("la cantidad de numeros pares es de: " + contadorDePares +"<br>");
	document.write("la cantidad de numeros impares es de: " + contadorDeImpares +"<br>");
	document.write("la cantidad de numeros divisibles de este numero del 1 al 100 es de: " + contadorDeDivisibles +"<br>");
	document.write("la cantindad de numeros primos es de: " + contadorDePrimos +"<br>");

}
*/