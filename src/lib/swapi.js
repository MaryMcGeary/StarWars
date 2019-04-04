const apiUrl = "https://swapi.co/api";

export function getPlanetById(id) {
  return fetch(`https://swapi.co/api/planets/${id}`).then(res => res.json());
}

export function getAllPlanets(id) {
  return fetch(`https://swapi.co/api/planets/${id}`).then(res => res.json());
}
