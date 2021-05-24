import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../checkout/table";
import { useAuth0 } from "@auth0/auth0-react";

export function getProduct(data) {
  const newData = data;
  return newData;
}
function CheckOut() {
  console.log(getProduct());
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <Grid container justify="center">
        <h1 style={{ color: "white" }}>Cart is empty.</h1>
      </Grid>
    );
  }
  if (isAuthenticated)
    return (
      <>
        <Grid container xs={12} justify="center" direction="row">
          <Grid item xs={12} container justify="center">
            <h1 style={{ color: "white" }}>Cart.</h1>
          </Grid>
          <Grid item xs={6} justify="space-around">
            <Table data={getProduct} />
          </Grid>
        </Grid>
      </>
    );
}

export default CheckOut;
