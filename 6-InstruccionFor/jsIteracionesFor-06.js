//formigthiago
//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número 
//ingresado, y mostrar la cantidad de numeros pares encontrados.
function mostrar()
{
	let i;
	let numeroIngresado;
	let contadorDePares;

	contadorDePares=0;

	numeroIngresado= parseInt(prompt("ingresa un numero"));

	
	for(i= 1;	i<= numeroIngresado;	i++){

		if(i % 2 == 0){
			contadorDePares= contadorDePares + 1;
			console.log(i);
		}
	}

	console.log("la cantidad de pares es de: " +contadorDePares);


}//FIN DE LA FUNCIÓN