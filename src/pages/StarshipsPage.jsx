import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/common/Table";
import Button from "../components/common/Button";

import { getStarships } from "../services/swApiService";
import {
  setStarships,
  deleteStarship,
  changeBelovedStatus,
} from "../store/actions/starships";
import { getAllStarships } from "../store/selectors/starships";

const StarshipsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const starships = useSelector((state) => getAllStarships(state));

  useEffect(() => {
    const getData = async () => {
      const data = await getStarships();
      dispatch(setStarships(data));
    };
    getData();
  }, []);

  const handleDeleteStarship = (id) => {
    const filteredStarships = starships.filter((starship) => {
      return starship.id !== id;
    });
    dispatch(deleteStarship(id));
    localStorage.setItem("starships", JSON.stringify(filteredStarships));
  };

  const handleBelovedStatus = (id) => {
    const data = starships.map((starship) => {
      return starship.id === +id
        ? { ...starship, beloved: !starship.beloved }
        : starship;
    });

    dispatch(changeBelovedStatus(id));
    localStorage.setItem("starships", JSON.stringify(data));
  };

  const getColumnNames = () => {
    if (!starships.length) {
      return [];
    }

    return Object.keys(starships[0]);
  };

  return (
    <div className="container">
      <Button
        label="Create starship"
        classes="btn btn-warning text-white"
        onClick={() => {
          history.push("/starships/new");
        }}
      />
      {starships.length <= 0 ? (
        <h3 className="text-center mb-3">No data</h3>
      ) : (
        <Fragment>
          <h3 className="text-center mb-3">
            Starships from Star Wars Universe
          </h3>
          <Table
            columns={getColumnNames()}
            data={starships}
            tableDescriptor="Starships"
            onDelete={handleDeleteStarship}
            belovedStatus={handleBelovedStatus}
          />
        </Fragment>
      )}
    </div>
  );
};

export default StarshipsPage;
