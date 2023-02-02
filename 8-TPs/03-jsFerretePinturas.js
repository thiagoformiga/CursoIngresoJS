/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    /*(32 °F − 32) × 5/9 = 0 °C
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
/*(0 °C × 9/5) + 32 = 32 °F */

	
}
