import React, { useState } from "react";
import Image from "../images/brand-vector.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "../login/loginModal";
import { IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

//variables of classes
const navClasses = "navbar bg-dark";
const ulClasses = "nav navbar";
const aClasses = "nav-link text-light";
const brandClasses = "navbar-brand px-5 text-light";
const homeClass = "nav-link text-light ml-5";
const imgClass = "d-inline-block align-center";

function Navigation() {
  const [openLogin, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
              <Tooltip>
                <IconButton aria-label="cart">
                  <ShoppingCartOutlinedIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
          <Button className="btn btn-sm btn-success" onClick={openModal}>
            Login
          </Button>
          <Login
            isOpen={openLogin}
            close={closeModal}
            autoFocus={true}
            closeButton={true}
          />
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
