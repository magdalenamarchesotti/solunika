// EJERCICIO 2
let arrayNumeros = [];
for (let i = 0; i < 4; i ++) {
arrayNumeros.push (parseInt(prompt('Ingresá un número')));
}

console.log(arrayNumeros);

const capicua = (numero) => {
let array = numero.split('');
console.log(array);

let arrayReverse = array.reverse();
console.log(arrayReverse);

if (numero == arrayReverse.join('')) {
    console.log ("Es un número capicúa")
} else {
    console.log ("No es un número capicúa")
}
}