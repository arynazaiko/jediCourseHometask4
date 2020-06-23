const url = "https://swapi.dev/api";

const getPeople = async () => {
  let peopleJSON = localStorage.getItem("people");
  let people = peopleJSON && JSON.parse(peopleJSON);

  if (!people || !people.length) {
    localStorage.setItem("currentId", 1);
    const peopleResponse = await (await fetch(`${url}/people`)).json();

    people = peopleResponse.results.map(
      ({ name, height, mass, gender, birth_year }) => {
        const id = +localStorage.getItem("currentId");
        localStorage.setItem("currentId", id + 1);

        return {
          name,
          height,
          mass,
          gender,
          birth_year,
          beloved: false,
          id,
        };
      }
    );

    localStorage.setItem("people", JSON.stringify(people));
  }

  return people;
};

const getPlanets = async () => {
  let planetsJSON = localStorage.getItem("planets");
  let planets = planetsJSON && JSON.parse(planetsJSON);

  if (!planets || !planets.length) {
    localStorage.setItem("currentId", 1);
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    planets = planetsResponse.results.map(
      ({
        name,
        diameter,
        rotation_period,
        orbital_period,
        gravity,
        population,
      }) => {
        const id = +localStorage.getItem("currentId");
        localStorage.setItem("currentId", id + 1);

        return {
          id,
          name,
          diameter,
          rotation_period,
          orbital_period,
          gravity,
          population,
        };
      }
    );

    localStorage.setItem("planets", JSON.stringify(planets));
  }

  return planets;
};

const getStarships = async () => {
  let starshipsJSON = localStorage.getItem("starships");
  let starships = starshipsJSON && JSON.parse(starshipsJSON);

  if (!starships || !starships.length) {
    localStorage.setItem("currentId", 1);
    const starshipsResponse = await (await fetch(`${url}/starships`)).json();

    starships = starshipsResponse.results.map(
      ({ name, model, starship_class, manufacturer, crew, passengers }) => {
        const id = +localStorage.getItem("currentId");
        localStorage.setItem("currentId", id + 1);

        return {
          id,
          name,
          model,
          starship_class,
          manufacturer,
          crew,
          passengers,
        };
      }
    );

    localStorage.setItem("starships", JSON.stringify(starships));
  }

  return starships;
};

export { getPeople, getPlanets, getStarships };
