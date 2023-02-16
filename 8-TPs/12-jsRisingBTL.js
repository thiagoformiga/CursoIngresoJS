/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga 
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
 	//definicion de variables
 	let  edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let mensaje
	
	
	edadIngresada= 0;

	
	sexoIngresado= prompt("ingrese su sexo (“m” para masculino y “f” para femenino)");

	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{		
		edadIngresada= parseInt(prompt("ERROR, ingresa una edad valida (entre '18 y 90' años)"));
		
		if(sexoIngresado == "m" || sexoIngresado == "f")
		{
			mensaje= "su sexo es " + sexoIngresado;

		}else
		{
			mensaje= "Error"
			sexoIngresado= prompt("ingrese su sexo (“m” para masculino y “f” para femenino)");
		}
		
	}

	document.getElementById("txtIdEdad").value=edadIngresada;
	document.getElementById("txtIdSexo").value=mensaje
 
}
