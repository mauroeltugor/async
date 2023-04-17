import { message } from "./1exercise.js";

const getVehicles = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/vehicles/', { method: 'GET' });
        const type = await response.json();
        const vehicles = type.results;
        const copyVehicles = vehicles.map((vehicle) => ({
            name: vehicle.name,
            model: vehicle.model,
            length: vehicle.length,
            crew: vehicle.crew,
            passengers: vehicle.passengers
        }));
        return copyVehicles;
    } catch (err) {
        console.log(message);
    }
}

const newPassengers = async () => {
    try {
        const total = await getVehicles();
        const changePassengers = total.map((vehicle) => ({
            name: vehicle.name,
            model: vehicle.model,
            length: vehicle.length,
            crew: vehicle.crew,
            passengers: "10"
        }));
        console.log(changePassengers);
    } catch (err) {
        console.log(message);
    }
}

newPassengers();