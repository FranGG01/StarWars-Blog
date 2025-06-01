import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlanetDetails = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then(res => res.json())
        .then(data => setPlanet(data.result))
        .catch(error => console.log("ERROR AL CARGAR EL PLANETA"))
    }, [id])
  if (!planet) return <p className="text-center mt-5">Cargando planeta...</p>;

    return (<>
    <div className="container mt-5">
        <h1>{planet.properties.name} </h1>
        <img src={"https://placehold.co/400x600?text=No+Image"} alt={planet.properties.name} />

        <ul className="list-group mt-3">
            <li className="list-group-item">Climate: {planet.properties.climate} </li>
            <li className="list-group-item">Surface Water: {planet.properties.surface_water} </li>
            <li className="list-group-item">Diameter: {planet.properties.diameter} </li>
            <li className="list-group-item">Rotation Period: {planet.properties.rotation_period} </li>
            <li className="list-group-item">Terrain: {planet.properties.terrain} </li>
            <li className="list-group-item">Gravity: {planet.properties.gravity} </li>
            <li className="list-group-item">Orbital Period: {planet.properties.orbital_period} </li>
            <li className="list-group-item">Population: {planet.properties.population} </li>
        </ul>
    </div>
    </>)
}

export default PlanetDetails;