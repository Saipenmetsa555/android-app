// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // Make sure this is the default import
// import Cookies from "js-cookie";

// const ProtectedRoute = ({ children }) => {
//   const location = useLocation(); // Use location for redirecting back after login
//   const token = Cookies.get("jwt_token");

//   if (!token) {
//     // If there is no token, redirect to login page
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   try {
//     const decodedToken = jwtDecode(token);
//     console.log(decodedToken);
//     // Check if the token contains the username
//     if (decodedToken.username) {
//       // If username exists, allow access to the protected route
//       return <div>{children}</div>;
//     } else {
//       // If no username in token, redirect to login
//       return <Navigate to="/login" state={{ from: location }} />;
//     }
//   } catch (error) {
//     // In case of an invalid token (e.g., jwtDecode fails), redirect to login
//     console.error("Token decoding failed", error);
//     return <Navigate to="/login" state={{ from: location }} />;
//   }
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode correctly
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, role }) => {
  const location = useLocation(); // Use location for redirecting back after login
  const token = Cookies.get("jwt_token");

  if (!token) {
    // If there is no token, redirect to login page
    return <Navigate to="/login" state={{ from: location }} />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);

    // Check if the token contains the username
    if (decodedToken.username) {
      // If the username is "rahul", redirect to /admin
      if (
        decodedToken.username === "rahul" &&
        role === "rahul" &&
        location.pathname !== "/admin"
      ) {
        return <Navigate to="/admin" />;
      } else if (
        decodedToken.username === "praneetha" &&
        role === "praneetha" &&
        location.pathname !== "/"
      ) {
        return <Navigate to="/" />;
      }

      // If the user is authenticated but not "rahul", just render the protected children
      return children;
    } else {
      // If no username in token, redirect to login
      return <Navigate to="/login" state={{ from: location }} />;
    }
  } catch (error) {
    // In case of an invalid token (e.g., jwtDecode fails), redirect to login
    console.error("Token decoding failed", error);
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default ProtectedRoute;
