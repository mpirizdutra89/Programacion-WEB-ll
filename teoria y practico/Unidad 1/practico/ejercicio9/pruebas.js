/* let name = "martin"

function saludar() {
    console.log(`Hola ${name}`)
}

name = "pepe"
saludar() */
// Hola pepe

/* function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}
let name = "John";

let work = makeWorker();
work(); // Pete
 */
/* function makecouter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter = makecouter(); // counter = function () { return count++ }
let counter2 = makecouter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1     */

/* function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    }
    this.down = function () {
        return --count;
    }

}
let counter = new Counter();
console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1 */

/* let phrase = "Hello";
if (true) {
    let user = "John";
    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi(); // Hello, John

function sum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(1)(2)); // 3
 */
/* let num = 1
function func() {
    console.log(num)
    let num = 2


}
console.log(func()) */ // undefined Escuandp toda funcion que no tiene un retorno espesifico devulve  undefined
/*
Explicación:
Hoisting: En JavaScript, las declaraciones de variables con let (y const) son elevadas a la parte superior de su contexto de ejecución, pero no se inicializan hasta que se alcanza la línea donde están definidas. Esto provoca un error cuando se intenta acceder a num antes de que se haya inicializado en la función func().

Acceso a la variable: Dentro de la función func(), JavaScript intenta acceder a num antes de que la variable let num = 2 sea ejecutada, lo que genera un error de referencia. Esto es conocido como el "temporal dead zone" (zona muerta temporal).

*/

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function () {
            console.log(i);
            return i;
        };
        shooters.push(shooter());
        i++;
    }
    return shooters;
}
let army = makeArmy();
console.log(army);  // 10
//explicacion
// El código crea un array de funciones shooters. Cada función debería mostrar su número. Pero no lo hace. Muestra 10 en cada llamada.
// La razón es que todas las funciones comparten el mismo entorno léxico. Todas ellas se crean en un solo ciclo for, que se ejecuta una vez.
// En ese ciclo, se incrementa i desde 0 a 10. Cuando las funciones son llamadas, ven el mismo i: 10.   */  // 10
// Solución: Usar let i en lugar de var i en el ciclo for.
// Cambiemos var por let en el ciclo for:   */  // 0    1    2    3    4    5    6    7    8    9
// function makeArmy() {
//     let shooters = [];
//     for (let i = 0; i < 10; i++) {
//         let shooter = function () {
//             console.log(i);
//             return i;
//         };
//         shooters.push(shooter);
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0](); // 0
// army[1](); // 1

/* function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
            return i;
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
console.log(army[0]()); // 0 0 un cero es del consolo log de la funcion y el otro del array
console.log(army[1]()); // 1    */