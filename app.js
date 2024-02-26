
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// ctrl f para buscar (find)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos } ${(intentos === 1) ? 'intento':'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{   //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es MENOR");
        }
        else{
            asignarTextoElemento('p',"El numero secreto es MAYOR");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }
    else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
       
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto!");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();