/*formigathiago
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días*/
function mostrar()
{
	let meses;
	let mensaje;

	meses=document.getElementById("txtIdMes").value;

	switch(meses){
		case "Febrero":
			mensaje="tiene 28 días";
			break;
		case	"Abril":
		case	"Junio":
		case	"Septiembre":
		case 	"Noviembre":
			mensaje= "tiene 30 días";
			break;
		default:
			mensaje="tiene 31 días";
			break;

	}//fin de switch

	alert(mensaje)

}//FIN DE LA FUNCIÓN