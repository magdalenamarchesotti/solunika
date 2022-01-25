// EJERCICIO 2
let arrayNumeros = [];
let agregarNumeros = '';

for (let i = 0 ; i < 4 ; i++) {
    agregarNumeros = parseInt(prompt("Ingresá un parámetro"));
    if (isNaN(agregarNumeros)) {
        alert ('Sólo números por favor!');
    } else {
        arrayNumeros.push(agregarNumeros);
    }
}

console.log(arrayNumeros);

const capicua = ((numero) => {
    let array = numero.split('');
    console.log(array);

    let arrayReverse = array.reverse();
    console.log(arrayReverse);
    console.log(numero);
    console.log(arrayReverse.join(''));

    if (numero == arrayReverse.join('')) {
        console.log('Es un número capicua');
    } else {
        console.log('No es un número capicua');
    }
})

for (let i = 0; i < arrayNumeros.length; i++) {
    capicua(arrayNumeros[i].toString());
}

arrayNumeros.sort((a, b) => a - b);
console.log('Array ordenado de menor a mayor:', arrayNumeros)