import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function DynamicCard({ category, info }) {
  const renderProperties = () => {
    switch (category) {
      case "people":
        return (
          <>
            <p>Altura: {info.height}</p>
            <p>Color de ojos: {info.eye_color}</p>
            <p>Género: {info.gender}</p>
            <p>Pelo: {info.hair_color}</p>
          </>
        );
      case "planets":
        return (
          <>
            <p>Población: {info.population}</p>
            <p>Clima: {info.climate}</p>
            <p>Terreno: {info.terrain}</p>
          </>
        );
      case "vehicles":
        return (
          <>
            <p>Modelo: {info.model}</p>
            <p>Fabricante: {info.manufacturer}</p>
            <p>Pasajeros: {info.passengers}</p>
          </>
        );
      default:
        return <p>Sin datos</p>;
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <span className="card-text">
          <div className="flex-column">{renderProperties()}</div>
        </span>
      </div>

      <div className="card-body d-flex justify-content-between">
        <button className="btn btn-primary">Leer mas</button>
        <button className="btn btn-warning">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
}

export default DynamicCard;
