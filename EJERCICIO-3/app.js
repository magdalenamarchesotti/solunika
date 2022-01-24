// EJERCICIO 3
const numerosPares = [];
const numerosImpares = [];
let sumaPares = 0;
let sumaImpares = 0;
let promedioMayor = 0;

const sumaParesImpares = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
          if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
            sumaPares = sumaPares + numeros[i];
          } else {
              numerosImpares.push(numeros[i]);
              sumaImpares = sumaImpares + numeros[i];
          }
        } 
    const promedioPares = sumaPares / numerosPares.length;
    const promedioImpares = sumaImpares / numerosImpares.length;
    if (promedioPares > promedioImpares) {
        promedioMayor = promedioPares;
        console.log ('El promedio de los numeros pares es mayor', promedioPares)
    } else {
        promedioMayor = promedioImpares;
        console.log ('El promedio de los numeros impares es mayor', promedioImpares)
    }
        return {
            sumaPares, sumaImpares, promedioMayor
        }
  }

console.log(sumaParesImpares([1, 8, 2, 63, 15, 4, 57]));
