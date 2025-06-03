// src/hooks/useGlobalReducer.jsx
import { createContext, useReducer, useContext } from "react";
import storeReducer, { initialStore } from "../store"; // ajusta el path si es necesario

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const addFavorite = (favorite) => {
    const newFavs = [...store.favoriteList, favorite];
    dispatch({ type: "add_favorite", payload: newFavs });
  };

  const removeFavorite = (id) => {
    const newFavs = store.favoriteList.filter((fav) => fav.id !== id);
    dispatch({ type: "add_favorite", payload: newFavs });
  };

  return (
    <StoreContext.Provider value={{ store, dispatch, actions: { addFavorite, removeFavorite } }}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook personalizado para usar en componentes
export default function useGlobalReducer() {
  const { store, dispatch, actions } = useContext(StoreContext);
  return { store, dispatch, actions };
}
