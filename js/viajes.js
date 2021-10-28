var dias;
var preciohotel;
var nombre="Pepe";
var correo;
var lugar;
var ninos;
var adultos=100;
var precio;
var km = 150;
var Aguascalientes = 124;
var BajaCalifornia = 1732;
var BajaCaliforniaSur = 1153;
var Campeche = 1497;
var Chiapas = 1191;
var Chihuahua = 1070;
var CoahuilaDeZaragoza = 844;
var Colima = 413;
var Durango = 526;
var EstadoDeMexico = 336;
var Guanajuato = 75;
var Guerrero = 727;
var Hidalgo = 385;
var Jalisco = 219;
var MichoacanDeOcampo = 198;
var Morelos = 509;
var Nayarit = 457;
var NuevoLeon = 743;
var Oaxaca = 825;
var Puebla = 498;
var Querétaro = 146;
var QuintanaRoo = 1983;
var SanLuisPotosi = 179;
var Sinaloa = 1060;
var Sonora = 1664;
var Tabasco = 1161;
var Tamaulipas = 597;
var Tlaxcala = 476;
var Veracruz = 736;
var Yucatan = 1741;
var Zacatecas = 244;

function recibir(){
    nombre=document.getElementById("form_name").value;
    correo=document.getElementById("form_email").value;
    lugar=document.getElementById("lugar").value;
    ninos=document.getElementById("nninos").value;
    adultos=document.getElementById("nadultos").value;
    dias=document.getElementById("diasid").value;

    if(adultos=="uno"){
        preciohotel=100*1;
    }if(adultos=="dos"){
        preciohotel=100*2;
    }if(adultos=="tres"){
        preciohotel=100*3;
    }if(adultos=="cuatro"){
        preciohotel=100*4;
    }if(adultos=="cinco"){
        preciohotel=100*5;
    }if(adultos=="seis"){
        preciohotel=100*6;
    }if(adultos=="siete"){
        preciohotel=100*7;
    }if(adultos=="ocho"){
        preciohotel=100*8;
    }if(adultos=="nueve"){
        preciohotel=100*9;
    }

    if(ninos=="cero"){
        preciohotel+=50*0;
    }if(ninos=="uno"){
        preciohotel+=50*1;
    }if(ninos=="dos"){
        preciohotel+=50*2;
    }if(ninos=="tres"){
        preciohotel+=50*3;
    }if(ninos=="cuatro"){
        preciohotel+=50*4;
    }if(ninos=="cinco"){
        preciohotel+=50*5;
    }if(ninos=="seis"){
        preciohotel+=50*6;
    }if(ninos=="siete"){
        preciohotel+=50*7;
    }if(ninos=="ocho"){
        preciohotel+=50*8;
    }if(ninos=="nueve"){
        preciohotel+=50*9;
    }
    
        if(lugar==1){
            precio=Aguascalientes*km;
        } else if(lugar==2){
            precio=BajaCalifornia*km;
        } else if(lugar==3){
            precio=BajaCaliforniaSur*km;
        } else if(lugar==4){
            precio=Campeche*km;
        } else if(lugar==5){
            precio=Chiapas*km;
        } else if(lugar==6){
            precio=Chihuahua*km;
        } else if(lugar==7){
            precio=CoahuilaDeZaragoza*km;
        } else if(lugar==8){
            precio=Colima*km;
        } else if(lugar==9){
            precio=Durango*km;
        } else if(lugar==10){
            precio=EstadoDeMexico*km;
        } else if(lugar==11){
            precio=Guanajuato*km;
        } else if(lugar==12){
            precio=Guerrero*km;
        } else if(lugar==13){
            precio=Hidalgo*km;
        } else if(lugar==14){
            precio=Jalisco*km;
        } else if(lugar==15){
            precio=MichoacanDeOcampo*km;
        } else if(lugar==16){
            precio=Morelos*km;
        } else if(lugar==17){
            precio=Nayarit*km;
        } else if(lugar==18){
            precio=NuevoLeon*km;
        } else if(lugar==19){
            precio=Oaxaca*km;
        } else if(lugar==20){
            precio=Puebla*km;
        } else if(lugar==21){
            precio=Querétaro*km;
        } else if(lugar==22){
            precio=QuintanaRoo*km;
        } else if(lugar==23){
            precio=SanLuisPotosi*km;
        } else if(lugar==24){
            precio=Sinaloa*km;
        } else if(lugar==25){
            precio=Sonora*km;
        } else if(lugar==26){
            precio=Tabasco*km;
        } else if(lugar==27){
            precio=Tamaulipas*km;
        } else if(lugar==28){
            precio=Tlaxcala*km;
        } else if(lugar==29){
            precio=Veracruz*km;
        } else if(lugar==30){
            precio=Yucatan*km;
        } else if(lugar==31){
            precio=Zacatecas*km;
        }

    document.getElementById("escribir").innerHTML="Tu nombre es: "+nombre+"<br>Tu correo es: "+correo+"<br>Tu destino es: "+lugarid[lugar-1]+"<br>Numero de adultos: "+adultos+"<br>Numero de niños: "+ninos+"<br>El costo total del viaje es de: "+precio+"<br>El costo total del hotel es: "+preciohotel;
}

