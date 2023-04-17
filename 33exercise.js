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
    console.log('===================================================================================================================');

};

user2().then(() => {
    console.log(done);
}).catch(() => {
    console.log(message);
});