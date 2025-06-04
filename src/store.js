export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    peopleList: [],
    planetsList: [],
    vehiclesList: [],
    favoriteList: [],
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
      const peopleList = action.payload;
      console.log("[STORE]", peopleList);
      return {
        ...store,
        peopleList,
      };

    case "update_planets":
      const planetsList = action.payload;
      console.log("[STORE]", planetsList);
      return {
        ...store,
        planetsList,
      };
    case "update_vehicles":
      const vehiclesList = action.payload;
      console.log("[STORE]", vehiclesList);
      return {
        ...store,
        vehiclesList,
      };

    case "ADD_FAVORITE":
      return {
        ...store,
        favoriteList: [...store.favoriteList, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...store,
        favoriteList: store.favoriteList.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    default:
      throw Error("Unknown action.");
  }
}
