class Frutas{
    constructor(kilos, precio, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }

    getKilos(){
        return this.kilos;
    }

    getPrecio(){
        return this.precio;
    }

    sumarKilos(kilos){
        this.kilos += kilos;
    }
}

class FrutasVerano extends Frutas{
    constructor(kilos, precio, nombre, proximidad, region){
        super(kilos, precio, nombre);
        this.proximidad = proximidad;
        this.region = region;
    }
    getProximidad(){
        return this.proximidad;
    }
    getRegion(){
        return this.region;
    }
}

class FrutasInvierno extends Frutas{
    constructor(kilos, precio, nombre, conservar){
        super(kilos, precio, nombre);
        this.conservar = conservar;
    }
    getConservar(){
        return this.conservar;
    }
}

let manzana = new FrutasInvierno(0,2.5,"manzana","no conservar en nevera");
let peras = new FrutasVerano(0,1.79,"peras","de proximidad","Salamanca");
let platanos = new FrutasVerano(0,2.00,"platanos","de proximidad", "Canarias");
let arandanos = new FrutasVerano(0,4.48,"arandanos","no de proximidad","Cantabria");
let naranjas = new FrutasInvierno(0,1.43,"naranjas","no conservar en nevera");
let kiwi = new FrutasInvierno(0,3.85,"kiwi","no conservar en nevera");
let nectarina = new FrutasVerano(0,1.73,"nectarinas","de proximidad","Extremadura");
let sandia = new FrutasVerano(0,0.53,"sandia","de proximidad","Andalucía");
let pina = new FrutasInvierno(0,3.59,"pina","conservar en nevera");
let granada = new FrutasInvierno(0,0.56,"granada","conservar en nevera");


function anadirCompra(frutas){
    let kilos = document.getElementById(frutas).value;//Recojo kilitos
    let derecha = document.getElementById("parteDerecha");
    let texto = document.createTextNode("Se han añadido " + kilos + " kilos de " + frutas + "\n");
    let parrafo = document.createElement("p");
    parrafo.appendChild(texto);
    derecha.appendChild(parrafo);
    parrafo.classList.add(frutas);
    for (let p = 0; p < derecha.getElementsByTagName("p").length; p++) {
        if((derecha.getElementsByTagName("p")[p].classList.contains(frutas))){
            derecha.getElementsByTagName("p")[p].classList.add("estilos");
        }else{
            derecha.getElementsByTagName("p")[p].classList.remove("estilos");
        }
    }

    switch(frutas){
        case manzana.getNombre():
            manzana.sumarKilos(kilos);
            break;

        case platanos.getNombre():
            platanos.sumarKilos(kilos);
            break;

        case naranjas.getNombre():
            naranjas.sumarKilos(kilos);
            break;

        case nectarina.getNombre():
            nectarina.sumarKilos(kilos);
            break;

        case pina.getNombre():
            pina.sumarKilos(kilos);
            break;

        case peras.getNombre():
            peras.sumarKilos(kilos);
            break;

        case arandanos.getNombre():
            arandanos.sumarKilos(kilos);
            break;

        case kiwi.getNombre():
            kiwi.sumarKilos(kilos);
            break;

        case sandia.getNombre():
            sandia.sumarKilos(kilos);
            break;

        case granada.getNombre():
            granada.sumarKilos(kilos);
            break;
    }
    
}

