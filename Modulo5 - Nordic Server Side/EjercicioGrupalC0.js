function Computadora(ram,cpu,disco,monitor,gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;

}

let compu = new Computadora('3Gb', 'intelcore i7', '256GB', '13 pulgadas', true);
let compu1 = new Computadora('4Gb', 'intelcore i3', '526GB', '20 pulgadas', false);
let compu2 = new Computadora('8Gb', 'intelcore i5', '1T', '24 pulgadas', false);
let compu3 = new Computadora('16Gb', 'intelcore i9', '2T', '22 pulgadas', true);
let compu4 = new Computadora('20Gb', 'Ryzer 5', '4T', '27 pulgadas', true);

let computadora = [];

computadora.push(compu);
computadora.push(compu1);
computadora.push(compu2);
computadora.push(compu3);
computadora.push(compu4);

console.log('Tenemos ' + computadora.length + ' computadoras');

console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Lista de computadoras: ');
console.log(computadora);

let compuConGPU=[];

computadora.forEach(element => {

    if(element.gpu){
        compuConGPU.push(element)
    }

});
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Lista de computadoras con GPU: ');
console.log(compuConGPU)


function calculoConsumo(km) {
    return (km * 2)/100;
}

function calculoCosto(valorLitro,cantKm) {
    return valorLitro * calculoConsumo(cantKm);
}
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Costo del Viaje: ' + calculoCosto(98.00, 500));
console.log('///////////////////////////////');
console.log('///////////////////////////////');

//Crear un array que contenga números del 1 al 100. Retornar un nuevo array que contenga todos los números multiplicados por dos

let numeros = [];

for (let index = 1; index <= 100; index++) {
    numeros[index] = index;

}

let multiplos2 = numeros.filter(numero => ((numero % 2) == 0))

console.log('Multiplos de 2');
console.log(multiplos2);

//Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5

let multiplosMayor5 = multiplos2.filter(numero => (numero > 5));

console.log('Mayores a 5');
console.log(multiplosMayor5);

//Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
console.log('Primero Mayor a 10');
console.log(multiplosMayor5.find(numero => numero > 10));

//Dado el siguiente array filtremos a los pokemones con poder menor a 10.

let pokemones = [
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 },
]

let debiles = pokemones.filter(pokemon => (pokemon.poder < 10))

console.log('Pokemones Debiles');
console.log(debiles);