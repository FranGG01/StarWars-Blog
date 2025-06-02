const URL_BASE = 'https://www.swapi.tech/api/';

async function getPeople() {
    try {
        const response = await fetch(`${URL_BASE}people/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching people:', error);
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
        console.error('Error fetching person by ID:', error);
        throw error;
    }
}

export  {
    getPeople,getPeopleById
    //getPlanets,
    //getVehicles,
};