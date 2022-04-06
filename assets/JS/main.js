function somDeAnimal(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla'); // Referencia constante da lista de teclas dos animais. 

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const animal = tecla.classList[1];

    const idAudio = `#som__${animal}`; //Template String

    //console.log(idAudio, tecla)

    tecla.onclick = function () {
        somDeAnimal(idAudio);
    }

    contador = contador + 1; //Contador (0) = Contador + 1 | Irá somar o contador com valor anterior, mais 1, até esta codição se tornar falsa, ou seja, até o contador não ser mais < 16.

    //console.log(contador);
}