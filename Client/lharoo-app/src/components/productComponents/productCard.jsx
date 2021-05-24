import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  CardActions,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: "100",
    fontSize: 10,
  },
  root: {
    maxWidth: "100px",
  },
  title: {
    fontSize: 14,
    marginLeft: "100px",
  },
  media: {
    height: "100px",
    width: "100px",
  },
}));

function ProductCard(props) {
  const classes = useStyles;

  const handleClick = () => {
    props.addCart(props);
  };

  return (
    <>
      <Box m={1}>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media}>
              <img
                src={props.image}
                alt="product"
                style={{ height: "150px", width: "150px" }}
              ></img>
            </CardMedia>
          </CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            {props.name}
          </Typography>
          <CardActions spacing={4}>
            <Button
              onClick={handleClick}
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
            >
              Add
            </Button>
            <Typography align="right" text="secondary">
              ₱{props.price}
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default ProductCard;
