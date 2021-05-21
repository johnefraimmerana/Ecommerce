import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../isLoading";
function Profile() {
  const { user } = useAuth0();
  return (
    <>
      <div>
        <div className="row">
          <pre className="col-12 text-light p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
