import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

// export default LoginButton;

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ returnTo: window.location.origin })}>
//       Log Out
//     </button>
//   );
// };

export default LoginButton;
