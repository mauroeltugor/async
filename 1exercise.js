async function people (){
    const info = await fetch('https://swapi.dev/api/people/', { method: 'GET' });
    const data = await info.json();
    const character = data.results;
    const array = character.map((character) => ({ 
        name: character.name, 
        gender: character.gender,
        birthYear: character['birth_year'], 
        mass: character.mass, 
        height: character.height }));
    return array;
}

async function newCharacters() {
    const infoPeople = await people();
    const filterHeightPersons = infoPeople.filter((person ) =>
     person.height > 170);//map
    console.log(filterHeightPersons);
}

newCharacters();