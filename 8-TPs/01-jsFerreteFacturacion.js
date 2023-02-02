/*
formigathiago
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let suma;

    productoUno= document.getElementById("txtIdPrecioUno").value;
    productoDos= document.getElementById("txtIdPrecioDos").value;
    productoTres= document.getElementById("txtIdPrecioTres").value;

    productoUno= parseInt(productoUno);
    productoDos= parseInt(productoDos);
    productoTres= parseInt(productoTres);



    suma = "la suma de los productos es de "+ (productoUno + productoTres + productoDos);

    alert(suma);

}
function Promedio () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let suma;
    let promedio;

    productoUno= document.getElementById("txtIdPrecioUno").value;
    productoDos= document.getElementById("txtIdPrecioDos").value;
    productoTres= document.getElementById("txtIdPrecioTres").value;

    productoUno= parseInt(productoUno);
    productoDos= parseInt(productoDos);
    productoTres= parseInt(productoTres);

    suma= (productoUno + productoTres + productoDos);

    promedio = "el promedio es de " + (suma / 3);

    alert(promedio);

}
function PrecioFinal () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let suma;
    let precioFinal;

    productoUno= document.getElementById("txtIdPrecioUno").value;
    productoDos= document.getElementById("txtIdPrecioDos").value;
    productoTres= document.getElementById("txtIdPrecioTres").value;

    productoUno= parseInt(productoUno);
    productoDos= parseInt(productoDos);
    productoTres= parseInt(productoTres);

    suma= (productoUno + productoDos + productoTres);

    precioFinal= "el precio final es de " + suma * (21 / 100);

    alert(precioFinal)

	
}