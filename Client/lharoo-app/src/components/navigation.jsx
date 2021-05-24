import React from "react";
import Image from "../images/brand-vector.svg";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ProfileLink from "./profile_component/profileNavLink";
import ProfileAvatar from "./profile_component/avatar";
import Login from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
//variables of classes
const navClasses = "navbar bg-dark";
const ulClasses = "nav navbar";
const aClasses = "nav-link text-light";
const brandClasses = "navbar-brand px-5 text-light";
const homeClass = "nav-link text-light ml-5";
const imgClass = "d-inline-block align-center";

function Navigation() {
  const { isAuthenticated } = useAuth0();
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
              <ProfileLink />
            </li>
            <li>
              <Link to="./checkout">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartOutlinedIcon color="secondary" />
                </Badge>
              </Link>
            </li>
          </ul>
          {!isAuthenticated ? <Login /> : null}
          <ProfileAvatar />
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
