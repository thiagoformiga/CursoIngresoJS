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
/*
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
   
}*/

/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/
 
function mostrar()
{
  let nombreIngresado;
  let carreraIngresada;
  let estadoCarreraIngresada;
  let generoIngresado;
  let notaIngresada;
  let respuesta;
  let contadorDeAlumnosProgramacion;
  let contadorDeAlumnosPsicologia;
  let contadorDeAlumnosDiseño;
  let contadorDeMujeresProgramacion;
  let contadorDeAlumnosNoBinarios;
  let acumuladorNotasAlumnosFinalizantes;
  let contadorDeNotasAlumnosFinalizantes;
  let promedioDeNotasFinalizantes;
  let notaMasAltaNoBinarioPsicologia;
  let banderaNotaMasAltaNoBinarioPsicologia;
  let nombreNotaMasAltaNoBinarioPsicologia;
  let carreraConMasEstudiantes;

  contadorDeAlumnosDiseño=0;
  contadorDeAlumnosProgramacion=0;
  contadorDeAlumnosPsicologia=0;
  contadorDeMujeresProgramacion=0;
  contadorDeAlumnosNoBinarios=0;
  contadorDeNotasAlumnosFinalizantes=0;
  acumuladorNotasAlumnosFinalizantes=0;
  banderaNotaMasAltaNoBinarioPsicologia= true;
  respuesta="si";


  while(respuesta="si")
  {
    nombreIngresado= prompt("ingresa un nombre");
    carreraIngresada=prompt("ingresa el nombre de la carrera (Programación, Psicología, Diseño gráfico)");
    while(carreraIngresada!="Programación" && carreraIngresada!="Psicología"&& carreraIngresada!="Diseño gráfico")
    {
      carreraIngresada=prompt("error, ingresa el nombre de la carrera valido (Programación, Psicología, Diseño gráfico)");
    }
    estadoCarreraIngresada=prompt("ingresa el estado de la carrera (en curso-abandono-finalizado)");
    while(estadoCarreraIngresada!="en curso" && estadoCarreraIngresada!="abandono" && estadoCarreraIngresada!="finalizado")
    {
      estadoCarreraIngresada=prompt("ingresa el estado de la carrera (en curso-abandono-finalizado)");
    }
    generoIngresado= prompt("ingresa el sexo de la persona(femenino-masculino-nobinario)");
    while(generoIngresado!="femenino" && generoIngresado!="masculino" && generoIngresado!="nobinario")
    {
      generoIngresado= prompt("ingresa el sexo de la persona(femenino-masculino-nobinario)");
    }
    notaIngresada=prompt("ingresa una nota (entre 1 y 10)");
    while(isNaN(notaIngresada)|| notaIngresada< 1 || notaIngresada> 10)
    {
      notaIngresada=prompt("error, ingresa una nota (entre 1 y 10)");
    }
    switch(carreraIngresada)
    {
      case "Programación":
        if(generoIngresado=="femenino")
        {
          contadorDeMujeresProgramacion= contadorDeMujeresProgramacion+1;
        }
        contadorDeAlumnosProgramacion= contadorDeAlumnosProgramacion+1;
        break
      case "Diseño gráfico":
        contadorDeAlumnosDiseño= contadorDeAlumnosDiseño+1;
        break;
      case "Psicología":
        if(generoIngresado== "nobinario")
        {
          if(banderaNotaMasAltaNoBinarioPsicologia== true || notaMasAltaNoBinarioPsicologia < notaIngresada)
          {
            notaMasAltaNoBinarioPsicologia= notaIngresada;
            nombreNotaMasAltaNoBinarioPsicologia= nombreIngresado;
            banderaNotaMasAltaNoBinarioPsicologia= false;
          }
        }
        contadorDeAlumnosPsicologia= contadorDeAlumnosPsicologia+1;
        break;
    }
    if(generoIngresado=="nobinario")
    {
      contadorDeAlumnosNoBinarios= contadorDeAlumnosNoBinarios+1;
    }
    if(estadoCarreraIngresada== "finalizado")
    {
      acumuladorNotasAlumnosFinalizantes= acumuladorNotasAlumnosFinalizantes+ notaIngresada;
      contadorDeNotasAlumnosFinalizantes = contadorDeNotasAlumnosFinalizantes+1;
    }
    respuesta= " Desea Ingresar otro alumno('si'/'no')"
  }// fin del while principal

  if(contadorDeAlumnosProgramacion> contadorDeAlumnosPsicologia && contadorDeAlumnosProgramacion > contadorDeAlumnosDiseño)
  {
    carreraConMasEstudiantes= " es Programación";
  }
  else if (contadorDeAlumnosPsicologia > contadorDeAlumnosDiseño && contadorDeAlumnosPsicologia > contadorDeAlumnosProgramacion)
  {
    carreraConMasEstudiantes= " es Psicología";
  }
  else
  {
    carreraConMasEstudiantes= " es Diseño Grafico";
  }

  promedioDeNotasFinalizantes= acumuladorNotasAlumnosFinalizantes/ contadorDeNotasAlumnosFinalizantes;

  document.write(" La cantidad total de alumnos de programacion es de: " + contadorDeAlumnosProgramacion+ "<br>");
  document.write(" La Cantidad total de mujeres que cursan la carrera de programación son : "+ contadorDeMujeresProgramacion+ "<br>");
  document.write(" La Cantidad de alumnos no binarios.: " + contadorDeAlumnosNoBinarios+ "<br>");
  document.write(" El promedio de alumnos finalizantes es de:  " + promedioDeNotasFinalizantes+ "<br>");
  document.write(" el Nombre  del mejor alumno no binario en la carrera de psicología. " + nombreNotaMasAltaNoBinarioPsicologia+ "<br>");
  document.write(" la carrera con mas alumnos es : "+ carreraConMasEstudiantes+ "<br>");


/*/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.*/
 



}

