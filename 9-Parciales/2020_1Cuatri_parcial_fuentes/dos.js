/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,desde 1 hasta 1000
Precio por bolsa (más de cero ), desde 1 hasta 10000
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
formigathiago
 */
/*function mostrar()
{
  let respuesta;
  let tipoDeBolsa;
  let cantidadBolsas;
  let acumumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let descuento;
  let precioBolsa;
  let importeTotalDescuento;
  let tipoConMasBolsas;
  let precioBolsaMasCara;
  let tipoMasCaro;
  let banderaDelMasCaro;
  let acumuladorDeBolsas;
  let acumuladorDePrecios;
  let mensaje;

  respuesta="si";
  descuento=0;
  acumuladorArena=0;
  acumumuladorCal=0;
  acumuladorCemento=0;
  acumuladorDePrecios=0;
  acumuladorDeBolsas=0;
  banderaDelMasCaro=true;

  while(respuesta== "si")
  {
    tipoDeBolsa=prompt("ingrese un tipo de bolsa. (arena, cal y cemento)");
    while(tipoDeBolsa != "arena" && tipoDeBolsa != "cal" && tipoDeBolsa!= "cemento")
    {
      tipoDeBolsa=prompt("Error, ingrese un producto valido (arena, cal y cemento)");
    }

    precioBolsa= parseFloat(prompt("ingresa el precio de las bolsas"));
    while(isNaN(precioBolsa) || precioBolsa < 0 || precioBolsa >10000)
    {
      precioBolsa= parseFloat(prompt("error, ingresa un precio valido para las bolsas(no puede ser superior a 10000)"));
    }
  
    cantidadBolsas=parseInt(prompt("ingrese la cantidad de bolsas (no puede ser superior a 1000)"));
    while(isNaN(cantidadBolsas)&& cantidadBolsas > 0 && cantidadBolsas < 1000)
    {
      cantidadBolsas=parseInt(prompt("error, ingrese la cantidad de bolsas valida.(no pueden ser mayor a 1000) "));
    }
    acumuladorDePrecios=acumuladorDePrecios + ( precioBolsa * cantidadBolsas);
    acumuladorDeBolsas= acumuladorDeBolsas+ cantidadBolsas;
    
    switch(tipoDeBolsa)
    {
      case "cal": 
        acumumuladorCal= acumumuladorCal+ cantidadBolsas;
        break;
      case "arena":
        acumuladorArena= acumuladorArena + cantidadBolsas;
        break;
      case "cemento":
        acumuladorCemento= acumuladorCemento + cantidadBolsas;
        break;
    }
    if(banderaDelMasCaro==true || precioBolsaMasCara < precioBolsa)
    {
      precioBolsaMasCara = precioBolsa;
      tipoMasCaro= tipoDeBolsa;
      banderaDelMasCaro=false;
    }

    if(acumumuladorCal > acumuladorCemento && acumumuladorCal > acumuladorArena)
    {
      tipoConMasBolsas= "  cal";
    }
    else if(acumuladorCemento> acumuladorArena && acumuladorCemento >= acumumuladorCal)
    {
      tipoConMasBolsas= "  cemento";
    }
    else
    {
      tipoConMasBolsas= "  arena";
    }

    respuesta=prompt("¿Desea continuar? Ingrese:'si'");
  }//findelwhileprincipal

    if(acumuladorDeBolsas > 29)
    {
      descuento= -25;
      
    }
    else if(acumuladorDeBolsas > 9)
    {
      descuento= -15;
    }
    else
    {
      descuento=0;
    }

    if(descuento!=0)
    {
      importeTotalDescuento= acumuladorDePrecios + (acumuladorDePrecios * descuento / 100);
      mensaje=" el importe a pagar con descuento es: " + importeTotalDescuento;
    }
    else
    {
      mensaje= "no se aplico el descuento";
    }
 
    document.write("el importe total a pagar es de " + acumuladorDePrecios+ "<br>");
    document.write(mensaje + "<br>");
    document.write("el tipo con mas cantidad de bolsas es " + tipoConMasBolsas+ "<br>");
    document.write("el tipo mas caro es " + tipoMasCaro+" con " + precioBolsaMasCara +  "<br>");
  }*/
  /*Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas
validar  
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedioMayorTipoGato de edad de esta raza/ 
formigathiago
 */
