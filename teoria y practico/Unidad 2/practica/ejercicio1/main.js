/* 
1.- Construir 2 clases (Persona y Empleado)
Persona debe tener:
 nombre (pública)
 edad (pública)
 altura (privada)
 peso (privada)
Empleado es una persona y tiene un sueldo (privado).
Ambas clases deben tener un método público que permita imprimir un resumen de su
información.
Cree instancias de las clases y compruebe su funcionamiento.
Compruebe el polimorfismo creando una función que reciba por parámetro cualquiera de
los objetos e imprima su información.
Agregue un método a la clase Empleado que permita llevar la cantidad de instancias
creadas. 

*/

class Persona {
    #altura
    #peso

    constructor(nombre, edad, altura, peso) {
        this.nombre = nombre
        this.edad = edad
        this.#altura = altura
        this.#peso = peso

    }
    get altura() {
        return this.#altura
    }
    get peso() {
        return this.#peso
    }
    //usamos get la llamada es como Objeto.publicarPersona si no usamos get hay que agregar los Objeto.publicarPersona()
    resumen() {
        return `nombre:${this.nombre},edad:${this.edad}, altura:${this.#altura}, peso:${this.#peso},`
    }

}


class Empleado extends Persona {
    #sueldo
    static contador = 0;
    constructor(nombre, edad, altura, peso, sueldo) {
        super(nombre, edad, altura, peso)
        this.#sueldo = sueldo

        Empleado.contador++;
    }
    get sueldo() {
        return this.#sueldo
    }
    static totalEmpleados() {
        return `Total de empleados creados: ${Empleado.contador}`;
    }


    resumen() {
        return `${super.resumen()}, Sueldo: ${this.#sueldo}`;

    }
}
function imprimir(objeto) {
    console.log("\nfuncion imprimir:" + objeto.resumen() + "\n");
}

const Opersona1 = new Persona("martin", 35, 1.75, 90);
const Oempleado1 = new Empleado("Marcos", 56, 1.65, 90, 1000);
const Oempleado2 = new Empleado("Pablo", 16, 1.50, 55, 4000);



console.log(Opersona1.resumen());
console.log(Oempleado1.resumen());
console.log(Oempleado2.resumen());


imprimir(Opersona1);
imprimir(Oempleado1);


console.log(Empleado.totalEmpleados());