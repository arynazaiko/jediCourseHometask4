export const SET_PEOPLE = "SET_PEOPLE";
export const DELETE_PERSON = "DELETE_PERSON";
export const CREATE_PERSON = "CREATE_PERSON";
export const EDIT_PERSON = "EDIT_PERSON";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";

export const setPeople = (people) => ({ type: SET_PEOPLE, payload: people });
export const deletePerson = (id) => ({ type: DELETE_PERSON, payload: id });
export const createPerson = (person) => ({
  type: CREATE_PERSON,
  payload: person,
});
export const editPerson = (person) => ({
  type: EDIT_PERSON,
  payload: person,
});
export const changeBelovedStatus = (id) => ({
  type: CHANGE_BELOVED_STATUS,
  payload: id,
});
