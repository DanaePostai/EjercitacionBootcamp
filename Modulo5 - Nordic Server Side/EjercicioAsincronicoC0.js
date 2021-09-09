
// console.log('Con continue')
// for (let i =0 ; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }
// console.log('Con break')
// for (let i =0 ; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// let pais = {
//     nombre: 'Agentina', 
//     poblacion: 258121456,
//     decirnacionalidad: function() {
//         return 'Yo naci en '+ this.nombre    
//     }
// }

// console.log(pais.decirnacionalidad())

// let curso = {
//     cantalumnos : 50,
//     docentes: ['nacho' , 'javier'],
//     horarios : '19 a 21 hs.',
//     notificaciones: function () {
//         return 'El horario del curso es ' + this.horarios;
//     }
// }

// function Cursos(cantalumnos, docentes,horarios) {
//     this.cantalumnos = cantalumnos;
//     this.docentes = docentes;
//     this.horarios = horarios;
//     this.notificaciones = function () {
//         return 'El horario del curso es ' + this.horarios;
//     }
// }

// let cursoDeProgramacion = new Cursos(80,['jose','dana'],'18 a 21 hs');
// console.log(cursoDeProgramacion)
// console.log(cursoDeProgramacion.notificaciones())
// console.log(curso.notificaciones());
// console.log('La cantidad de alumnos es de: '+curso.cantalumnos)


////////ARRAY

// let numeros = [1,2,3,4,5];

// console.log(numeros);

// let numerosModificados = numeros.filter(numero => numero > 4);
// console.log(numerosModificados);

// let numerosModificadosE = numeros.filter(numero => {
//     return numero > 1
// });
// console.log(numerosModificadosE);


/////////EJRCICIOS

//Ejercicio 1

function CuentaBancaria (nomTitular,numCuenta, apeTitular,saldo) {
    this.nomTitular = nomTitular;
    this.numCuenta = numCuenta;
    this.apeTitular = apeTitular;
    this.saldo = saldo;
    this.movimientos = []; 
    this.nombreCompleto = function () {
        return 'El nombre completo del titular es: ' + this.apeTitular +', '+ this.nomTitular;
    }
    this.debito = function (debito) {
        if(debito > this.saldo){
            return "Saldo insuficiente...No se realizo operacion"
        }
        this.saldo -= debito; 
        this.movimientos.push(-debito);
        return  "Operacion realizada..Su saldo es: "+ this.saldo.toFixed(2);
    }
    this.acreditacion = function (acreditar) {
        this.saldo += acreditar; 
        this.movimientos.push(acreditar);
        return  "Operacion realizada..Su saldo es: "+ this.saldo.toFixed(2);
    }
    this.mostrarSaldo = function () { 
        return  "Su saldo es: "+ this.saldo.toFixed(2);
    }
    this.historialMovimientos = function () { 
        return  "Su historial es: "+ this.movimientos;
    }
    this.historialDiferenciado = function () { 
        let debitos = [];
        let credito = [];
        this.movimientos.forEach(element => {
            if(element > 0){
                credito.push(element);
            }else{
                debitos.push(element);
            }  
        });
        console.log("Historia Creditos: " + credito);
        console.log("Historial Debitos: " + debitos);
    }
    this.totalesMovimientos = function () { 
        let debitos = 0;
        let credito = 0;
        this.movimientos.forEach(element => {
            if(element > 0){
                credito += element;
            }else{
                debitos += Math.abs(element);
            }  
        });
        console.log("Total Acreditado: " + credito);
        console.log("Total Debitado: " + debitos);
    }

}

cuentaPropia =  new CuentaBancaria('Dana', 658435415321 ,'Postai', 6548.14)
cuentaPropia1 =  new CuentaBancaria('Nicolas', 5487521289 ,'Suarez', 9752.45)
cuentaPropia2 =  new CuentaBancaria('Carlos', 98789436154 ,'Alvarez', 654228.25)
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Primera Cuenta:');
console.log(cuentaPropia.nombreCompleto());
console.log(cuentaPropia.mostrarSaldo());
console.log(cuentaPropia.debito(500));
console.log(cuentaPropia.debito(8000));
console.log(cuentaPropia.acreditacion(800));
console.log(cuentaPropia.mostrarSaldo());
console.log(cuentaPropia.historialMovimientos());
cuentaPropia.historialDiferenciado();
cuentaPropia.totalesMovimientos();
console.log('///////////////////////////////');
console.log('///////////////////////////////');

console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Segunda Cuenta:');
console.log(cuentaPropia1.nombreCompleto());
console.log(cuentaPropia1.mostrarSaldo());
console.log(cuentaPropia1.debito(5000));
console.log(cuentaPropia1.debito(15000));
console.log(cuentaPropia1.acreditacion(975));
console.log(cuentaPropia1.mostrarSaldo());
console.log(cuentaPropia1.historialMovimientos());
cuentaPropia1.historialDiferenciado();
cuentaPropia1.totalesMovimientos();
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('///////////////////////////////');
console.log('Tercera Cuenta:');
console.log(cuentaPropia2.nombreCompleto());
console.log(cuentaPropia2.mostrarSaldo());
console.log(cuentaPropia2.debito(100));
console.log(cuentaPropia2.debito(250000));
console.log(cuentaPropia2.acreditacion(78954));
console.log(cuentaPropia2.mostrarSaldo());
console.log(cuentaPropia2.historialMovimientos());
cuentaPropia2.historialDiferenciado();
cuentaPropia2.totalesMovimientos();
console.log('///////////////////////////////');
console.log('///////////////////////////////');



