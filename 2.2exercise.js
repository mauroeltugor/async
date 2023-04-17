import { message } from "./1exercise.js";
import { done } from "./1exercise.js";


const getVehicles1 = async () => {

    const response1 = await fetch('https://swapi.dev/api/vehicles/', { method: 'GET' });
    const type1 = await response1.json();
    const vehicles1 = type1.results;
    const copyVehicles1 = vehicles1.map((vehicle) => ({
        name: vehicle.name,
        model: vehicle.model,
        length: vehicle.length,
        crew: vehicle.crew,
        passengers: vehicle.passengers
    }));
    return copyVehicles1;

}

const newPassengers1 = async () => {

    const total1 = await getVehicles1();
    const changePassengers1 = total1.map((vehicle) => ({
        name: vehicle.name,
        model: vehicle.model,
        length: vehicle.length,
        crew: vehicle.crew,
        passengers: "10"
    }));
    console.log(changePassengers1);
}

newPassengers1().then(()=>{
    console.log(done);
}).catch(()=>{
    console.log(message);
})