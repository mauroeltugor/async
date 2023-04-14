
const pokemonsFunction = async() => {
    const info = await fetch('https://pokeapi.co/api/v2/generation/', { method: 'GET' });
    const data = await info.json();
    const generation = data.results;
    const array = generation.map((pokemon) =>({
        name: pokemon.name,
        url: pokemon.url
    }))
    return array;
}
    
const newestGenerationFunction = async() =>{
    const infoPokemons = await pokemonsFunction();
    const newestGeneration =  infoPokemons.filter((newPokemon) => newPokemon.name > 'v')
    console.log(newestGeneration);
}

newestGenerationFunction();
  