// src/store.js
export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null },
    ],
    peopleList: [],
    planetsList: [],
    vehiclesList: [],
    favoriteList: [], // lista de favoritos
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    case "update_people":
      return { ...store, ppeopleList: action.payload };
    case "update_planets":
      return { ...store, planetsList: action.payload };
    case "update_vehicles":
      return { ...store, vehiclesList: action.payload };
    case "add_favorite":
      return { ...store, favoriteList: action.payload };
    default:
      throw Error("Unknown action");
  }
}
