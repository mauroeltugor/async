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
        console.log('===================================================================================================================');
    }catch(err){
        console.log(`Sorry we are having problems try later :(`);
    }    
}

user();

/*--------------------------------------------------------------------*/

const user2 = async () => {
    const data2 = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET'});
    const info2 = await data2.json();
    const finalUsers2 = info2;
    const newUsersData2 = finalUsers2.map((person) => ({
        id: person.id,
        name: person.name,
        username: person.username,
        email: person.email
    }));
    console.log(newUsersData2);
};

user2().then(() => {
    console.log('all ran perfect');
}).catch((err) => {
    console.log(err);
});





