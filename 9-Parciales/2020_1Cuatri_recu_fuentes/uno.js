/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
formigathiago
 */
/*
function mostrar()
{
	

	let productos;
	let precio;
	let cantidadUnidades;
	let Marca;
	let fabricante;
	let i;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let	cantidadJabonMasCaro;
	let precioJabonMasCaro;
	let fabricantJabonMasCaro;
	let banderaJabonMasCaro;
	let mayorProductos;
	let promedio;
	
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	banderaJabonMasCaro=true;

	for(i=0;	i<5;	i++)
	{
		productos= prompt("ingresa el nombre del producto(barbijo , jabón o alcohol)");
		while(productos != "barbijo" && productos != "jabón" && productos!= "alcohol")
		{
			productos= prompt("error, ingresa el nombre del producto valido (barbijo , jabón o alcohol)");
		}

		precio= parseFloat(prompt("ingresa el precio"));
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio= parseFloat(prompt("error, ingresa el precio correcto(entre 100 y 300)"));
		}

		cantidadUnidades= parseInt(prompt("ingresa cantidad de unidades (entre 1 y 1000)"));
		while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades= parseInt(prompt("error, ingresa una  cantidad de unidades valida(entre 1 y 1000)"));
		}
		Marca= prompt("ingresa una marca");
		fabricante= prompt("ingrese un fabricante");
		
		switch(productos){
			case"alcohol":
				acumuladorAlcohol= acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol= contadorAlcohol+ 1;	
				break;
			case"barbijo":
				acumuladorBarbijo= acumuladorBarbijo + cantidadUnidades;
				contadorBarbijo= contadorBarbijo+1;
				break;
			case"jabón":
			if(banderaJabonMasCaro== true || precioJabonMasCaro > precio )
				{
					precioJabonMasCaro= precio;
					cantidadJabonMasCaro= cantidadUnidades;
					fabricantJabonMasCaro= fabricante;
					banderaJabonMasCaro= false;
				}
				acumuladorJabon= acumuladorJabon+ cantidadUnidades;
				contadorJabon= contadorJabon+1;
				break;
		}
	}//final del for

	if(acumuladorAlcohol > acumuladorBarbijo)
	{
		mayorProductos= "alcohol";
		promedio= acumuladorAlcohol/ contadorAlcohol;
	}
	else if(acumuladorBarbijo > acumuladorJabon )
	{
		mayorProductos="barbijo"
		promedio=acumuladorBarbijo/contadorBarbijo;
	}
	else
	{
		mayorProductos= "jabón";
		promedio= acumuladorJabon/ contadorJabon;
	}
		

	document.write("el jabón mas caro es " + fabricantJabonMasCaro + ", la cantidad jabón mas caro es de: " +cantidadJabonMasCaro+ " y su precio es de: " +precioJabonMasCaro + "<br>" );
	document.write("el  tipo de producto con mas unidades es " + mayorProductos +" y su promedio de compra es de: " + promedio+ "<br>" );
	document.write( "se compraron en total " + acumuladorBarbijo + " unidades de barbijo" + "<br>");

}*/


/* Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/

function mostrar()
{
	let nombreIngresado;
	let alturaIgresada;
	let pesoIngresado;
	let sexoIngresado;
	let contadorPacientesFemeninas;
	let acumuladorAlturaPacientes;
	let contadorAlturaPacientes;
	let promedioAltura;
	let banderaHombreConMenosPeso;
	let nombreDelHombreConMenosPeso;
	let pesoHombreConMenosPeso;
	let banderaPersonaNoBinariaMasFlaca;
	let nombrePersonaNoBinariaMasFlaca;
	let pesoPersonaNoBinariaMasFlaca;

	contadorPacientesFemeninas=0;
	contadorAlturaPacientes=0;
	acumuladorAlturaPacientes=0;
	banderaHombreConMenosPeso= true;
	banderaPersonaNoBinariaMasFlaca= true;

	for(let i= 0;	i < 7;	i++)
	{		
		nombreIngresado= prompt("ingresa un nombre");
		alturaIgresada= parseFloat(prompt("ingresa su altura(entre 0.50 y 2.10)"));
		while(isNaN(alturaIgresada)|| alturaIgresada < 0.50 || alturaIgresada > 2.10)
		{
			alturaIgresada= parseFloat(prompt("error, ingresa una altura valida(entre 0.50 y 2.10)"));
		}
		acumuladorAlturaPacientes=acumuladorAlturaPacientes+ alturaIgresada;
		contadorAlturaPacientes= contadorAlturaPacientes +1; 
		pesoIngresado=parseFloat(prompt("ingresa su peso(entre 3kg y 150 kg)"));
		while(isNaN(pesoIngresado)|| pesoIngresado < 3 || pesoIngresado > 150)
		{
			pesoIngresado=parseFloat(prompt("error, ingresa un peso valido(entre 3kg y 150 kg)"));
		}
		sexoIngresado= prompt("ingresa su sexo('m'para masculino, 'f'para femenino y b para no binario )");
		while(sexoIngresado!='m' && sexoIngresado != 'f' && sexoIngresado!= 'b')
		{
			sexoIngresado= prompt("error, ingresa un sexo valido('m'para masculino, 'f'para femenino y b para no binario )");
		}

		switch(sexoIngresado)
		{
			case 'm':
				if(banderaHombreConMenosPeso==true|| pesoHombreConMenosPeso > pesoIngresado)
				{
					pesoHombreConMenosPeso= pesoIngresado;
					nombreDelHombreConMenosPeso =nombreIngresado;
					banderaHombreConMenosPeso= false;
				}
				break;
			case 'f':
				contadorPacientesFemeninas = contadorPacientesFemeninas+1;
				break;
			case 'b':
				if(banderaPersonaNoBinariaMasFlaca==true || pesoPersonaNoBinariaMasFlaca > pesoIngresado)
				{
					pesoPersonaNoBinariaMasFlaca= pesoIngresado;
					nombrePersonaNoBinariaMasFlaca= nombreIngresado;
					banderaPersonaNoBinariaMasFlaca=false;
				}
				break;
		}
	}// fin del for principal

	promedioAltura= acumuladorAlturaPacientes/ contadorAlturaPacientes;

	document.write("la cantidad de personas de sexo femenino son "+ contadorPacientesFemeninas+"<br>");
	document.write("La altura promedio en total de pacientes es "+ promedioAltura +"<br>");
	document.write("El nombre del hombre con menos peso es "+ nombreDelHombreConMenosPeso+"<br>");
	document.write("El mas flaco de las personas no binarias es "+ nombrePersonaNoBinariaMasFlaca+"<br>");
	
/*a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/ 
}