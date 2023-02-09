/*formigathiago
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	let mes;
	let mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch(mes){
		default:
			mensaje="Falta para el invierno.";
			break;

		case  "julio":
			mensaje="Abrigate que hace frio.";
			break;
		case   "Agosto":
			mensaje="Abrigate que hace frio.";
			break;
		case   "Septiembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case   "Octubre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case    "Noviembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case     "diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
	}
alert(mensaje);



}//FIN DE LA FUNCIÓN