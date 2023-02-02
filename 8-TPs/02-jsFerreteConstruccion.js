/*formigathiago
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    /*A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    base del rectangulo *2base+*2largo
    para 3hilos de alambrese tiene que hacer perimetro por 3*/
    
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    

    largo= document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo= parseFloat(largo);
    ancho=parseFloat(ancho);

    //calculo el perimetro y luego ese permitro lo multiplico por la cantidad de hilo necesaria en este caso 3
    perimetro= (largo + ancho) * 2;

    alambre= perimetro*3;

    alert("se necesitan comprar " + alambre + " metros de alambre.");


}




function Circulo () 
{
    /*permietro de circulo es 2*pi*R  
    tambien se necesita 3 hilos de alambre*/
    let radio;
    let perimetro;
    let alambre;
    let pi;

    pi= 3.14;

    radio=document.getElementById("txtIdRadio").value;
    radio= parseFloat(radio);
    
    perimetro= 2 * pi * radio;
    
    alambre= perimetro * 3;

    alert("se necesitan " + alambre + " metros de alambre.");
    
   
	
}
function Materiales () 
{
    /* 
    area del rectangulo largo por ancho 
    para sacar las bolsas de cemento multiplico metro cuadrado por cemento y luego cal*/

    let largo;
    let ancho;
    let area;
    let cal;
    let cemento;

    

    largo= document.getElementById("txtIdLargo").value;
    ancho= document.getElementById("txtIdAncho").value;

    area= largo * ancho;
    /* haciendo regla de tres simples llegue a que por area necesitaria 2 bolsas de cementos 3 de cal
    ej en un metro cuadrado entran dos bolsas de cemento cuantas entran en el area= por lo que hice 2*area / 1m cuadrado
	*/
    cemento= area *2;
    cal= area *3;

    alert("necesita " + cemento +" bolsas de cemento y " + cal +" para el contrapiso.");




}