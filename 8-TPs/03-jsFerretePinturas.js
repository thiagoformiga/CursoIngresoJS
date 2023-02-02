/*formigathiago 
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    /*formula pasaje Fahrenheit a centigrados (32 °F − 32) × 5/9 
 */

    let Fahrenheit;
    let centigrados;
    let mensaje
    
    
    Fahrenheit=document.getElementById("txtIdTemperatura").value;

    Fahrenheit=parseFloat(Fahrenheit);

    centigrados = (Fahrenheit - 32) * 5/9;

    mensaje = (Fahrenheit + " Farenheit son " + centigrados);
    alert(mensaje);
	
}

function CentigradosFahrenheit () 
{
/*formula pasaje centigrados a fahrenheit (0 °C × 9/5) + 32 */
 
let centigrados;
let Farenheit;

centigrados= document.getElementById("txtIdTemperatura").value;

centigrados= parseFloat(centigrados);

Farenheit= (centigrados * 9/5) + 32;

mensaje= (centigrados + " centrigados son " + Farenheit);

alert(mensaje);
	
}
