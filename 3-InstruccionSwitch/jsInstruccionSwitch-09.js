/*formigathiago
Enunciado:
a)una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
b)en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%
c)en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%
d)en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento */
function mostrar()
{
	let destino;
	let estacion;
	let precioBase;
	let porcentaje;
	let precioFinal;

	porcentaje = 0;
	precioBase= 15000;
	estacion= document.getElementById("txtIdEstacion").value;
	destino= document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				
				}
				break;
			
		case "Verano":
			switch(destino){
				case	"Bariloche":
					porcentaje = -20;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
				
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
			
	}

	precioFinal = precioBase + (precioBase * porcentaje/100);

	alert("el precio final es de $ " + precioFinal);





}//FIN DE LA FUNCIÓN