  
document.querySelector('#submit').addEventListener('click',function(){

    let nombre = document.querySelector('#nombre').value;
    let botella = document.querySelector('#botella').value;
    let direccion = document.querySelector('#direccion').value;
    let fecha = document.querySelector('#fecha').value;
    let hentrega = document.querySelector('#hentrega').value;
    let telefono = document.querySelector('#telefono').value;


    let url = "https://api.whatsapp.com/send?phone=529621875718&text=*_BOTELLAS_VIP_TAPACHULA_*%0A* SISTEMA DE PEDIDOS*%0A%0A*NOMBRE(s): *%0A" + nombre +  "%0A*Botella Deseada: *%0A" + botella + "%0A*Direccion del servicio: *%0A" + direccion + "%0A*FECHA DE ENTREGA DESEADA: *%0A" + fecha + "%0A*HORA DE ENTREGA DESEADA: *%0A" + hentrega  + "%0A*TELEFONO: *%0A" + telefono;
    window.open(url);

});