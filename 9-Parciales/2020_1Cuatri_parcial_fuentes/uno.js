/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */
//formigathiago
/*function mostrar()
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
	let	cantidadAlcoholBarato;
	let precioAlcoholBarato;
	let fabricanteAlcoholBarato;
	let banderaAlcoholBarato;
	let mayorProductos;
	let promedio;
	
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	banderaAlcoholBarato=true;

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
				if(banderaAlcoholBarato== true || precioAlcoholBarato > precio )
				{
					precioAlcoholBarato= precio;
					cantidadAlcoholBarato= cantidadUnidades;
					fabricanteAlcoholBarato= fabricante;
					banderaAlcoholBarato= false;
				}
				acumuladorAlcohol= acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol= contadorAlcohol+ 1;	
				break;
			case"barbijo":
				acumuladorBarbijo= acumuladorBarbijo + cantidadUnidades;
				contadorBarbijo= contadorBarbijo+1;
				break;
			case"jabón":
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
		

	document.write("el mas barato de los alcohol es " + fabricanteAlcoholBarato + ", la cantidad alcohol barato es de: " +cantidadAlcoholBarato+ " y su precio es de: " +precioAlcoholBarato + "<br>" );
	document.write("el mayor tipo de unidades es " + mayorProductos +" y su promedio es de: " + promedio+ "<br>" );
	document.write( "hay " + acumuladorJabon + " unidades de jabon" + "<br>");



	
}*/

/*Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
//formigathiago

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/ */

function mostrar()
{
	let tipoDeProductoIgresado;
	let nombreDelProducto;
	let precioDelProducto;
	let procedenciaDelProducto;
	let pesoDelProducto;
	let respuesta;
	let banderaNombreDelMasPesadoComestibles;
	let nombreMasPesadoComestibles;
	let PesoComestibles;
	let banderaNombreDelMasCaro;
	let precioNombreMasCaro;
	let nombreMasCaro;
	let banderaNombreDelMasBaratoElaborasos;
	let nombreMasBaratoElaborados;
	let precioMasBaratoElaborados;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;
	let tipoQueMasAparece;
	let porcentajeProductosElaborados;
	let contadorProductosElaborados;
	let promedioDePesos;
	let contadorDeProductos;
	let contadorDePesos;
	let acumuladorDePesos;

	banderaNombreDelMasBaratoElaborasos=true;
	banderaNombreDelMasCaro= true;
	banderaNombreDelMasPesadoComestibles= true;
	contadorDeProductos= 0;
	contadorProductosElaborados=0;
	contadorComestible=0;
	contadorLimpieza=0;
	contadorOtros=0;
	contadorDePesos=0;
	acumuladorDePesos=0;
	respuesta="si"


	while(respuesta=="si")
	{	
		tipoDeProductoIgresado= prompt("ingresa el tipo de producto (limpieza , comestible , otros)");
		while(tipoDeProductoIgresado!= "limpieza" && tipoDeProductoIgresado != "comestible" && tipoDeProductoIgresado !="otros")
		{
			tipoDeProductoIgresado= prompt("error, ingresa el tipo de producto valido (limpieza , comestible , otros)");
		}
		nombreDelProducto= prompt("ingresa el nombre del producto");

		precioDelProducto=parseInt(prompt("¿cual es el importe del producto? (no puede ser mayor a 1000)"));
		while(isNaN(precioDelProducto)|| precioDelProducto < 1 || precioDelProducto > 1000)
		{
			precioDelProducto= parseInt(prompt("error, ingresa el importe valido (no puede ser mayor a 1000)"));
		}

		procedenciaDelProducto= prompt("ingresa la procedencia del producto(importado, nacional, elaborado)");
		while(procedenciaDelProducto!= "importado" && procedenciaDelProducto != "nacional" && procedenciaDelProducto!= "elaborado")
		{
			procedenciaDelProducto= prompt("ERROR, ingresa la procedencia valida del producto(importado, nacional, elaborado)");
		}

		pesoDelProducto= parseFloat(prompt("ingresa el peso del producto (no puede ser mayor a 30 kilos)"));
		while(isNaN(pesoDelProducto)||pesoDelProducto < 1 || pesoDelProducto > 30)
		{
			pesoDelProducto= parseFloat(prompt("error, ingresa el peso del producto valido (no puede ser mayor a 30 kilos)"));
		}
		acumuladorDePesos= acumuladorDePesos+ pesoDelProducto;
		contadorDePesos= contadorDePesos+1;

		switch(tipoDeProductoIgresado)
		{
			case	"limpieza":
				contadorLimpieza=contadorLimpieza + 1;
				break;			
			case	"comestible":
				if(banderaNombreDelMasPesadoComestibles==true || PesoComestibles < pesoDelProducto)
				{	
					nombreMasPesadoComestibles= nombreDelProducto;
					PesoComestibles = pesoDelProducto;
					banderaNombreDelMasPesadoComestibles= false;
     
				}
				contadorComestible= contadorComestible+1;
				break;
			case	 "otros":
				contadorOtros= contadorOtros+1;
				break;
		}

		if(banderaNombreDelMasCaro==true || precioNombreMasCaro < precioDelProducto)
		{
			precioNombreMasCaro= precioDelProducto;
			nombreMasCaro= nombreDelProducto;
			banderaNombreDelMasCaro=false;
		}
		
		switch(procedenciaDelProducto)
		{
			case "elaborado":
				if(banderaNombreDelMasBaratoElaborasos==true || precioMasBaratoElaborados > precioDelProducto)
				{
					precioMasBaratoElaborados= precioDelProducto;
					nombreMasBaratoElaborados= nombreDelProducto;	
					banderaNombreDelMasBaratoElaborasos=false;
				}
				contadorProductosElaborados= contadorProductosElaborados+1;

				break;
			case "importado":
				break;
			case "nacional":
				break;
		}
		if(contadorLimpieza > contadorComestible && contadorLimpieza > contadorOtros)
		{
			tipoQueMasAparece= " limpieza";
		}
		else if(contadorComestible> contadorOtros && contadorComestible >= contadorLimpieza)
		{
			tipoQueMasAparece= " comestibles";
		}
		else
		{
			tipoQueMasAparece= " otros"
		}
		
		contadorDeProductos= contadorDeProductos+1
		respuesta= prompt("¿Desea ingresar otro dato? ('si'/'no')");

	}//findelwhileprincipal

	porcentajeProductosElaborados= contadorProductosElaborados/contadorDeProductos*100;
	promedioDePesos=acumuladorDePesos/ contadorDePesos;

	document.write("el nombre de los mas pesados de los comestibles es " + nombreMasPesadoComestibles+"<br>");
	document.write("el nombre mas caro de todos los productos es " + nombreMasCaro+ "<br>");
	document.write("el NOMBRE del mas barato de los elaborados es " + nombreMasBaratoElaborados+"<br>");
	document.write("el tipo de mercadería que mas aparece " + tipoQueMasAparece+"<br>");
	document.write("el porcentaje de productos elaborados por sobre el total es: " + porcentajeProductosElaborados+"%" +"<br>");
	document.write("el promedio de pesos por cada tipo ingresado es de: " + promedioDePesos + "<br>");

}
