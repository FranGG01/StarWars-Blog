const URL_BASE = "https://www.swapi.tech/api/";

async function getPeople() {
  try {
    const response = await fetch(`${URL_BASE}people/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching people:", error);
    throw error;
  }
}

async function getPeopleById(id) {
  try {
    const response = await fetch(`${URL_BASE}people/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching person by ID:", error);
    throw error;
  }
}

async function getPlanets() {
  try {
    const response = await fetch(`${URL_BASE}planets/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
}

async function getPlanetById(id) {
  try {
    const response = await fetch(`${URL_BASE}planets/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching planet by ID:", error);
    throw error;
  }
}

async function getVehicles() {
  try {
    const response = await fetch(`${URL_BASE}vehicles/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
}

async function getVehicleById(id) {
  try {
    const response = await fetch(`${URL_BASE}vehicles/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    throw error;
  }
}

export {
  getPeople,
  getPeopleById,
  getPlanets,
  getPlanetById,
  getVehicles,
  getVehicleById,
};
