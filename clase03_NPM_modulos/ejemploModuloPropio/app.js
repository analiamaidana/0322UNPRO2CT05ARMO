const calculadora = require('./calculadora/index')
const alumnos = require('./db/alumnos')

// console.log(calculadora.sumar(2,3));
// console.log(calculadora.restar(2,3));
// console.log(calculadora.multiplicar(2,3));
// console.log(calculadora.dividir(2,3));

// Escribir una función que reciba por parámetro un ARRAY de alumnos y me retorne un array nuevo con los aprobados
let aprobados = (arrayAlumnos) => {
    let arrayDeAprobados = [];
    for (let i = 0; i < arrayAlumnos.length; i++) {
        const alumno = arrayAlumnos[i];
        if (alumno.calificacion >= 4) {
            arrayDeAprobados.push(alumno.nombre + " " + alumno.apellido)
        }
    }
    return arrayDeAprobados
}

console.log(aprobados(alumnos.lista));

