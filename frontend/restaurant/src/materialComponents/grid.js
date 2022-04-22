import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardBox from "./../components/card";

export default function RowAndColumnSpacing({ info, moreDataHandler }) {
  return (
    <div>
      {info && typeof info === "string" && <div>{info} </div>}
      {info && Array.isArray(info) && info.length > 0 && (
        <Box sx={{ width: "100%", backgroundColor: "#eeeff1" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {info.map((infO, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <CardBox info={infO} />
              </Grid>
            ))}
          </Grid>
          {/* <button className="moreInfobtn" onClick={moreDataHandler}>
        More Info
      </button> */}

          <Fab
            className="moreInfobtn"
            onClick={moreDataHandler}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
      )}
    </div>
  );
}
