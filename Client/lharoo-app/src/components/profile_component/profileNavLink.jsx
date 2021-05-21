import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProfileLink() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <li>
      <Link to="./profile" className="nav-link text-light">
        Profile
      </Link>
    </li>;
  }
  else{
      return null;
  }
}

export default ProfileLink;
