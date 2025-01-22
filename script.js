// Aqui irá la logica de la calculadora de propinas
// pasos
// 1. Que se muestre un cuadro de entrada (input) para ingresar el monto total de la cuenta (dato float).
//2. Que se muestre otro cuadro de entrata para solicitar el porcentaje de propina que se pagará (dato int).
// 3. Para calcular la propina, multiplica el porcentajePropina x montoCuenta y el resultado lo divide entre 100.
// 4. ahora suma el montoCuenta + propina y será totalconPropina
// 5. imprime el resultado para mostrarlo.

let montoCuenta = parseFloat(prompt("Ingresa el monto total de la cuenta"));
let porcentajePropina =parseInt(prompt("Ingrese el % de propina que desea pagar"));
let propina = (montoCuenta * porcentajePropina) / 100;
let totalconPropina = montoCuenta + propina;

console.log("La propina es: ");
console.log("El total de la cuenta con la propina es: ");



// Se validará que el valor que se ingrese sea un número y mayor que cero.


