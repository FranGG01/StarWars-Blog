// import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import { Carrusel } from "../components/Carrusel.jsx";
// import { getPeople, getPeopleById } from "../services/service-people.js";
// import { getPlanets, getPlanetById } from "../services/service-planets.js";
// import { getVehicles, getVehicleById } from "../services/service-vehicles.js";
// import { useEffect, useState } from "react";
// import planetsData from "../data/planets.json";
// import vehiclesData from "../data/vehicles.json";

// export const Home = () => {
//   const { store, dispatch } = useGlobalReducer();
//   const [people, setPeople] = useState([]);
//   const [planets, setPlanets] = useState([]);
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     const fetchPeople = async () => {
//       const data = await getPeople();
//       const dataPeople = await Promise.all(
//         data.map((people) => getPeopleById(people.uid))
//       );
//       console.log(dataPeople);
//       setPeople(dataPeople);
//       dispatch({ type: "update_people", payload: dataPeople });
//     };
//     fetchPeople();
//   }, []);

//   useEffect(() => {
//     const fetchPlanets = async () => {
//       const data = await getPlanets();
//       const dataPlanets = await Promise.all(
//         data.map((planet) => getPlanetById(planet.uid))
//       );
//       const planetsWithImg = dataPlanets.map((planet) => {
//         const matchingData = planetsData.find((p) => p.uid === planet.uid);
//         return {
//           ...planet,
//           properties: {
//             ...planet.properties,
//             img:
//               matchingData?.imgURL ||
//               "https://placehold.co/400x200?text=No+Image",
//           },
//         };
//       });

//       console.log(planetsWithImg);
//       setPlanets(planetsWithImg);
//       dispatch({ type: "update_planets", payload: planetsWithImg });
//     };

//     fetchPlanets();
//   }, []);

//   useEffect(() => {
//     const fetchVehicles = async () => {
//       const data = await getVehicles();
//       const dataVehicles = await Promise.all(
//         data.map((vehicle) => getVehicleById(vehicle.uid))
//       );
//       const vehiclesWithImg = dataVehicles.map((vehicle) => {
//         const matchingData = vehiclesData.find((v) => v.uid === vehicle.uid);
//         return {
//           ...vehicle,
//           properties: {
//             ...vehicle.properties,
//             img:
//               matchingData?.imgURL ||
//               "https://placehold.co/400x200?text=No+Image",
//           },
//         };
//       });
//       console.log(vehiclesWithImg);
//       setVehicles(vehiclesWithImg);
//       dispatch({ type: "update_vehicles", payload: vehiclesWithImg });
//     };
//     fetchVehicles();
//   }, []);

//   return (
//     <>
//       <div className=" mt-5">
//         <h1>Personajes</h1>
//         <Carrusel items={store.peopleList} category="people" />
//         <h1>Planetas</h1>
//         <Carrusel items={store.planetsList} category="planet" />
//         <h1>vehiculos</h1>
//         <Carrusel items={store.vehiclesList} category="vehicle" />
//       </div>
//     </>
//   );
// };
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Carrusel } from "../components/Carrusel.jsx";
import { getPeople, getPeopleById } from "../services/service-people.js";
import { getPlanets, getPlanetById } from "../services/service-planets.js";
import { getVehicles, getVehicleById } from "../services/service-vehicles.js";
import { useEffect, useState } from "react";
import planetsData from "../data/planets.json";
import vehiclesData from "../data/vehicles.json";
import peopleData from "../data/people.json";
export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // 1. Llamadas principales en paralelo
        const [peopleList, planetList, vehicleList] = await Promise.all([
          getPeople(),
          getPlanets(),
          getVehicles(),
        ]);

        // 2. Llamadas por ID también en paralelo para obtener detalles completos
        const [dataPeople, dataPlanets, dataVehicles] = await Promise.all([
          Promise.all(peopleList.map((p) => getPeopleById(p.uid))),
          Promise.all(planetList.map((p) => getPlanetById(p.uid))),
          Promise.all(vehicleList.map((v) => getVehicleById(v.uid))),
        ]);

        // 3. Agregar imágenes a people desde peopleData
        const peopleWithImg = dataPeople.map((person) => {
          const swapiName = person.properties.name.toLowerCase().trim();

          console.log("SWAPI Name:", swapiName);

          const matching = peopleData.find((p) => {
            const nameNormalized = p.name.toLowerCase().trim();
            console.log("  Comparing with:", nameNormalized);
            return nameNormalized === swapiName;
          });

          console.log("  Found match:", matching);

          return {
            ...person,
            properties: {
              ...person.properties,
              img:
                matching?.img || "https://placehold.co/400x200?text=No+Image",
            },
          };
        });

        // 4. Agregar imágenes a planetas
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

        // 5. Agregar imágenes a vehículos
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

        // 6. Setear estados con los datos *con imágenes*
        setPeople(peopleWithImg);
        setPlanets(planetsWithImg);
        setVehicles(vehiclesWithImg);

        // 7. Actualizar el store con los datos con imágenes
        dispatch({ type: "update_people", payload: peopleWithImg });
        dispatch({ type: "update_planets", payload: planetsWithImg });
        dispatch({ type: "update_vehicles", payload: vehiclesWithImg });
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <div className="mt-5">
        <h1>Personajes</h1>
        <Carrusel items={store.peopleList} category="people" />
        <h1>Planetas</h1>
        <Carrusel items={store.planetsList} category="planet" />
        <h1>vehiculos</h1>
        <Carrusel items={store.vehiclesList} category="vehicle" />
      </div>
    </>
  );
};
