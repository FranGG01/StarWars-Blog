// src/pages/Home.jsx (o el path correcto donde tengas tu componente)
import useGlobalReducer from "../hooks/useGlobalReducer"; // ajusta la ruta si es diferente
import { Carrusel } from "../components/Carrusel.jsx";
import { getPeople, getPeopleById } from "../services/service-people.js";
import { getPlanets, getPlanetById } from "../services/service-planets.js";
import { getVehicles, getVehicleById } from "../services/service-vehicles.js";
import { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople();
      const dataPeople = await Promise.all(
        data.map((people) => getPeopleById(people.uid))
      );
      console.log(dataPeople);
      setPeople(dataPeople);
      // Usamos dispatch() directamente
      dispatch({ type: "update_people", payload: dataPeople });
    };
    fetchPeople();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      const dataPlanets = await Promise.all(
        data.map((planet) => getPlanetById(planet.uid))
      );
      console.log(dataPlanets);
      setPlanets(dataPlanets);
      // También aquí
      dispatch({ type: "update_planets", payload: dataPlanets });
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getVehicles();
      const dataVehicles = await Promise.all(
        data.map((vehicle) => getVehicleById(vehicle.uid))
      );
      console.log(dataVehicles);
      setVehicles(dataVehicles);
      // Y aquí
      dispatch({ type: "update_vehicles", payload: dataVehicles });
    };
    fetchVehicles();
  }, []);

  return (
    <>
      <div className="mt-5">
        <h1>Personajes</h1>
        <Carrusel items={store.peopleList} category="people" />
        <h1>Planetas</h1>
        <Carrusel items={store.planetsList} category="planets" />
        <h1>vehiculos</h1>
        <Carrusel items={store.vehiclesList} category="vehicles" />
      </div>
    </>
  );
};
