let sumar = (a,b) => a + b;

let restar = (a,b) => {
    let valorDeRetorno = a-b
    return valorDeRetorno;
}

function multiplicar(a,b) {
    return a * b;
}

function dividir(a,b) {
    return a / b;
}

function calculadora(a, b, callback) {
    return callback(a, b)
}

console.log(calculadora(2, 2, sumar))
console.log(calculadora(2, 3, sumar))
console.log(calculadora(2, 4, sumar))
console.log(calculadora(2, 5, sumar))

console.log(calculadora(2, 2, restar))
console.log(calculadora(2, 3, restar))
console.log(calculadora(2, 4, restar))
console.log(calculadora(2, 5, restar))

console.log(calculadora(2, 2, multiplicar))
console.log(calculadora(2, 3, multiplicar))
console.log(calculadora(2, 4, multiplicar))
console.log(calculadora(2, 5, multiplicar))

console.log(calculadora(2, 2, dividir))
console.log(calculadora(2, 3, dividir))
console.log(calculadora(2, 4, dividir))
console.log(calculadora(2, 5, dividir))

