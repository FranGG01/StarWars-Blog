import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import DynamicCard from "../components/DynamicCard.jsx";
import { getPeople, getPeopleById } from "../services/service.js";
import { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [people, setPeople] = useState([]);

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

  return (
    <>
      {people.map((person, index) => (
        <DynamicCard
          category="people"
          key={index}
          className="col-12 col-md-4 mb-3"
          info={person.properties}
          id={person.uid}
        />
      ))}
    </>
  );
};
