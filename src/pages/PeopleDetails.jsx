import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState(null)
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())
        .then(data => { 
            setPerson(data.result);

         const planetUrl = data.result.properties.homeworld;
         fetch(planetUrl)
         .then(res => res.json())
         .then(planetData => setHomeworld(planetData.result.properties.name))
         .catch(error => console.log("ERROR AL CARGAR PLANETA")) 
    })
        .catch(error => console.log("ERROR AL CARGAR PERSONAJE"))
    }, [id])

    if (!person) return <p className="text-center mt-5">Cargando personaje...</p>;
    return ( <>
        <div className="container mt-5">
            <h1>{person.properties.name}</h1>
            <img src={"https://placehold.co/400x600?text=No+Image"} alt={person.properties.name} />

            <ul className="list-group mt-3">
                <li className="list-group-item">Height: {person.properties.height} </li>
                <li className="list-group-item">Gender: {person.properties.gender} </li>
                <li className="list-group-item">Birth: {person.properties.birth_year} </li>
                <li className="list-group-item">Mass: {person.properties.mass} </li>
                <li className="list-group-item">Skin Color: {person.properties.skin_color} </li>
                <li className="list-group-item">Home World: {homeworld ? homeworld : "Cargando..."} </li>
            </ul>
        </div>

    </>)
}

export default PeopleDetails;