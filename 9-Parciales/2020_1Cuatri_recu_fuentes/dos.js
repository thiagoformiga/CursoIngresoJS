/*formigathiago
Recuperatorio de Parcial 2020: Realizar el algoritmo que permita ingresar los datos de una compra de
 productos de la construccion, hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y..
b)el importe total a pagar con descuento(solo si corresponde)            
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra. */
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
  let precioBolsaMasCaraCal;
  let bolsaDeCalMasCara;
  let banderaMasCaraDeCal;
  let banderaCementoMasBarata;
  let precioBolsaDecementoMasBarata;
  let bolsaCementoMasBarata;
  let acumuladorDeBolsas;
  let acumuladorDePrecios;
  let acumuladorPrecioArena;
  let contadorBolsaArena;
  let mensaje;

  respuesta="si";
  descuento=0;
  acumuladorArena=0;
  acumumuladorCal=0;
  acumuladorCemento=0;
  acumuladorDePrecios=0;
  acumuladorDeBolsas=0;
  banderaMasCaraDeCal=true;
  banderaCementoMasBarata= true;
  acumuladorPrecioArena=0;
  contadorBolsaArena=0;

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
        if(banderaMasCaraDeCal==true || precioBolsaMasCaraCal < precioBolsa)
        {
          precioBolsaMasCaraCal = precioBolsa;
          bolsaDeCalMasCara= tipoDeBolsa;
          banderaMasCaraDeCal=false;
        }
        acumumuladorCal= acumumuladorCal+ cantidadBolsas;
        break;
      case "arena":
        acumuladorArena= acumuladorArena + (precioBolsa*cantidadBolsas);
        acumuladorPrecioArena= acumuladorArena  + acumuladorDePrecios;
        contadorBolsaArena= contadorBolsaArena+ 1;
        break;
      case "cemento":
        if(banderaCementoMasBarata==true || precioBolsaDecementoMasBarata > precioBolsa)
        {
          precioBolsaDecementoMasBarata = precioBolsa;
          bolsaCementoMasBarata= tipoDeBolsa;
          banderaCementoMasBarata=false;
        }
        
        acumuladorCemento= acumuladorCemento + cantidadBolsas;
        break;
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

    if(acumuladorDeBolsas > 44)
    {
      descuento= -30;
      
    }
    else if(acumuladorDeBolsas > 15)
    {
      descuento= -10;
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
    promedioArena = acumuladorPrecioArena/ contadorBolsaArena


 
    document.write("el importe total a pagar es de " + acumuladorDePrecios+ "<br>");
    document.write("la bolsa mas cara de cal es " + bolsaDeCalMasCara + " y su tipo es " +precioBolsaMasCaraCal  + "<br>");
    document.write("la bolsa mas barata de cemento es " +bolsaCementoMasBarata +" y su precio es de " + precioBolsaDecementoMasBarata+"<br>");
    document.write("se compraron en total " +acumuladorArena +" bolsas de arena y el promedio por compra es "+promedioArena+"<br>");
   
}
