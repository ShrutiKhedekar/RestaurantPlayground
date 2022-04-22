import useFetch from "../customHooks/useFetch";
import Grid from "./../materialComponents/grid";
import Cuisines from "./cuisines";
import { useState } from "react";
import Counter2 from "./reduceTryComplex";
import DeepNestedComponent from "./deepNestedComp";
import React from "react";

export const SearchContext = React.createContext();

const Dashboard = () => {
  const innitialQP = {
    skip: 0,
    limit: 12,
  };
  const [queryParams, setQueryParams] = useState(innitialQP);

  const innitialUrl = `http://127.0.0.1:5002/dashboard/allRestaurants?skip=${queryParams.skip}&limit=${queryParams.limit}`;

  const [url, setUrl] = useState(innitialUrl);

  const { data, loading, error } = useFetch(url);
  const moreData = () => {
    const skipInfo = queryParams.skip + queryParams.limit;
    setQueryParams({
      skip: skipInfo,
      limit: queryParams.limit,
    });
    const url = `http://127.0.0.1:5002/dashboard/allRestaurants?skip=${skipInfo}&limit=${queryParams.limit}`;
    setUrl(url);
  };

  // using props
  // const showSearchedRecords = (info) => {
  //   setUrl(info);
  //   setQueryParams(innitialQP);
  // };

  const conObj = {
    url,
    setUrl,
    setQueryParams,
  };

  return (
    <div className="dashboard-container">
      {/* <div>
        <Counter />
      </div>

      <div>
        <Counter2 />
      </div> */}

      {/* Using use context */}
      <SearchContext.Provider value={conObj}>
        <DeepNestedComponent />
      </SearchContext.Provider>

      {/* using props */}
      {/* <div className="searchBox">
        <Search showSearchedRecords={showSearchedRecords} />
      </div> */}

      <div className="cusinesList">
        <Cuisines />
      </div>
      <div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {data && <Grid info={data} moreDataHandler={moreData} />}
      </div>
    </div>
  );
};

export default Dashboard;
