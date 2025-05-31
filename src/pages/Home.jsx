
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Carrusel} from "../components/Carrusel"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>
		<div className=" mt-5">
			 <h1>Personajes</h1>
			 <Carrusel />
			 <h1>Planetas</h1>
			 <Carrusel />
			 <h1>vehiculos</h1>
			 <Carrusel />
		</div>
		</>
		
	);
}; 