var datos = "";
function botoncin(){
    let fecha = new Date();
    datos = "Fecha de compra: " + fecha.toString() + "<br>";

    datos += manzana.getNombre() + " ---- " + manzana.getKilos() + " --- " + manzana.getPrecio() + " --- " + manzana.getPrecio()*manzana.getKilos() + "<br>";
    datos += platanos.getNombre() + " ---- " + platanos.getKilos() + " --- " + platanos.getPrecio() + " --- " + platanos.getPrecio()*platanos.getKilos() + "<br>";
    datos += naranjas.getNombre() + " ---- " + naranjas.getKilos() + " --- " + naranjas.getPrecio() + " --- " + naranjas.getPrecio()*naranjas.getKilos() + "<br>";
    datos += nectarina.getNombre() + " ---- " + nectarina.getKilos() + " --- " + nectarina.getPrecio() + " --- " + nectarina.getPrecio()*nectarina.getKilos() + "<br>";
    datos += pina.getNombre() + " ---- " + pina.getKilos() + " --- " + pina.getPrecio() + " --- " + pina.getPrecio()*pina.getKilos() + "<br>";
    datos += peras.getNombre() + " ---- " + peras.getKilos() + " --- " + peras.getPrecio() + " --- " + peras.getPrecio()*peras.getKilos() + "<br>";
    datos += arandanos.getNombre() + " ---- " + arandanos.getKilos() + " --- " + arandanos.getPrecio() + " --- " + arandanos.getPrecio()*arandanos.getKilos() + "<br>";
    datos += kiwi.getNombre() + " ---- " + kiwi.getKilos() + " --- " + kiwi.getPrecio() + " --- " + kiwi.getPrecio()*kiwi.getKilos() + "<br>";
    datos += sandia.getNombre() + " ---- " + sandia.getKilos() + " --- " + sandia.getPrecio() + " --- " + sandia.getPrecio()*sandia.getKilos() + "<br>";
    datos += granada.getNombre() + " ---- " + granada.getKilos() + " --- " + granada.getPrecio() + " --- " + granada.getPrecio()*granada.getKilos() + "<br>";

    var precioTotal = 0;
    var precioMedio = 0;
    var contador = 0;

    /*var texto = "";
    if(manzana.getKilos() != 0){
        texto += manzana.getNombre() + " --Fruta de Invierno-- " + manzana.getConservar() + "\n";
        precioTotal += manzana.getKilos()*manzana.getPrecio();
        contador++;
    }

    if(platanos.getKilos() != 0){
        texto += platanos.getNombre() + " --Fruta de Verano-- " + platanos.getProximidad() + platanos.getRegion() + "\n";
        precioTotal += platanos.getKilos()*platanos.getPrecio();
        contador++;
    }

    if(naranjas.getKilos() != 0){
        texto += naranjas.getNombre() + " --Fruta de Invierno-- " + naranjas.getConservar() + "\n";
        precioTotal += naranjas.getKilos()*naranjas.getPrecio();
        contador++;
    }

    if(nectarina.getKilos() != 0){
        texto += nectarina.getNombre() + " --Fruta de Verano-- " + nectarina.getProximidad() + nectarina.getRegion() + "\n";
        precioTotal += nectarina.getKilos()*nectarina.getPrecio();
        contador++;
    }

    if(pina.getKilos() != 0){
        texto += pina.getNombre() + " --Fruta de Invierno-- " + pina.getConservar() + "\n";
        precioTotal += pina.getKilos()*pina.getPrecio();
        contador++;
    }

    if(peras.getKilos() != 0){
        texto += peras.getNombre() + " --Fruta de Verano-- " + peras.getProximidad() + peras.getRegion() + "\n";
        precioTotal += peras.getKilos()*peras.getPrecio();
        contador++;
    }

    if(arandanos.getKilos() != 0){
        texto += arandanos.getNombre() + " --Fruta de Verano-- " + arandanos.getProximidad() + arandanos.getRegion() + "\n";
        precioTotal += arandanos.getKilos()*arandanos.getPrecio();
        contador++;
    }

    if(kiwi.getKilos() != 0){
        texto += kiwi.getNombre() + " --Fruta de Invierno-- " + kiwi.getConservar() + "\n";
        precioTotal += kiwi.getKilos()*kiwi.getPrecio();
        contador++;
    }

    if(sandia.getKilos() != 0){
        texto += sandia.getNombre() + " --Fruta de Verano-- " + sandia.getProximidad() + sandia.getRegion() + "\n";
        precioTotal += sandia.getKilos()*sandia.getPrecio();
        contador++;
    }

    if(granada.getKilos() != 0){
        texto += granada.getNombre() + " --Fruta de Invierno-- " + granada.getConservar() + "\n";
        precioTotal += granada.getKilos()*granada.getPrecio();
        contador++;
    }

    if(texto != ""){
        alert(texto);
    }*/

    if(precioTotal != 0){
        datos += "Precio total: " + precioTotal + "€" + "<br>";
    }

    if(contador != 0){
        precioMedio = precioTotal/contador;
        datos += "Precio medio: " + precioMedio + "€" + "<br>";
    }
    return datos;
    
}

window.onload = function(){
    document.getElementById("formulario").addEventListener('submit',function(event){
        let validar=validaciones(event);
        if(validar){
            ventana();
            event.preventDefault();
        }
    },false);
    document.getElementById("si").addEventListener('click',mostrarCodigoTarjeta,false);
}

function mostrarCodigoTarjeta(){
    let codigo = document.getElementById("codigoTarjeta");
    let botonSi = document.getElementById("si");
    let botonNo = document.getElementById("no");

    if(botonSi.checked){
        
    }
}

function ventana() {
    let ventanita = window.open("", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    ventanita.document.write(botoncin());
    ventanita.document.write("<input type=button value=Terminar pedido><br>");
    ventanita.document.write("<input type=button value=Volver>");
}

function validaciones(event){
    var nombre = document.getElementById("nombre");
    var nombreLabel= document.getElementById("parrafoNombre"); 
    if(!nombre.validity.valid){
        nombreLabel.style.color = "red";
        event.preventDefault();
        return false;
    }

    var apellidos = document.getElementById("apellidos");
    var apellidosLabel= document.getElementById("parrafoApellidos"); 
    if(!apellidos.validity.valid){
        apellidosLabel.style.color = "red";
        event.preventDefault();
        return false;
    }
    return true;
}

