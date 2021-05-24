import React from "react";
import Grid from "@material-ui/core/Grid";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <Grid container justify="center" direction="column">
    <div className="spinner">
      <img src={loadingImg} alt="Loading..." />
    </div>
  </Grid>
);

export default Loading;
