import React from "react";
import { Card, CardContent, Typography, CardMedia, IconButton, Grid } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const makeStyles = {
  root: {
    maxWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  media : {
    height: '100px',
    width: '100px',
  }
};

function ProductCard() {
  const classes = makeStyles;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            game title
          </Typography>
          <CardMedia
            title="product"
          >
            <img src="https://picsum.photos/200"></img>
          </CardMedia>
        </CardContent>
        <Grid container>
          <Grid item>
          <IconButton aria-label="add-cart">
          <AddShoppingCartIcon color="secondary"></AddShoppingCartIcon>
        </IconButton>
        <Typography text="secondary">₱500</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default ProductCard;
