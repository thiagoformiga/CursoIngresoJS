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

}