function mota(){
    nombre=document.getElementById("form_name").value;
    correo=document.getElementById("form_email").value;
    lugar=document.getElementById("lugar").value;
    ninos=document.getElementById("nninos").value;
    adultos=document.getElementById("nadultos").value;
    dias=document.getElementById("diasid").value;

    if(adultos=="uno"){
        preciohotel=100*1;
    }if(adultos=="dos"){
        preciohotel=100*2;
    }if(adultos=="tres"){
        preciohotel=100*3;
    }if(adultos=="cuatro"){
        preciohotel=100*4;
    }if(adultos=="cinco"){
        preciohotel=100*5;
    }if(adultos=="seis"){
        preciohotel=100*6;
    }if(adultos=="siete"){
        preciohotel=100*7;
    }if(adultos=="ocho"){
        preciohotel=100*8;
    }if(adultos=="nueve"){
        preciohotel=100*9;
    }

    if(ninos=="cero"){
        preciohotel+=50*0;
    }if(ninos=="uno"){
        preciohotel+=50*1;
    }if(ninos=="dos"){
        preciohotel+=50*2;
    }if(ninos=="tres"){
        preciohotel+=50*3;
    }if(ninos=="cuatro"){
        preciohotel+=50*4;
    }if(ninos=="cinco"){
        preciohotel+=50*5;
    }if(ninos=="seis"){
        preciohotel+=50*6;
    }if(ninos=="siete"){
        preciohotel+=50*7;
    }if(ninos=="ocho"){
        preciohotel+=50*8;
    }if(ninos=="nueve"){
        preciohotel+=50*9;
    }
    
        if(lugar==1){
            precio=Aguascalientes*km;
        } else if(lugar==2){
            precio=BajaCalifornia*km;
        } else if(lugar==3){
            precio=BajaCaliforniaSur*km;
        } else if(lugar==4){
            precio=Campeche*km;
        } else if(lugar==5){
            precio=Chiapas*km;
        } else if(lugar==6){
            precio=Chihuahua*km;
        } else if(lugar==7){
            precio=CoahuilaDeZaragoza*km;
        } else if(lugar==8){
            precio=Colima*km;
        } else if(lugar==9){
            precio=Durango*km;
        } else if(lugar==10){
            precio=EstadoDeMexico*km;
        } else if(lugar==11){
            precio=Guanajuato*km;
        } else if(lugar==12){
            precio=Guerrero*km;
        } else if(lugar==13){
            precio=Hidalgo*km;
        } else if(lugar==14){
            precio=Jalisco*km;
        } else if(lugar==15){
            precio=MichoacanDeOcampo*km;
        } else if(lugar==16){
            precio=Morelos*km;
        } else if(lugar==17){
            precio=Nayarit*km;
        } else if(lugar==18){
            precio=NuevoLeon*km;
        } else if(lugar==19){
            precio=Oaxaca*km;
        } else if(lugar==20){
            precio=Puebla*km;
        } else if(lugar==21){
            precio=Querétaro*km;
        } else if(lugar==22){
            precio=QuintanaRoo*km;
        } else if(lugar==23){
            precio=SanLuisPotosi*km;
        } else if(lugar==24){
            precio=Sinaloa*km;
        } else if(lugar==25){
            precio=Sonora*km;
        } else if(lugar==26){
            precio=Tabasco*km;
        } else if(lugar==27){
            precio=Tamaulipas*km;
        } else if(lugar==28){
            precio=Tlaxcala*km;
        } else if(lugar==29){
            precio=Veracruz*km;
        } else if(lugar==30){
            precio=Yucatan*km;
        } else if(lugar==31){
            precio=Zacatecas*km;
        }
        
    document.open(),
    document.write("Tu nombre es: "+nombre+"<br>Tu correo es: "+correo+"<br>Tu destino es: "+lugarid[lugar-1]+"<br>Numero de adultos: "+adultos+"<br>Numero de niños: "+ninos+"<br>El costo total del viaje es de: "+precio+"<br>El costo total del hotel es: "+preciohotel),
    document.close()
}




    let lugarid = ['Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'Durango',
    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Michoacán de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas']
