async function getVehicles() {
    const response = await fetch('https://swapi.dev/api/vehicles/', { method: 'GET' });
    const type = await response.json();
    const vehicles = type.results;
    const copyVehicles = vehicles.map((vehicle) => ({ 
        name: vehicle.name, 
        model: vehicle.model,
        length: vehicle.length, 
        crew: vehicle.crew, 
        passengers: vehicle.passengers }));
    return copyVehicles;
}

async function newPassengers(){
    const total = await getVehicles();
    const changePassengers = total.map((vehicle) => ({
        name: vehicle.name, 
        model: vehicle.model,
        length: vehicle.length, 
        crew: vehicle.crew,
        passengers: "10"}));
    console.log(changePassengers);
}

newPassengers();