//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
//formigathiago
/*function mostrar()
{
	
	let numeroIngresado;
	
	for(;	;)
	{
		numeroIngresado=parseInt(prompt("ingresa un numero"));
		console.log(numeroIngresado);
		if(numeroIngresado==9)
		{
			break;
		}
	}

	alert("usted ingreso el numero 9");



}//FIN DE LA FUNCIÓN*/

/*For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)
formigathiago*/
function mostrar()
{
	
	let contadorDeAlumnos;
	let notaIngresada;
	let sexoIngresado;
	let i;
	let contadorNotasTotales;
	let promedioNotasTotales;
	let banderaNotaMasBaja;
	let notaMasBaja;
	let sexoNotaBaja;
	let acumuladorDeNotas;
	let contadorNotasVarones;
	let contadorDeDesaprobados;


	contadorDeAlumnos=7;
	contadorNotasTotales=0;
	acumuladorDeNotas=0;
	banderaNotaMasBaja=true;
	contadorNotasVarones=0;
	contadorDeDesaprobados=0;

	for(i=0;	i<contadorDeAlumnos;	i++)
	{
		notaIngresada=parseInt(prompt("Cual es tu nota?"));

		while(isNaN(notaIngresada)|| notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada=parseInt(prompt("error; ¿Cual es tu nota? (su valor debes ser entre 0 y 10)"));
		}
		sexoIngresado = prompt("ingrese su sexo 'f' para femenino,'m' para masculino y 'b' para no binario.");

		while(sexoIngresado != 'b' && sexoIngresado != 'm' && sexoIngresado != 'f'){
		sexoIngresado = prompt("ERROR, ingrese su sexo'f' para femenino,'m' para masculino y'b' para no binario.");
		}

		if(banderaNotaMasBaja==true)
		{
			notaMasBaja= notaIngresada;
			sexoNotaBaja= sexoIngresado

			banderaNotaMasBaja=false;
		}else if(notaMasBaja > notaIngresada)
		{
			notaMasBaja= notaIngresada;
			sexoNotaBaja= sexoIngresado;
		}
		
		if( notaIngresada > 5)
		{
			if(sexoIngresado=='m')
			{
				contadorNotasVarones= contadorNotasVarones + 1;
			}
		}else
		{
			contadorDeDesaprobados= contadorDeDesaprobados + 1;
		}
		
		acumuladorDeNotas= acumuladorDeNotas + notaIngresada;
		contadorNotasTotales= contadorNotasTotales + 1;


	}
	
	promedioNotasTotales= acumuladorDeNotas/ contadorNotasTotales;


	document.write("el promedio de las notas totales es de: "+ promedioNotasTotales+"<br>");
	document.write("La nota más baja es: "+ notaMasBaja +" y el sexo de esa persona es: "+ sexoNotaBaja+"<br>");
	document.write("La cantidad de varones que su nota haya sido mayor o igual a 6 es de : " + contadorNotasVarones+ "<br>" );
	document.write("la cantidad de alumnos desaprobados es de: " + contadorDeDesaprobados + "<br>");

}
