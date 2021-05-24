import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../isLoading";
function Profile() {
  const { user } = useAuth0();
  return (
    <>
      
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
