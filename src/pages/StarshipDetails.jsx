import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <img src={"https://placehold.co/400x600?text=No+Image"} alt={starship.properties.name} />

            <ul className="list-group mt-3">
                <li className="list-group-item">Consumables: {starship.properties.consumables}</li>
                <li className="list-group-item">Cargo Capacity: {starship.properties.cargo_capacity}</li>
                <li className="list-group-item">Passengers: {starship.properties.passengers}</li>
                <li className="list-group-item">Crew: {starship.properties.crew}</li>
                <li className="list-group-item">Length: {starship.properties.length}</li>
                <li className="list-group-item">Cost: {starship.properties.cost_in_credits}</li>
                <li className="list-group-item">Manufacturer: {starship.properties.manufacturer}</li>
                <li className="list-group-item">Starship Class: {starship.properties.starship_class}</li>
            </ul>
        </div>
    </>)
}

export default StarshipDetails;