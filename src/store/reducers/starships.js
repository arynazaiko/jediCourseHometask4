import {
  SET_STARSHIPS,
  DELETE_STARSHIP,
  CREATE_STARSHIP,
  EDIT_STARSHIP,
  CHANGE_BELOVED_STATUS,
} from "../actions/starships";

const initialState = {
  allStarships: [],
};

const defaultStarships = {
  name: "",
  model: "",
  starship_class: "",
  manufacturer: "",
  crew: "",
  passengers: "",
  beloved: false,
  id: null,
};

const starshipsReducer = (state = initialState, action) => {
  let starship;
  let allStarships;

  switch (action.type) {
    case SET_STARSHIPS:
      return { ...state, allStarships: action.payload };

    case DELETE_STARSHIP:
      allStarships = state.allStarships.filter((starship) => {
        return starship.id !== action.payload;
      });
      return {
        ...state,
        allStarships,
      };

    case CREATE_STARSHIP:
      starship = { ...defaultStarships, ...action.payload };
      allStarships = [...state.allStarships, starship];

      return {
        ...state,
        allStarships,
      };

    case EDIT_STARSHIP:
      allStarships = state.allStarships.map((starship) =>
        starship.id === action.payload.id
          ? { ...starship, ...action.payload }
          : starship
      );

      return {
        ...state,
        allStarships,
      };

    case CHANGE_BELOVED_STATUS:
      allStarships = state.allStarships.map((starship) =>
        starship.id === action.payload
          ? { ...starship, beloved: !starship.beloved }
          : starship
      );

      return {
        ...state,
        allStarships,
      };

    default:
      return state;
  }
};

export default starshipsReducer;
