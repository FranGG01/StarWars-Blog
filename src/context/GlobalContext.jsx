import { createContext, useReducer } from "react";

const initialStore = {
  people: [],
  planets: [],
  vehicles: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
