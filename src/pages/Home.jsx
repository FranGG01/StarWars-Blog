import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import DynamicCard from "../components/DynamicCard.jsx";
import DynamicCarousel from "../components/DynamicCarousel.jsx";
import {
  getPeople,
  getPeopleById,
  getPlanets,
  getPlanetById,
  getVehicles,
  getVehicleById,
} from "../services/service.js";
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
      //   dispatch({ type: "SET_PEOPLE", payload: data });
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
    };
    fetchVehicles();
  }, []);

  return (
    <>
      <DynamicCarousel items={people} category="people" />
      <DynamicCarousel items={planets} category="planets" />
      <DynamicCarousel items={vehicles} category="vehicles" />

      {/* {people.map((person, index) => (
        <DynamicCard
          category="people"
          key={index}
          className="col-12 col-md-4 mb-3"
          info={person.properties}
          id={person.uid}
        />
      ))}

      {planets.map((planet, index) => (
        <DynamicCard
          category="planets"
          key={index}
          className="col-12 col-md-4 mb-3"
          info={planet.properties}
          id={planet.uid}
        />
      ))}

      {vehicles.map((vehicle, index) => (
        <DynamicCard
          category="vehicles"
          key={index}
          className="col-12 col-md-4 mb-3"
          info={vehicle.properties}
          id={vehicle.uid}
        />
      ))} */}
    </>
  );
};
