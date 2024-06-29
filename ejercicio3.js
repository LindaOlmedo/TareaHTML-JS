/*
Exercise #3 (sugerencia reduce() )
Escribe un programa para calcular la suma y el producto (multiplicación) de una matriz de números. Imprime la suma y el producto.
Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.

*/
console.log("Ejercicio n°3");

const ejercicio3 = [1, 2, 3, 4];

// Obtener la sumatoria de todos los valores
const suma = ( array ) => {
    let sumatoria = 0;
    for (let index = 0; index < array.length; index++) {
        sumatoria = sumatoria + array[index];
    }
    return sumatoria;4
}

console.log( ejercicio3.reduce( (sumatoria, currentValue)=> sumatoria + currentValue ) );
console.log( ejercicio3.reduce( (sumatoria, currentValue)=> sumatoria * currentValue ) );