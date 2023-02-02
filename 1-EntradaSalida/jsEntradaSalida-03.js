/*
thiago formiga
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensaje;
	
	nombreingresado= document.getElementById("txtIdNombre").value;
	mensaje("Su nombre es "+ nombreIngresado);
	
	alert(mensaje);



}
	function mostrar()
{
	let Producto;
	let precioDelProducto;
	let porcentaje;
	let precioFinal;
	let mensaje;
	
	Producto= prompt("introducir nombre del producto");

	precioDelProducto = document .getElementById("txtIdNombre").value;
	
	precioDelProducto = parseInt(precioDelProducto);

	porcentaje = (precioDelProducto * 30 / 100);

	precioFinal = (precioDelProducto + porcentaje);

	mensaje = "el nombre del producto es " + Producto  + " y su precio es de " + precioFinal;
	
	
	alert(mensaje);
}
