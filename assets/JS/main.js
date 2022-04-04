function somDeAnimal(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Referencia constante da lista de teclas dos animais. 

let contador = 0;

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = somDeAnimal; // Som do animal.

    contador = contador + 1; //Contador (0) = Contador + 1 | Irá somar o contador com valor anterior, mais 1, até esta codição se tornar falsa, ou seja, até o contador não ser mais < 16.

    console.log(contador);
}