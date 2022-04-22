import TextField from "@mui/material/TextField";
import { SearchContext } from "./dashboard";
import { useContext } from "react";
// const Search = ({ showSearchedRecords }) => {

const Search = () => {
  const { url, setUrl, setQueryParams } = useContext(SearchContext);

  const search = (ev) => {
    if (ev.length > 3) {
      const url = `http://127.0.0.1:5002/dashboard/restaurantSearch/${ev}`;
      setUrl(url);
      setQueryParams({ skip: 0, limit: 12 });
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Restaurants"
        variant="outlined"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default Search;
