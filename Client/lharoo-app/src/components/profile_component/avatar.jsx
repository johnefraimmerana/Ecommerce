import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@material-ui/core/Avatar";
import Dropdown from "react-bootstrap/Dropdown";
import Grid from "@material-ui/core/Grid";

function ProfileAvatar() {
  const { user, isAuthenticated, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <Grid container>
          <Grid>
            <Avatar alt="profile" src={user.picture} />
          </Grid>
          <Grid>
            <Dropdown size="lg">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user.nickname}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return null;
  }
}

export default ProfileAvatar;
