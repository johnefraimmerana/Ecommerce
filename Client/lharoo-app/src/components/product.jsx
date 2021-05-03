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
        <Grid container>
          <Grid container item direction="row" justify="space-evenly" alignItems="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
    </>
  );
}

export default Product;
