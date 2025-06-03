import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../hooks/useGlobalReducer";

const FavoriteList = () => {
  const { store, actions } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <div className="container d-flex align-items-center">
        <Link to="/" className="navbar-brand me-3">
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
            alt="Star Wars Logo"
            className="img-fluid"
            style={{ width: "50px", height: "auto" }}
          />
        </Link>

        {/* Menú desplegable favoritos */}
        <div className="dropdown me-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-light text-dark ms-1">
              {store.favoriteList.length}
            </span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
            {store.favoriteList && store.favoriteList.length > 0 ? (
              store.favoriteList.map((fav, index) => (
                <li
                  key={fav.uid}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <Link to={`${fav.resource}/${fav.uid}`}>
                    {fav.properties ? fav.properties.name : fav.uid}
                  </Link>
                  {/* Botón de eliminar */}
                  <button
                    className="btn btn-sm btn-outline-danger"
                    title="Remove"
                    onClick={() => {
                      const newFavs = store.favoriteList.filter(
                        (_, i) => i !== index
                      );
                      actions.add_favorite(newFavs);
                    }}
                  >
                    &times; {/* X para eliminar */}
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-center">
                No favorites added
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FavoriteList;
