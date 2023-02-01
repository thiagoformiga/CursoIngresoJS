/*formiga thiago
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  let numUnoTexto;
  let numDosTexto;
  let numUno;
  let numDos;
  let mensaje;

  numUnoTexto = document.getElementById("txtIdNumeroUno").value;
  numDosTexto = document.getElementById("txtIdNumeroDos").value;

  numUno = parseInt(numUnoTexto);
  numDos = parseInt(numDosTexto);
  mensaje = "la suma es " + (numUno + numDos);

	alert(mensaje);
}

