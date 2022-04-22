import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import useFetch from "../customHooks/useFetch";

function CuisinesChips() {
  const url = `http://127.0.0.1:5002/dashboard/cuisines`;

  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {
        data &&
          // <Stack direction="row" spacing={1}>
          data.map((cuisine) => (
            <Chip key={cuisine} style={{ margin: "5px" }} label={cuisine} />
          ))
        // </Stack>
      }
    </div>
  );
}

export default CuisinesChips;
