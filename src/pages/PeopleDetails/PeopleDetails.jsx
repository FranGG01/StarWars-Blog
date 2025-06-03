import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PeopleDetails.css";

const PeopleDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
            .then(res => res.json())
            .then(data => {
                setPerson(data);
            })
            .catch(error => console.log("ERROR AL CARGAR PERSONAJE", error));
    }, [id]);

    if (!person) return <p className="text-center mt-5">Cargando personaje...</p>;

  const generatedDescription = `${person.name} es un personaje destacado del vasto universo de Star Wars. 
    Cuenta con una altura de aproximadamente ${person.height} cm y un peso de ${person.mass} kg, 
    características que pueden influir en su desempeño físico dentro de la historia galáctica. 
    Su género es ${person.gender}, y posee una tonalidad de piel ${person.skinColor || "desconocida"}, 
    lo que aporta aún más diversidad a las especies y culturas que habitan esta saga. 
    ${person.name.split(" ")[0]} proviene de ${person.homeworld || "un planeta cuyo origen se mantiene en el misterio"}, 
    lo que añade un toque de intriga a su historia personal y a su trasfondo dentro de la galaxia.`;

    
    return (
        <div className="container mt-5 ">
            <div className="character-card d-flex">
                <img
                    src={person.image}
                    alt={person.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{person.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>


            <ul className="people-list mt-3">
                <li className="people-item">
                    <h4>Height:</h4>
                    <span>{person.height}</span>
                </li>
                <li className="people-item">
                    <h4>Gender:</h4>
                    <span>{person.gender}</span>
                </li>
                <li className="people-item">
                    <h4>Birth Year:</h4>
                    <span>{person.birthYear || "Desconocido"}</span>
                </li>
                <li className="people-item">
                    <h4>Mass:</h4>
                    <span>{person.mass}</span>
                </li>
                <li className="people-item">
                    <h4>Skin Color:</h4>
                    <span>{person.skinColor || "Desconocido"}</span>
                </li>
                <li className="people-item">
                    <h4>Home World:</h4>
                    <span>{person.homeworld || "Desconocido"}</span>
                </li>
            </ul>
        </div>
    );
};

export default PeopleDetails;
