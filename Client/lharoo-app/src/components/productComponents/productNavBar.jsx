import React from "react";
import { Grid, Box } from "@material-ui/core";

export default function ProductNavBar() {
  return (
    <>
      <Box my={2}>
        <Grid container justify={"center"}>
          <Grid container item xs={1}>
            <ul className="navbar-nav dropdown">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Your Store
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </Grid>
          <Grid container item xs={1}>
            <ul className="navbar-nav dropdown">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Free to play
                  </a>
                  <a className="dropdown-item" href="/">
                    Arcade
                  </a>
                  <a className="dropdown-item" href="/">
                    Moba
                  </a>
                </div>
              </li>
            </ul>
          </Grid>
          <Grid container item xs={1}>
            <ul className="navbar-nav dropdown">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Merchandise
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </Grid>
          <Grid container item xs={1}>
            <ul className="navbar-nav dropdown">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
