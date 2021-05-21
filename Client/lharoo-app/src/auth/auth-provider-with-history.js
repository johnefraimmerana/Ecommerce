import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-6ucjwjvn.jp.auth0.com";
  const clientId = "HIPJkMZnQPBbAknOtxioeajEd1jzK5JY";

  const history = useHistory();

  const onRedirectCallback = () => {
    history.push("/profile");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
