
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Carrusel} from "../components/Carrusel"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>
		<div className=" mt-5">
			 <Carrusel />
			 <Carrusel />
			 <Carrusel />
		</div>
		</>
		
	);
}; 