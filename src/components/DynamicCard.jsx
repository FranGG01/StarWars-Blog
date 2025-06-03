import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "./Styles/Carrusel.css";

function DynamicCard({ category, info, id }) {
  const { store, dispatch } = useGlobalReducer();

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
      case "planet":
        return (
          <>
            <p>Población: {info.population}</p>
            <p>Clima: {info.climate}</p>
            <p>Terreno: {info.terrain}</p>
          </>
        );
      case "vehicle":
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
  const addFavorite = () => {
    dispatch({ type: "add_favorite", payload: info.name });
  };
  return (
    <div className="card-card">
      <img
        src={info.img}
        className="img-fluid"
        alt="..."
        style={{ width: "400px", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body ">
        <h5 className="card-title">{info.name}</h5>
        <span className="card-text d-flex">
          <div className="">{renderProperties()}</div>
        </span>
      </div>

      <div className="card-body d-flex justify-content-between ">
        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = `/${category}/${id}`)}
        >
          Leer Mas
        </button>
        <button
          className="btn btn-warning"
          onClick={() => addFavorite(info.name)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
}

export default DynamicCard;
