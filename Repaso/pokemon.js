async function fetchPoke(){
    
    let res =  await fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    let resultado = await res.json();
    console.log('Obtener el nombre de tu pokemon favorito utilizando async/await o promesas: '+resultado.name);
}

async function fetchPoke15(){
   
    let res =  await fetch ('https://pokeapi.co/api/v2/pokemon/?limit=15');
    let resultado = await res.json();
    let names = resultado.results.map(poke => poke.name);
    console.log('Obtener el nombre de 15 pokemones : ' + names);
}

async function fetchPokeCrudo(){
    let res =  await fetch ('https://pokeapi.co/api/v2/pokemon/?limit=15');
    let resultado = await res.json();
    console.log(resultado);
}

async function fetchPoke15Peso(){
    let res =  await fetch ('https://pokeapi.co/api/v2/pokemon/?limit=15');  
    let resultado = await res.json();   
    console.log('Obtener un listado de 15 pokemones. De estos 15, mostrar por consola los que tengan peso mayor a 150');
  
    for (poke of resultado.results) {
      
      let resp =  await fetch (poke.url);
      let resultadop = await resp.json();
      if (resultadop.weight > 150){
        console.log(poke.name + ' - '+ resultadop.weight);
      }
    }
  
}


fetchPoke();
fetchPoke15();
//fetchPokeCrudo();
fetchPoke15Peso();