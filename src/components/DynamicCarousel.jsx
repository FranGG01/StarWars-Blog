import React from "react";
import DynamicCard from "./DynamicCard";

const DynamicCarousel = ({ items, category }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-3 text-capitalize">{category}</h2>
      <div
        id={`carousel-${category}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex justify-content-center">
                <DynamicCard
                  info={item.properties}
                  id={item.uid}
                  category={category}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carousel-${category}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carousel-${category}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default DynamicCarousel;
