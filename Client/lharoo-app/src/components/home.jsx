import { React } from "react";
import Footer from "./footer";
import Grid from "@material-ui/core/Grid";
import Gaming from "../images/gaming.svg";

function Home() {
  return (
    <div>
      <div>
        <Grid container justify="space-evenly" direction="row" spacing={10}>
          <Grid item>
            <div className="home-item">
              <h1 style={{ color: "white", fontSize: "100px" }}>Lharo</h1>
              <p style={{ color: "white" }}>We offer games that suit you!</p>
            </div>
          </Grid>
          <Grid item>
            <img
              style={{ width: "700px", marginTop: "100px" }}
              src={Gaming}
            ></img>
          </Grid>
        </Grid>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
