import React from "react";
import Navigation from "../navigation";
import Grid from "@material-ui/core/Grid";
function CheckOut() {
  return (
    <>
      <Grid container xs={12} justify="center">
        <div>
          <h1 style={{ color: "white" }}>Cart is empty.</h1>
        </div>
      </Grid>
    </>
  );
}

export default CheckOut;
