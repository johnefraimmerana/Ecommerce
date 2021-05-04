import { React } from "react";
import Navigation from "./navigation";
import Registration from "./registration";
import Footer from "./footer";
import Grid from '@material-ui/core/Grid';
import Element from './element';

function Home() {
  return (
    <div >
      <Navigation />
      <div>
      <Grid container justify="space-evenly"  direction="row" spacing={10}>  
        <Grid item  justify="center" alignItems="center" direction="column">
        <div className="home-item">
          <h1>Lharo</h1>
          <p>We offer games that suit you!</p>
        </div>
        </Grid>
        <Grid item>
          <Registration />
        </Grid>
      </Grid>
      </div>
        <div >
        <Footer />
        </div>
    </div>
  );
}
export default Home;
