/*formigathiago
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marcaLamparas;
    let precioLamparas;
    let precioFinal;
    let descuento;
    let precioFinalConDescuento;
    let ingresosBrutos;
    let mensaje;

    

    precioLamparas = 35
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseFloat(cantidadLamparas);
    marcaLamparas= document.getElementById("Marca").value;

    
    if(cantidadLamparas >= 6)//a)
    {
        descuento= 50;

        precioFinal= precioLamparas * cantidadLamparas;
        precioFinalConDescuento= (precioFinal * descuento/100) + precioFinal;
        
        mensaje= precioFinalConDescuento;
    }
    else if(cantidadLamparas == 5 &&  marcaLamparas == "ArgentinaLuz")//b)
    {
        descuento= 40;

        precioFinal= precioLamparas* cantidadLamparas
        precioFinalConDescuento=(precioFinal * descuento/100) + precioFinal;

        mensaje=precioFinalConDescuento;
    }else if(cantidadLamparas == 5 &&  marcaLamparas != "ArgentinaLuz")
    {
        descuento = 30;

        precioFinal= precioLamparas*cantidadLamparas;
        precioFinalConDescuento= (precioFinal * descuento/100) + precioFinal;
        
        mensaje= precioFinalConDescuento;

    }
    else if(cantidadLamparas == 4 && (marcaLamparas == "ArgentinaLuz" || "FelipeLamparas"))//c)
    {
        descuento = 25;
        precioFinal= precioLamparas* cantidadLamparas;
        precioFinalConDescuento= (precioFinal * descuento/100) + precioFinal;
        mensaje= precioFinalConDescuento;
    }
    else if(cantidadLamparas == 4 && (marcaLamparas != "ArgentinaLuz" || "FelipeLamparas"))
    {
        descuento= 20;
        
        precioFinal=precioLamparas * cantidadLamparas;
        precioFinalConDescuento=(precioFinal* descuento/100) + precioFinal;

        mensaje=precioFinalConDescuento;
    } else if(cantidadLamparas == 3 &&  marcaLamparas == "ArgentinaLuz")
    {
        descuento= 15;
        
        precioFinal= precioLamparas * cantidadLamparas;
        precioFinalConDescuento= (precioFinal*descuento/100)+ precioFinal;

        mensaje= precioFinalConDescuento;
    }
    else if(cantidadLamparas == 3 &&  marcaLamparas == "FelipeLamparas")
    {
        descuento= 10;

        precioFinal= precioLamparas * cantidadLamparas;
        precioFinalConDescuento= (precioFinal * descuento/100) + precioFinal;

        mensaje=precioFinalConDescuento;
    }
    else if(cantidadLamparas == 3 && (marcaLamparas != "ArgentinaLuz" || "FelipeLamparas"))
    {
        descuento= 5;

        precioFinal= precioLamparas*cantidadLamparas;
        precioFinalConDescuento= (precioFinal* descuento/100) + precioFinal;

        mensaje=precioFinalConDescuento;
    }
    else if(precioFinalConDescuento > 120);
    {
        ingresosBrutos= 10;
        
        alert("IIBB Usted pago " + precioFinalConDescuento * ingresosBrutos /100);
        

    }

    document.getElementById("txtIdprecioDescuento").value = mensaje;

}
