import Grid from "../materialComponents/grid";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const innitialQP = {
    skip: 0,
    limit: 12,
  };

  const [queryParams, setQueryParams] = useState(innitialQP);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  let url = `http://127.0.0.1:5002/dashboard/allRestaurants?skip=${queryParams.skip}&limit=${queryParams.limit}`;

  const moreData = () => {
    setQueryParams({
      skip: queryParams.skip + queryParams.limit,
      limit: queryParams.limit,
    });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw error("Error");
        return res.json();
      })
      .then((info) => {
        setData((oldArray) => [...oldArray, ...info.data]);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setData([]);
        setError(err);
        setLoading(false);
      });
  }, [queryParams]);

  return (
    <div className="dashboard-container">
      <div className="searchbox">
        <Search />
      </div>
      <div className="cusinesList">
        <Cuisines />
      </div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <div className="grid-container">
        {data && data.length > 0 && (
          <Grid info={data} moreDataHandler={moreData} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
