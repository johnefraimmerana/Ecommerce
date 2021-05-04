import { React } from "react";
import Navigation from "./navigation";
import ProductCard from "../components/productComponents/productCard";
import { Grid} from "@material-ui/core";
import Footer from "./footer";
import ProductNavBar from "../components/productComponents/productNavBar";
function Product() {
  return (
    <>
      <Navigation />
      <ProductNavBar />
        <div>
        <Grid container>
          <Grid container item direction="row" justify="space-evenly" alignItems="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item direction="row" justify="space-evenly" alignItems="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item direction="row" justify="space-evenly" alignItems="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
        </div>
        <Footer />
    </>
  );
}

export default Product;
