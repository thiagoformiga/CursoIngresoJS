/*formigathiago
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	let mensaje;
	let max;
	let min;

	max= 10;
	min= 1;
  mensaje= Math.floor(Math.random()*max + min);

  console.log(mensaje);
}//FIN DE LA FUNCIÓN