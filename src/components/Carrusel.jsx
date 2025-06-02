import DynamicCard from "./DynamicCard";
import "./Styles/Carrusel.css";
export const Carrusel = ({ items, category }) => {
  return (
    <>
      <div className="carrusel-scroll-container overflow-auto">
        <div className="carrusel-cards d-flex flex-nowrap gap-3 px-3 py-2">
          {items.map((item, idx) => (
            <DynamicCard
              key={idx}
              info={item.properties}
              id={item.uid}
              category={category}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Carrusel;
