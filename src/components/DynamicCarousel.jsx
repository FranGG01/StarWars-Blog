import React from "react";
import { useEffect, useState } from "react";

const DynamicCarousel = () => {
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
    };
    fetchPeople();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {people.map((person, index) => (
              <DynamicCard
                category="people"
                key={index}
                className="col-12 col-md-4 mb-3"
                info={person.properties}
                id={person.uid}
              />
            ))}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default DynamicCarousel;
