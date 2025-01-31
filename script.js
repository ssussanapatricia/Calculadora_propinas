// Aqui irá la logica de la calculadora de propinas
// pasos
// 1. Que se muestre un cuadro de entrada (input) para ingresar el monto total de la cuenta (dato float).
//2. Que se muestre otro cuadro de entrata para solicitar el porcentaje de propina que se pagará (dato int).
// 3. Para calcular la propina, multiplica el porcentajePropina x montoCuenta y el resultado lo divide entre 100.
// 4. ahora suma el montoCuenta + propina y será totalconPropina
// 5. imprime el resultado para mostrarlo.

window.alert("Hola mundooo, esta es la calculadora de propinas");

const formulario = document.getElementById("formulario-propina");
const montoCuentaInput = document.getElementById("montoCuenta");
const porcentajePropinaInput = document.getElementById("porcentajePropina");
const propinaSpan = document.getElementById("propina");
const totalconPropinaSpan = document.getElementById("totalconPropina");


document.getElementById("Calcular").addEventListener("click", function () {
    const montoCuenta = parseFloat(montoCuentaInput.value);
    const porcentajePropina = parseFloat(porcentajePropinaInput.value);

    if (isNaN(montoCuenta) || isNaN(porcentajePropina)) {
        alert("Ingresa valores válidos");
        return;
    }

    const propina = (montoCuenta*porcentajePropina) / 100;
    const totalconPropina = montoCuenta + propina;

    propinaSpan.textContent = propina;
    totalconPropinaSpan.textContent = totalconPropina;
});

//let montoCuenta = parseFloat(("Ingresa el monto total de la cuenta"));
//let porcentajePropina =parseInt(("Ingrese el % de propina que desea pagar"));
//let propina = (montoCuenta * porcentajePropina) / 100;
//let totalconPropina = montoCuenta + propina;

//console.log("La propina es: ");
//console.log("El total de la cuenta con la propina es: ");



// Se validará que el valor que se ingrese sea un número y mayor que cero.


