import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {/* <Button color="inherit">Login</Button> */}
          {/* <Button color="inherit"> */}
          <Link to="/cart">Cart</Link>
          {/* </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
