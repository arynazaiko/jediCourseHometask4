import {
  SET_PEOPLE,
  DELETE_PERSON,
  CREATE_PERSON,
  EDIT_PERSON,
  CHANGE_BELOVED_STATUS,
} from "../actions/people";

const initialState = {
  allPeople: [],
};

const defaultPerson = {
  name: "",
  height: "",
  mass: "",
  gender: "",
  birth_year: "",
  beloved: false,
  id: null,
};

const peopleReducer = (state = initialState, action) => {
  let person;
  let allPeople;

  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, allPeople: action.payload };

    case DELETE_PERSON:
      allPeople = state.allPeople.filter((person) => {
        return person.id !== action.payload;
      });
      return {
        ...state,
        allPeople,
      };

    case CREATE_PERSON:
      person = { ...defaultPerson, ...action.payload };
      allPeople = [...state.allPeople, person];

      return {
        ...state,
        allPeople,
      };

    case EDIT_PERSON:
      allPeople = state.allPeople.map((person) =>
        person.id === action.payload.id
          ? { ...person, ...action.payload }
          : person
      );

      return {
        ...state,
        allPeople,
      };

    case CHANGE_BELOVED_STATUS:
      allPeople = state.allPeople.map((person) =>
        person.id === action.payload
          ? { ...person, beloved: !person.beloved }
          : person
      );

      return {
        ...state,
        allPeople,
      };

    default:
      return state;
  }
};

export default peopleReducer;
