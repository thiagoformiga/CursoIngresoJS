
 /*formigathiago
 tP 4 Ferrete iluminancion Con switch(cantidad) y if (marca)*/
 
 function CalcularPrecio () 
 {
     let cantidadLamparas;
     let marcaLamparas;
     let precioBase;
     let precioLamparas;
     let porcentaje;
     let precioDescuento;
     let precioFinalConDescuento;
     let aumento;
     let impuesto;
     let precioFinalConImpuesto;
     let mensaje;
 
     
 
     precioBase = 35
     porcentaje= 0;
     cantidadLamparas = document.getElementById("txtIdCantidad").value;
     cantidadLamparas = parseFloat(cantidadLamparas);
     marcaLamparas= document.getElementById("Marca").value;

     precioLamparas= precioBase*cantidadLamparas;
 
     
     switch(cantidadLamparas){
        case    1:
        case    2:
            porecentaje = 0;
            break;
        case    3:
            if(marcaLamparas == "ArgentinaLuz"){
                porcentaje = 15;
            }
            else if(marcaLamparas == "FelipeLamparas"){
                porcentaje = 10;
            }else {
                porcentaje = 5;
            }
            break;
        case    4:
            if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
                porcentaje = 20;
            }else{
                porcentaje = 25;
            }
            break;
        case    5:
            if(marcaLamparas == "ArgentinaLuz"){
                porcentaje = 40;
            } else {
                porcentaje = 30;
            }
            break;
        default:
            porcentaje = 50;
            break;       
       
     }


    
     precioDescuento = precioLamparas * porcentaje/100;
     precioFinalConDescuento= precioLamparas - precioDescuento;

     mensaje= precioFinalConDescuento;


     aumento = 10;

     if(precioFinalConDescuento > 120){
        impuesto= precioFinalConDescuento * aumento/100;
        precioFinalConImpuesto = precioFinalConDescuento + impuesto;
        alert("pago $ " + precioFinalConImpuesto + " de IIBB, siendo $ " + impuesto + " el impuesto que pago");

     }
    



     document.getElementById("txtIdprecioDescuento").value= mensaje;
 
 }
 
 

