import { React } from "react";
import Navigation from "./navigation";
import ProductCard from "../components/productComponents/productCard";
import { Grid } from "@material-ui/core";
import Footer from "./footer";
import ProductNavBar from "../components/productComponents/productNavBar";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: { "& > *": { marginTop: theme.spacing(1) } },
}));

function Product() {
  return (
    <>
      <Navigation />
      <Grid container justify="center">
        <ProductNavBar />
      </Grid>
      <div>
        <Grid container>
          <Grid container item direction="row" justify="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item direction="row" justify="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item direction="row" justify="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
      </div>
      <Grid container justify="center">
        <div className={useStyles.root}>
          <Pagination count={3} shape="rounded" color="secondary" />
        </div>
      </Grid>
      <Footer />
    </>
  );
}

export default Product;
