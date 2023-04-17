import { message } from "./1exercise.js";
import { done } from "./1exercise.js";

const people1 = async () => {
    const info1 = await fetch('https://swapi.dev/api/people/', { method: 'GET' });
    const data1 = await info1.json();
    const character1 = data1.results;
    const array1 = character1.map((character) => ({
        name: character.name,
        gender: character.gender,
        birthYear: character['birth_year'],
        mass: character.mass,
        height: character.height
    }));
    return array1;
}

const newCharacters1 = async () => {
    const infoPeople1 = await people1();
    const filterHeightPersons1 = infoPeople1.filter((person) =>
        person.height > 170);//map
    console.log(filterHeightPersons1);
}

newCharacters1().then(() => {
    console.log(done);
}).catch(() => {
    console.log(message);
    })