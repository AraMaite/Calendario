let fecha = new Date("08/09/2024");
<<<<<<< HEAD
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector ("#dias");
let parrafoHoras = document.querySelector ("#horas");
let parrafoMinutos = document.querySelector ("#minutos");
let parrafoSegundos = document.querySelector ("#segundos");
let parrafecha = document.querySelector ("#fecha");
let cuentaAtras = document.querySelector ("#cuenta-atras");

spanFecha.inneText = fecha.toLocaleDateString();

let Intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;
    
    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;
    
    let dias = Math.floor (distancia / msPorDia);
    let horas = Math.floor ((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor ((distancia % msPorHora) / msPorMinutos); 
    let segundos =Math.floor ((distancia % msPorMinutos) / msPorSegundo);


    parrafoDias.inneText = dias;
    parrafoHoras.inneText = horas < 10 ? "0" + horas : horas; 
    parrafoMinutos.inneText = minutos;
    parrafoSegundos.inneText = segundos;

    if (distancia < 0){
        clearInterval(Intervalo);
        cuentaAtras.innerHTML = <p class="grande">¡LLEGO LE GRAN DIA!</p>
    }
    
}, 1000)
=======
let msFecha = fecha.getTime();                
>>>>>>> 027f1d4e488167bf8c694eed8744affb6bb25ac6
