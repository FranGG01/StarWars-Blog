import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Carrusel } from "../components/Carrusel.jsx";
import { getPeople, getPeopleById } from "../services/service-people.js";
import { getPlanets, getPlanetById } from "../services/service-planets.js";
import { getVehicles, getVehicleById } from "../services/service-vehicles.js";
import { useEffect, useState } from "react";
import planetsData from "../data/planets.json";
import vehiclesData from "../data/vehicles.json";
import peopleData from "../data/people.json";
import TextPressure from "../components/TextPressure .jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [peopleList, planetList, vehicleList] = await Promise.all([
          getPeople(),
          getPlanets(),
          getVehicles(),
        ]);

        const [dataPeople, dataPlanets, dataVehicles] = await Promise.all([
          Promise.all(peopleList.map((p) => getPeopleById(p.uid))),
          Promise.all(planetList.map((p) => getPlanetById(p.uid))),
          Promise.all(vehicleList.map((v) => getVehicleById(v.uid))),
        ]);

        const peopleWithImg = dataPeople.map((person) => {
          const swapiName = person.properties.name.toLowerCase().trim();

          const matching = peopleData.find((p) => {
            const nameNormalized = p.name.toLowerCase().trim();
            return nameNormalized === swapiName;
          });

          return {
            ...person,
            properties: {
              ...person.properties,
              img:
                matching?.img || "https://placehold.co/400x200?text=No+Image",
            },
          };
        });

        const planetsWithImg = dataPlanets.map((planet) => {
          const matching = planetsData.find((p) => p.uid === planet.uid);
          return {
            ...planet,
            properties: {
              ...planet.properties,
              img:
                matching?.imgURL ||
                "https://placehold.co/400x200?text=No+Image",
            },
          };
        });

        const vehiclesWithImg = dataVehicles.map((vehicle) => {
          const matching = vehiclesData.find((v) => v.uid === vehicle.uid);
          return {
            ...vehicle,
            properties: {
              ...vehicle.properties,
              img:
                matching?.imgURL ||
                "https://placehold.co/400x200?text=No+Image",
            },
          };
        });

        setPeople(peopleWithImg);
        setPlanets(planetsWithImg);
        setVehicles(vehiclesWithImg);

        dispatch({ type: "update_people", payload: peopleWithImg });
        dispatch({ type: "update_planets", payload: planetsWithImg });
        dispatch({ type: "update_vehicles", payload: vehiclesWithImg });
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchAll();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextPressure
          text="May the Force be with you…"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    );
  }

  return (
    <>
      <div className="mt-5">
        <h1 className="h1-home">Personajes</h1>
        <Carrusel items={store.peopleList} category="people" />
        <h1 className="h1-home">Planetas</h1>
        <Carrusel items={store.planetsList} category="planet" />
        <h1 className="h1-home">Vehículos</h1>
        <Carrusel items={store.vehiclesList} category="vehicle" />
      </div>
    </>
  );
};
