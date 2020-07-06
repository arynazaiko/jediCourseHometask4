export const SET_STARSHIPS = "SET_STARSHIPS";
export const DELETE_STARSHIP = "DELETE_STARSHIP";
export const CREATE_STARSHIP = "CREATE_STARSHIP";
export const EDIT_STARSHIP = "EDIT_STARSHIP";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";

export const setStarships = (starships) => ({
  type: SET_STARSHIPS,
  payload: starships,
});
export const deleteStarship = (id) => ({ type: DELETE_STARSHIP, payload: id });
export const createStarship = (starship) => ({
  type: CREATE_STARSHIP,
  payload: starship,
});
export const editStarship = (starship) => ({
  type: EDIT_STARSHIP,
  payload: starship,
});
export const changeBelovedStatus = (id) => ({
  type: CHANGE_BELOVED_STATUS,
  payload: id,
});
