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