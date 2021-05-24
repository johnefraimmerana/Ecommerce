import React from "react";
import Image from "../images/about.svg";
import Grid from "@material-ui/core/Grid";

function About() {
  return (
    <>
      <Grid container direction="row">
        <Grid container item xs={6}>
          <div>
            <img
              src={Image}
              style={{ maxHeight: 400, marginLeft: 100, marginTop: 80 }}
              alt=""
            />
          </div>
        </Grid>
        <Grid container item xs={6} alignItems="center" justify="space-evenly">
          <h4 style={{ width: 600, color: "white" }}>
            Lharo was created in 2019 by the imaginative minds of Jezreel, Paulo
            and John.
          </h4>
          <h4 style={{ width: 600, color: "white" }}>
            The founders of the company were avid fans of online games at a very
            young age. Consequently, this led to them wanting to make online
            games more affordable and accessible yet fun and exciting.
          </h4>
          <h4 style={{ width: 600, color: "white" }}>
            Lharo, now only after two (2) years since its founding, has over
            100,000 subscribers around the world with more than a thousand games
            to choose from.
          </h4>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
