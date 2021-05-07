import React from "react";
import { Card, CardContent, Typography, CardMedia, Box, CardActions } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: '100',
    fontSize: 10,
  },
  root: {
    maxWidth: "100px",
  },
  title: {
    fontSize: 14,
  },
  media : {
    height: '100px',
    width: '100px',
  },
}));

function ProductCard() {
  const classes = useStyles;

  return (
    <>
      <Box m={1}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            game title
          </Typography>

          <CardMedia className={classes.media}>
            <img src="https://picsum.photos/200" alt ="products"></img>
          </CardMedia>
        </CardContent>
        <CardActions spacing={4}>
        <Button
        size="small"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add
      </Button>
          <Typography text="secondary">₱500</Typography>
        </CardActions>
      </Card>
      </Box>
    </>
  );
}

export default ProductCard;
