const url = "https://swapi.dev/api";

export const getPeople = async () => {
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
          id,
          name,
          height,
          mass,
          gender,
          birth_year,
        };
      }
    );

    localStorage.setItem("people", JSON.stringify(people));
  }

  return people;
};
