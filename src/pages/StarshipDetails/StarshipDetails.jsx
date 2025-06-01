import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './StarshipDetails.css'

const StarshipDetails = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
            .then(res => res.json())
            .then(data => setStarship(data.result))
            .catch(error => console.log("ERROR AL CARGAR STARSHIP"))
    }, [id])
    if (!starship) return <p className="text-center mt-5">Cargando Starship...</p>;

    return (<>

        <div className="container mt-5">
            <h1> {starship.properties.name} </h1>
            <img src={"https://placehold.co/600x400?text=No+Image"} alt={starship.properties.name} />

            <ul className="starship-list mt-3">
                <li className="starship-item">
                    <h4>Consumables:</h4>
                    <span>{starship.properties.consumables}</span>
                </li>
                <li className="starship-item">
                    <h4>Cargo Capacity:</h4>
                    <span>{starship.properties.cargo_capacity}</span>
                </li>
                <li className="starship-item">
                    <h4>Passengers:</h4>
                    <span>{starship.properties.passengers}</span>
                </li>
                <li className="starship-item">
                    <h4>Crew:</h4>
                    <span>{starship.properties.crew}</span>
                </li>
                <li className="starship-item">
                    <h4>Length:</h4>
                    <span>{starship.properties.length}</span>
                </li>
                <li className="starship-item">
                    <h4>Cost:</h4>
                    <span>{starship.properties.cost_in_credits}</span>
                </li>
                <li className="starship-item">
                    <h4>Manufacturer:</h4>
                    <span>{starship.properties.manufacturer}</span>
                </li>
                <li className="starship-item">
                    <h4>Starship Class:</h4>
                    <span>{starship.properties.starship_class}</span>
                </li>
            </ul>

        </div>
    </>)
}

export default StarshipDetails;