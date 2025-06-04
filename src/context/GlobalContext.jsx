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

    default:
      return state;
  }
}
