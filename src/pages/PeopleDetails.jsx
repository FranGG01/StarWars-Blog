import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PeopleDetails.css";

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
    return (<>
        <div className="container mt-5">
            <h1>{person.properties.name}</h1>
            <img src={"https://placehold.co/600x400?text=No+Image"} alt={person.properties.name} />

            <ul className="people-list mt-3">
                <li className="people-item">
                    <h4>Height:</h4>
                    <span>{person.properties.height}</span>
                </li>
                <li className="people-item">
                    <h4>Gender:</h4>
                    <span>{person.properties.gender}</span>
                </li>
                <li className="people-item">
                    <h4>Birth:</h4>
                    <span>{person.properties.birth_year}</span>
                </li>
                <li className="people-item">
                    <h4>Mass:</h4>
                    <span>{person.properties.mass}</span>
                </li>
                <li className="people-item">
                    <h4>Skin Color:</h4>
                    <span>{person.properties.skin_color}</span>
                </li>
                <li className="people-item">
                    <h4>Home World:</h4>
                    <span>{homeworld ? homeworld : "Cargando..."}</span>
                </li>
            </ul>



        </div>

    </>)
}

export default PeopleDetails;