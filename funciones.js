function agregarNumero(num){
    document.getElementById('pantalla').innerHTML += num;
    //document.getElementById('pantalla').value += numero; PARA CUANDO ES UN INPUT
    
}

function borrar(){
    document.getElementById('pantalla').innerHTML = "";
    //document.getElementById('pantalla').value = ""; PARA CUANDO ES UN INPUT
    
}

function igual(){
    cadena = document.getElementById('pantalla').innerHTML;
    //document.getElementById('pantalla').value = ""; PARA CUANDO ES UN INPUT
    pantalla = eval(cadena);
    document.getElementById('pantalla').innerHTML = pantalla;
}

function acordeon(){
    valor = document.getElementById('pantalla').innerHTML;
    
    if(valor == "2525"|| valor==2525){
        window.location.assign('nuevo.html'); //REDIRIGE A OTRA PAGINA
    }
    if(valor == "5456" || valor==5454){
        window.location.assign('acordeones.html'); //REDIRIGE A OTRA PAGINA
    }
    
}

function guardar(){
    acordeon = document.getElementById('acordeon').value;
    localStorage.setItem('acordeon', acordeon);
    window.location.assign('index.html');
}

function regresar(){
    window.location.assign('index.html');
}

function cargarAcordeon(){
    acordeon = localStorage.getItem('acordeon');
    document.getElementById('acordeon').innerHTML = acordeon;
}