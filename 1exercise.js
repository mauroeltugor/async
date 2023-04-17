export const message = 'Sorry we are having problems try again :(';
export const done = 'all ran good';

const people = async () => {
    try {
        const info = await fetch('https://swapi.dev/api/people/', { method: 'GET' });
        const data = await info.json();
        const character = data.results;
        const array = character.map((character) => ({
            name: character.name,
            gender: character.gender,
            birthYear: character['birth_year'],
            mass: character.mass,
            height: character.height
        }));
        return array;
    } catch (err) {
        console.log(message);
    }
}

const newCharacters = async () => {
    try {
        const infoPeople = await people();
        const filterHeightPersons = infoPeople.filter((person) =>
            person.height > 170);//map
        console.log(filterHeightPersons);
    } catch (err) {
        console.log(message);
    }
}

newCharacters();