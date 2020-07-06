export const SET_PLANETS = "SET_PLANETS";
export const DELETE_PLANET = "DELETE_PLANET";
export const CREATE_PLANET = "CREATE_PLANET";
export const EDIT_PLANET = "EDIT_PLANET";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";

export const setPlanets = (planets) => ({
  type: SET_PLANETS,
  payload: planets,
});
export const deletePlanet = (id) => ({ type: DELETE_PLANET, payload: id });
export const createPlanet = (planet) => ({
  type: CREATE_PLANET,
  payload: planet,
});
export const editPlanet = (planet) => ({
  type: EDIT_PLANET,
  payload: planet,
});
export const changeBelovedStatus = (id) => ({
  type: CHANGE_BELOVED_STATUS,
  payload: id,
});
