import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="hyphenrj.us.auth0.com"
    clientId="jSb9cS0q5aVqOTK6LHOMV4ZnbeIZ7CtB"
    redirectUri="https://localhost:3000/authorize"
    responseType="token id_token"
    scope="openid profile email"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
