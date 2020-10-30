class Frutas{
    constructor(kilos, precio, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }
    getNombre(){
        return "nombre" + "" + this.nombre;
    }
}

class FrutasVerano extends Frutas{
    constructor(kilos, precio, nombre, proximidad, region){
        super(kilos, precio, nombre);
        this.proximidad = proximidad;
        this.region = region;
    }
}

class FrutasInvierno extends Frutas{
    constructor(kilos, precio, nombre, conservar){
        super(kilos, precio, nombre);
        this.conservar = conservar;
    }
}

let manzana = new FrutasInvierno(0,2.5,"manzana","no conservar");
let peras = new FrutasVerano(0,1.79,"peras","de proximidad","Salamanca");
let platanos = new FrutasVerano(0,2.00,"platanos","de proximidad", "Canarias");
let arandanos = new FrutasVerano(0,4.48,"arandanos","no de proximidad","Cantabria");
let naranjas = new FrutasInvierno(0,1.43,"naranjas","no conservar");
let kiwi = new FrutasInvierno(0,3.85,"kiwi","no conservar");
let nectarina = new FrutasVerano(0,1.73,"nectarinas","de proximidad","Extremadura");
let sandia = new FrutasVerano(0,0.53,"sandia","de proximidad","Andalucía");
let piña = new FrutasInvierno(0,3.59,"pina","conservar");
let granada = new FrutasInvierno(0,0.56,"granada","conservar");



let kilosTotal = 0;
function anadirCompra(){
    let kilos = parseInt(prompt("¿Cuántos kilos desea comprar?"));
    kilosTotal = kilos + kilosTotal;
    console.log(kilosTotal);
}

/*function boton(){
    document.getElementById("cajaTexto").value="";
    var precioMedio = 0;
    var precioTotal = 0;
    var contador = 0;
    for(var i = 0;i<frutitas.length;i++){
        document.getElementById("cajaTexto").value+=frutitas[i]+ " Kilos: " + kilos[i] + " Precio: " + cantidad[i]*precioKg[i] + "\n";
        precioTotal += cantidad[i]*precioKg[i];
        if(cantidad[i] != 0){
            precioMedio += precioKg[i]*cantidad[i];
            contador+=cantidad[i];
        }
    }
    precioMedio/=contador;
    document.getElementById("cajaTexto").value+="Precio total: " + precioTotal + "\n";
    document.getElementById("cajaTexto").value+="Precio medio: " + precioMedio;
}*/