function mostrar()
{
  let MascotraIngresada;
  let perroIngresado;
  let gatoIngresado;
  let pajaroIngresado;
  let otrosIngresado;
  let edadPerro;
  let edadGato;
  let edadPajaro;
  let edadParaOtros;
  let nombrePerro;
  let nombreGato;
  let nombrePajaro;
  let nombreOtros;
  let banderaDelMasViejoPerro;
  let edadPerroMasViejo;
  let nombreMasViejoPerro
  let banderaDelMasViejoGato;
  let edadGatoMasViejo;
  let nombreMasViejoGato;
  let banderaDelMasViejoPajaro;
  let edadPajaroMasViejo;
  let nombreMasViejoPajaro;
  let banderaDelMasViejoOtros;
  let edadOtroMasViejo;
  let nombreMasViejoOtro;
  let contadorGatoTurco;
  let contadorGatoSiames;
  let contadorGatoPeterbald;
  let contadorGatoGenerico;
  let contadorGatos;
  let tipoMayorRazaGato;
  let promedioMayorTipoGato;
  let contadorPerro;
  let contadorPajaro;
  let contadorOtros;
  

  banderaDelMasViejoGato=true;
  banderaDelMasViejoOtros=true;
  banderaDelMasViejoPajaro=true;
  banderaDelMasViejoPerro=true;
  contadorPerro=0;
  contadorPajaro=0;
  contadorOtros=0;
  contadorGatoGenerico=0;
  contadorGatoPeterbald=0;
  contadorGatoSiames=0;
  contadorGatoSiames=0;
  contadorGatoTurco=0;
  contadorGatos=0;

  for(let i=0;  i < 10;  i++ )
  {
    MascotraIngresada=prompt("ingresa el tipo de mascota (gato , perro , pájaro y otros)");
    while(MascotraIngresada!= "gato" && MascotraIngresada!= "perro" && MascotraIngresada!= "pájaro" && MascotraIngresada!= "otros")
    {
      MascotraIngresada=prompt("error, ingresa el tipo de mascota correcta (gato , perro , pájaro y otros)");
    }
    switch(MascotraIngresada)
    {
      case "perro":
        perroIngresado=prompt("ingresa el tipo de perro(pastor, toy, callejero)");
        while(perroIngresado!= "pastor" && perroIngresado!= "toy" && perroIngresado!= "callejero")
        {
         perroIngresado=prompt("error, ingresa el tipo de perro valido (pastor, toy, callejero)");
        }
        nombrePerro= prompt("ingresa el nombre del perro");
        edadPerro=parseInt(prompt("inngresa la edad del perro (Edad entre 1 y 20)"));
        while(isNaN(edadPerro)|| edadPerro < 1 || edadPerro > 20)
        {
          edadPerro=parseInt(prompt("error, inngresa la edad del perro valida (Edad entre 1 y 20)"));
        }
        if(banderaDelMasViejoPerro==true || edadPerroMasViejo < edadPerro )
        {
          edadPerroMasViejo= edadPerro;
          nombreMasViejoPerro= nombrePerro;
          banderaDelMasViejoPerro= false;
        }
        contadorPerro= contadorPerro+1;
        break;
      case "gato":
        gatoIngresado=prompt("ingresa el tipo de gato(siamés, turco, Peterbald , generico)")
        while(gatoIngresado!= "siamés" && gatoIngresado!= "turco" && gatoIngresado!= "Peterbald" && gatoIngresado!= "generico")
        {
          gatoIngresado=prompt("error, ingresa el tipo de perro valido(siamés, turco, Peterbald , generico)");
        }
        nombreGato=prompt("ingresa el nombre del gato");
        edadGato=parseInt(prompt("inngresa la edad del gato (Edad 1 y 20)"));
        while(isNaN(edadGato)|| edadGato < 1 || edadGato > 20)
        {
          edadGato=parseInt(prompt("error, inngresa la edad del gato valida (Edad 1 y 20)"));
        }
        if(banderaDelMasViejoGato==true || edadGatoMasViejo < edadGato )
        {
          edadGatoMasViejo= edadGato;
          nombreMasViejoGato= nombreGato;
          banderaDelMasViejoGato= false;
        }
        switch(gatoIngresado)
        {
          case "Peterbald":
            contadorGatoPeterbald= contadorGatoPeterbald+1;
            break;
        case "generico":
          contadorGatoGenerico= contadorGatoGenerico+1;
          break;
        case "siamés":
          contadorGatoSiames= contadorGatoSiames+1;
          break;
        case "turco":
          contadorGatoTurco= contadorGatoTurco+1;
          break;
        }
        contadorGatos= contadorGatos+1; 
        break;
      case  "pájaro":
        pajaroIngresado=prompt("ingresa que tipo de pajaro es");
        nombrePajaro=prompt("ingresa el nombre del pájaro");
        edadPajaro=parseInt(prompt("ingresa la edad del pájaro (Edad entre 1 de 50)"));
          while(isNaN(edadPajaro)|| edadPajaro < 1 || edadPajaro > 50)
          {
            edadPajaro=parseInt(prompt("error, inngresa la edad del pajáro valida (Edad  entre 1 y 50)"));
          }
          if(banderaDelMasViejoPajaro==true || edadPajaroMasViejo < edadPajaro )
          {
            edadPajaroMasViejo= edadPajaro;
            nombreMasViejoPajaro= nombrePajaro;
            banderaDelMasViejoPajaro=false;
          }
          contadorPajaro= contadorPajaro+1;
        break;
      case "otros":
        otrosIngresado=prompt("ingresa el tipo de animal");
        nombreOtros=prompt("ingresa el nombre del animal");
        edadParaOtros=parseInt(prompt("ingresa la edad del animal (Edad entre 1 y 100)"));
          while(isNaN(edadParaOtros)|| edadParaOtros < 1 || edadParaOtros > 100)
          {
          edadParaOtros=parseInt(prompt("error, inngresa la edad del animal valida (Edad 1 y 100)"));
          } 
          if(banderaDelMasViejoOtros==true || edadOtroMasViejo < edadParaOtros )
          {
            edadOtroMasViejo= edadParaOtros;
            nombreMasViejoOtro= nombreOtros;
            banderaDelMasViejoOtros=false;
          }
          contadorOtros= contadorOtros+1;
        break;
        
    }//findelswitchprincipal
    if(contadorGatoGenerico >contadorGatoPeterbald && contadorGatoGenerico > contadorGatoSiames && contadorGatoGenerico > contadorGatoTurco)
    {
      tipoMayorRazaGato= " es generico";
      promedioMayorTipoGato= contadorGatoGenerico/ contadorGatos*100;
    }
    else if(contadorGatoPeterbald > contadorGatoSiames && contadorGatoPeterbald > contadorGatoTurco && contadorGatoPeterbald >= contadorGatoGenerico)
    {
      tipoMayorRazaGato= " es peterbald";
      promedioMayorTipoGato= contadorGatoPeterbald/ contadorGatos*100;
    }
    else if (contadorGatoSiames > contadorGatoTurco && contadorGatoSiames > contadorGatoGenerico && contadorGatoSiames >=contadorGatoPeterbald)
    {
      tipoMayorRazaGato= " son siameses";
      promedioMayorTipoGato= contadorGatoSiames/ contadorGatos *100;
    }
    else
    {
      tipoMayorRazaGato= " son turcos";
      promedioMayorTipoGato= contadorGatoTurco / contadorGatos *100;
    }

  }//findelforprincipal

  document.write("el mas viejo de los perro es " + nombreMasViejoPerro +"<br>");
  document.write("el mas viejo de los gato es " +nombreMasViejoGato +"<br>");
  document.write("el mas viejo de los pájaros es " + nombreMasViejoPajaro+"<br>");
  document.write("el mas viejo de los otros es " + nombreMasViejoOtro +"<br>");
  document.write(" la raza de gatos que mas tiene es " + tipoMayorRazaGato+ " y su promedio es " + promedioMayorTipoGato+" % "+"<br>");
}
/*mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedioMayorTipoGato de edad de esta raza/ 

 */