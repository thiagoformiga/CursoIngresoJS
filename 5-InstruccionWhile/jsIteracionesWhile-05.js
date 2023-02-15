/*formigathiago
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("ingrese su sexo 'f' para femenino,'m' para masculino.");

	while(sexoIngresado != 'f' && sexoIngresado != 'F' && sexoIngresado != 'm' && sexoIngresado != 'M'){
		sexoIngresado = prompt("ERROR, ingrese su sexo'f' para femenino,'m' para masculino.");

	}

	mensaje= "su sexo es " + sexoIngresado;

	document.getElementById("txtIdSexo").value = mensaje;
	

	


	
}//FIN DE LA FUNCIÓN