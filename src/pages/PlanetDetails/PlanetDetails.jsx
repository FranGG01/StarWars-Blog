import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PlanetDetails.css'
import planets from "../../data/planets.json";

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

    const imageInfo = planets.find(img => img.uid === id);

    const generatedDescription = `${planet.properties.name} es uno de los mundos fascinantes del universo de Star Wars. 
    Con un clima predominantemente ${planet.properties.climate}, este planeta ofrece paisajes caracterizados por ${planet.properties.terrain}. 
    Tiene una gravedad de ${planet.properties.gravity}, una característica que influye directamente en la vida que allí habita. 
    Su diámetro es de ${planet.properties.diameter} km, y completa una rotación en ${planet.properties.rotation_period} horas, 
    mientras que su órbita alrededor de su estrella tarda aproximadamente ${planet.properties.orbital_period} días. 
    ${planet.properties.name} alberga una población de ${planet.properties.population !== "unknown" ? planet.properties.population : "origen incierto"}, 
    lo que lo convierte en un lugar ${planet.properties.population !== "0" ? "habitado" : "inhóspito"} dentro de esta vasta galaxia.`;



    return (<>
        <div className="container mt-5">
            <div className="character-card d-flex">
                <img
                    src={imageInfo?.imgURL || "https://placehold.co/600x400?text=No+Image"}
                    alt={planet.properties.name}
                    className="character-card-image"
                />
                <div className="character-card-info">
                    <h2>{planet.properties.name.toUpperCase()}</h2>
                    <p>{generatedDescription}</p>
                </div>
            </div>

            <ul className="planet-list mt-3">
                <li className="planet-item">
                    <h4>Climate:</h4>
                    <span>{planet.properties.climate}</span>
                </li>
                <li className="planet-item">
                    <h4>Surface Water:</h4>
                    <span>{planet.properties.surface_water}</span>
                </li>
                <li className="planet-item">
                    <h4>Diameter:</h4>
                    <span>{planet.properties.diameter}</span>
                </li>
                <li className="planet-item">
                    <h4>Rotation Period:</h4>
                    <span>{planet.properties.rotation_period}</span>
                </li>
                <li className="planet-item">
                    <h4>Terrain:</h4>
                    <span>{planet.properties.terrain}</span>
                </li>
                <li className="planet-item">
                    <h4>Gravity:</h4>
                    <span>{planet.properties.gravity}</span>
                </li>
                <li className="planet-item">
                    <h4>Orbital Period:</h4>
                    <span>{planet.properties.orbital_period}</span>
                </li>
                <li className="planet-item">
                    <h4>Population:</h4>
                    <span>{planet.properties.population}</span>
                </li>
            </ul>

        </div>
    </>)
}

export default PlanetDetails;