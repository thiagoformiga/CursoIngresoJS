//formigathiago
//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

/*function mostrar()
{
	let edad;

	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad ==15)
	{

		mensaje=("niña bonita");
	}
}//FIN DE LA FUNCIÓN*/

/*formigathiago
 Ejercicio 1bis: 
con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace*/
//formula: velocidad= distancia/tiempo
function mostrar()
{
	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia= document.getElementById("txtIdEdad").value;
	distancia=parseFloat(distancia);
	tiempo=prompt("¿cuantas horas tardaste?");
	tiempo=parseFloat(tiempo)

	velocidad= distancia/tiempo

	if(velocidad <= 60 ){
		mensaje="muy lento";
	}
	else if(velocidad<= 80){
		mensaje="lento";
	}
	else if (velocidad <= 100){
		mensaje="es un buen ritmo";
	}
	else if(velocidad <= 120){
		mensaje=" ahi de la ley";
	}
	else if(velocidad > 120){
		mensaje="eso no se hace";
	}

	alert(mensaje);



}





















/*formigathiago
Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo IMC <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40
function mostrar()
{

	let peso;
	let altura;
	let IMC;
	let mensaje;


peso= document.getElementById("txtIdEdad").value;
peso= parseFloat(peso);
altura= prompt("¿cual es tu altura?");
altura= parseFloat(altura);

IMC= peso / (altura * altura);

if(IMC < 18.5)
{
	mensaje= "tu imc es de "+IMC + " tienes un bajo peso.";

}
else if (IMC>= 18.5 && IMC <= 24.9)
{
	mensaje= "tu imc es de "+IMC +" tienes un IMC normal.";
}
else if(IMC >= 25 && IMC <= 26.9)
{
	mensaje="tu imc es de "+ IMC+" tienes preobesidad.";
}
else if(IMC >= 27 && IMC <= 29.9 )
{
	mensaje="tu imc es de "+IMC+ " tienes obesidad I.";

}
else if(IMC >= 30 && IMC <=34.9)
{
	mensaje= "tu imc es de "+ IMC+" tienes obesidad II.";
}
else if(IMC >= 35 || IMC >= 40)
{
	mensaje="tu imc es de "+IMC+" tienes obesidad III.";
	
}
alert(mensaje);

}*/