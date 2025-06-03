import DynamicCard from "./DynamicCard";
import "./Styles/Carrusel.css";
export const Carrusel = ({ items, category }) => {
  return (
    <>
      <div className="carrusel-scroll-container overflow-auto">
        <div className="d-flex flex-nowrap gap-3 px-3 py-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] flex-shrink-0 card-carrusel"
            >
              <DynamicCard
                info={item.properties}
                id={item.uid}
                category={category}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Carrusel;
