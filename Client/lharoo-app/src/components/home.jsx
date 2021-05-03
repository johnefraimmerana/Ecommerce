import { React } from "react";
import Navigation from "./navigation";
import Registration from "./registration";
import Footer from "./footer";
import Grid from '@material-ui/core/Grid';
import Element from './element';
import Box from '@material-ui/core/Box';

function Home() {
  return (
    <>
      <Navigation />
      <Grid container justify="space-evenly"  direction="row" spacing={10}>  
        <Grid item >
          <Element/>
        </Grid>
        <Grid item>
          <Registration />
        </Grid>
      </Grid>
        <Footer />
      
    </>
  );
}
export default Home;
