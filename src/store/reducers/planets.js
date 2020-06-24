import {
  SET_PLANETS,
  DELETE_PLANET,
  CREATE_PLANET,
  EDIT_PLANET,
  CHANGE_BELOVED_STATUS,
} from "../actions/planets";

const initialState = {
  allPlanets: [],
};

const defaultPlanet = {
  name: "",
  diameter: "",
  rotation_period: "",
  orbital_period: "",
  gravity: "",
  population: "",
  beloved: false,
  id: null,
};

const planetReducer = (state = initialState, action) => {
  let planet;
  let allPlanets;

  switch (action.type) {
    case SET_PLANETS:
      return { ...state, allPlanets: action.payload };

    case DELETE_PLANET:
      allPlanets = state.allPlanets.filter((planet) => {
        return planet.id !== action.payload;
      });
      return {
        ...state,
        allPlanets,
      };

    case CREATE_PLANET:
      planet = { ...defaultPlanet, ...action.payload };
      allPlanets = [...state.allPlanets, planet];

      return {
        ...state,
        allPlanets,
      };

    case EDIT_PLANET:
      allPlanets = state.allPlanets.map((planet) =>
        planet.id === action.payload.id
          ? { ...planet, ...action.payload }
          : planet
      );

      return {
        ...state,
        allPlanets,
      };

    case CHANGE_BELOVED_STATUS:
      allPlanets = state.allPlanets.map((planet) =>
        planet.id === action.payload
          ? { ...planet, beloved: !planet.beloved }
          : planet
      );

      return {
        ...state,
        allPlanets,
      };

    default:
      return state;
  }
};

export default planetReducer;
