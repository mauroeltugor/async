import { message } from "./1exercise.js";

const user = async () => {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET'});
        const info = await data.json();
        const finalUsers = info;
        const newUsersData = finalUsers.map((person) =>({
            id: person.id,
            name: person.name,
            username: person.username,
            email: person.email
        }))
        console.log(newUsersData);
    }catch(err){
        console.log(message);
    }    
}

user();
