import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './VehicleDetails.css'

const VehicleDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => setVehicle(data.result))
            .catch(error => console.log("ERROR AL CARGAR STARSHIP"))
    }, [id])
    if (!vehicle) return <p className="text-center mt-5">Cargando Vehicle...</p>;

    return (<>

        <div className="container mt-5">
            <h1> {vehicle.properties.name} </h1>
            <img src={"https://placehold.co/600x400?text=No+Image"} alt={vehicle.properties.name} />

            <ul className="vehicle-list mt-3">
                <li className="vehicle-item">
                    <h4>Consumables:</h4>
                    <span>{vehicle.properties.consumables}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Cargo Capacity:</h4>
                    <span>{vehicle.properties.cargo_capacity}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Passengers:</h4>
                    <span>{vehicle.properties.passengers}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Crew:</h4>
                    <span>{vehicle.properties.crew}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Length:</h4>
                    <span>{vehicle.properties.length}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Cost:</h4>
                    <span>{vehicle.properties.cost_in_credits}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Manufacturer:</h4>
                    <span>{vehicle.properties.manufacturer}</span>
                </li>
                <li className="vehicle-item">
                    <h4>Vehicle Class:</h4>
                    <span>{vehicle.properties.vehicle_class}</span>
                </li>
            </ul>

        </div>
    </>)
}

export default VehicleDetails;