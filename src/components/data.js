const peopleData = [
  { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
  { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
  { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];
const peopleColumns = Object.keys(peopleData[0]);

const planetsData = [
  { planet: "Mars", handle: "@motto", id: "1" },
  { planet: "Jupiter", handle: "@ceno", id: "2" },
  { planet: "Neptune", handle: "@ssteve", id: "3" },
  { planet: "Uranus", handle: "@ssteve", id: "4" },
];
const planetsColumns = Object.keys(planetsData[0]);

const starshipsData = [
  { starship: "Mars", handle: "@motto", id: "1" },
  { starship: "Jupiter", handle: "@ceno", id: "2" },
  { starship: "Neptune", handle: "@ssteve", id: "3" },
  { starship: "Uranus", handle: "@ssteve", id: "4" },
];
const starshipsColumns = Object.keys(starshipsData[0]);

export {
  peopleData,
  planetsData,
  starshipsData,
  peopleColumns,
  planetsColumns,
  starshipsColumns,
};
