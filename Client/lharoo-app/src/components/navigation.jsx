import React from "react";
import Image from "../images/brand-vector.svg";
import { Link } from "react-router-dom";
import { IconButton, Button } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

//variables of classes
const navClasses = "navbar bg-dark";
const ulClasses = "nav navbar";
const aClasses = "nav-link text-light";
const brandClasses = "navbar-brand px-5 text-light";
const homeClass = "nav-link text-light ml-5";
const imgClass = "d-inline-block align-center";

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <nav className={navClasses}>
          <ul className={ulClasses}>
            <li>
              <Link className={brandClasses} to="./home">
                <img
                  src={Image}
                  alt="brand"
                  width="50"
                  height="50"
                  className={imgClass}
                ></img>{" "}
                Lharo
              </Link>
            </li>
            <li>
              <Link className={homeClass} to="./home">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link to="./product" className={aClasses}>
                Product
              </Link>
            </li>
            <li>
              <Link to="./about" className={aClasses}>
                About
              </Link>
            </li>
            <li>
              <Link to="./checkout">
                <IconButton>
                  <ShoppingCartOutlinedIcon color="secondary" />
                </IconButton>
              </Link>
            </li>
          </ul>
          <Link to="./sign-in" className="nav-link">
            <Button color="secondary" variant="contained" size="small">
              sign in
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
