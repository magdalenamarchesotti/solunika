// EJERCICIO 1
const numeros = document.querySelector('.numeros');
const resultado = document.querySelector('.resultado');
let numeroUno = parseInt(prompt("Ingresá un número"));
let numeroDos = parseInt(prompt("Ingresá otro número"));
let numeroTres = parseInt(prompt("Ingresá un último número"));

numeros.textContent = `Ingresaste los números ${numeroUno}, ${numeroDos} y ${numeroTres}`;

if (numeroTres > numeroUno && numeroTres > numeroDos) {
    if (numeroDos > numeroUno) {
        resultado.textContent = `El orden es ${numeroTres}, ${numeroDos} y ${numeroUno}`;
    } else if (numeroUno > numeroDos) {
        resultado.textContent = `El orden es ${numeroTres}, ${numeroUno} y ${numeroDos}`;
    }
}

else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    if (numeroUno > numeroTres) {
        resultado.textContent = `El orden es ${numeroDos}, ${numeroUno} y ${numeroTres}`;
    } else if (numeroTres > numeroUno) {
        resultado.textContent = `El orden es ${numeroDos}, ${numeroTres} y ${numeroUno}`;
    }
}

else if (numeroUno > numeroDos && numeroUno > numeroTres) {
    if (numeroDos > numeroTres) {
        resultado.textContent = `El orden es ${numeroUno}, ${numeroDos} y ${numeroTres}`;
    } else if (numeroTres > numeroDos) {  
        resultado.textContent = `El orden es ${numeroUno}, ${numeroTres} y ${numeroDos}`;
    }
}