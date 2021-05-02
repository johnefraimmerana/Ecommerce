import { React } from "react";
import Navigation from "./navigation";
import ProductCard from "../components/productComponents/productCard";
import { Grid, Box } from "@material-ui/core";
import Footer from "./footer";
import ProductNavBar from "../components/productComponents/productNavBar";
function Product() {
  return (
    <>
      <Navigation />
      <ProductNavBar />
      <Box my={2}>
        <Grid container spacing={2} justify={"center"}>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
      <Box my={2}>
        <Grid container spacing={2} justify={"center"}>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
          <Grid container xs={2} item py="2">
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Product;
