import { React, useEffect, useState } from "react";
import ProductCard from "../components/productComponents/productCard";
import { Grid } from "@material-ui/core";
import Footer from "./footer";
import ProductNavBar from "../components/productComponents/productNavBar";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { getProduct } from "./checkout/checkout";

const useStyles = makeStyles((theme) => ({
  root: { "& > *": { marginTop: theme.spacing(1) } },
}));

function Product(props) {
  const [product, setProduct] = useState([]);
  const [productCart, setProductCart] = useState({});
  getProduct(productCart);
  const addCart = (val) => {
    setProductCart(val);
  };
  useEffect(() => {
    axios
      .get("https://lharo.herokuapp.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Grid container justify="center">
        <ProductNavBar />
      </Grid>
      <Grid container>
        <Grid container item direction="row" justify="center">
          {product.map((res) => {
            return (
              <ProductCard
                key={res._id}
                id={res._id}
                name={res.productName}
                genre={res.genre}
                price={res.price}
                image={res.image}
                addCart={addCart}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid container justify="center">
        <div className={useStyles.root}>
          <Pagination count={3} shape="rounded" color="secondary" />
        </div>
      </Grid>
      <Footer />
    </div>
  );
}

export default Product;
