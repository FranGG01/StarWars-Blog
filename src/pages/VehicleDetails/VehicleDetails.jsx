import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './VehicleDetails.css';
import vehicles from "../../data/vehicles.json";

const VehicleDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => setVehicle(data.result))
            .catch(error => console.log("ERROR AL CARGAR VEHÍCULO", error));
    }, [id]);

    if (!vehicle) return <p className="text-center mt-5">Cargando vehículo...</p>;

    const imageInfo = vehicles.find(img => img.uid === id);

    const generatedDescription = `${vehicle.properties.name} es un vehículo representativo del universo de Star Wars, 
    clasificado como ${vehicle.properties.vehicle_class}. Fue fabricado por ${vehicle.properties.manufacturer}, 
    una de las compañías más relevantes en la producción de tecnología galáctica.
    Este vehículo tiene una longitud de ${vehicle.properties.length} metros y puede transportar hasta ${vehicle.properties.passengers} pasajeros, 
    además de una tripulación compuesta por ${vehicle.properties.crew} miembros. 
    Cuenta con una capacidad de carga de ${vehicle.properties.cargo_capacity} unidades, 
    lo que lo convierte en una opción ${parseInt(vehicle.properties.cargo_capacity) > 500 ? "robusta y versátil" : "ligera y maniobrable"}.
  `;

    return (
        <div className="container mt-5">
            <div className="character-card d-flex">
                <img
                    src={imageInfo?.imgURL || "https://placehold.co/600x400?text=No+Image"}
                    alt={vehicle.properties.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{vehicle.properties.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>

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
    );
};

export default VehicleDetails;
