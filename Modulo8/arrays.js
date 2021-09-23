//Ejercicio 1
console.log('Ejercicio 1');
const price = [100,101,35,20,43,76];
const suma = price.reduce((total,value) => total + value , 0)
console.log('El total es ' + suma);

//Ejercicio 2 
console.log('Ejercicio 2');
const list = [
    {name:'Martin',edad:'23'}, 
    {name:'Lucas',edad:'18'}, 
    {name:'Egdar',edad:'33'}, 
    {name:'Lucía',edad:'28'}, 
    {name:'Florencia',edad:'25'},
    {name:'Eugenia',edad:'26'}
]    
    
list.forEach(element => {
    console.log('El nombre es: ' + element.name)
});

//Ejercicio 3
console.log('Ejercicio 3');
const mayores25 = list.filter(persona => (persona.edad > 25))

console.log(mayores25);

//Ejercicio 4 
console.log('Ejercicio 4');

const de23 = list.find(persona => (persona.edad == 23))

console.log(de23);