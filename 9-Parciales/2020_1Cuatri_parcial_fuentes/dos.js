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
function mostrar()
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
  }
