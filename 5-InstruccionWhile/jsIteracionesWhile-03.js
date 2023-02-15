/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	

	while(claveIngresada !="utn750" && claveIngresada != "UTN750" && claveIngresada != "Utn750"){
		
		claveIngresada= prompt("clave incorrecta, ingresar la clave indicada.");

	}

	alert("clave correcta, bienvenido");


	
}//FIN DE LA FUNCIÓN
