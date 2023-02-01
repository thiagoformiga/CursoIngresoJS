/*
thiago formiga
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoUno;
	let aumento;
	let nuevoSueldo;
	let sueldoDos;

	
	// para calcular el sueldo le sumo el porcenaje al sueldo original
	
	sueldoUno = document.getElementById("txtIdSueldo").value;
	
	sueldoDos = parseInt (sueldoUno);

	aumento = (sueldoDos* 10 /100);

	nuevoSueldo = (sueldoDos + aumento);
	
	 document.getElementById("txtIdResultado").value=nuevoSueldo;
}
