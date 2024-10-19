// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// import "./login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [loginDetails, setLoginDetails] = useState({
//     username: "",
//     password: "",
//   });
//   const [errMsg, setErrMsg] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   const handleLogin = () => {
//     const userDetails = {
//       username: loginDetails.username,
//       password: loginDetails.password,
//     };
//     console.log(userDetails);
//     fetch("https://apis.ccbp.in/login", {
//       method: "POST",
//       body: JSON.stringify(userDetails),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.jwt_token) {
//           console.log(data, "data");
//           Cookies.set("jwt_token", data.jwt_token, { expires: 7 });
//           if (data.username === "rahul") {
//             navigate("/admin");
//           } else {
//             navigate("/");
//           }
//         } else if (data.status_code) {
//           console.log(data.status_code);
//           setErrMsg(data.error_msg);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div className="top-form-con">
//       <div className="text-container">
//         <h1>Digi Trade</h1>
//       </div>
//       <div>
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div className="user-container">
//             <label className="la">User Name</label>
//             <br />
//             <input
//               onChange={(e) => {
//                 const { name, value } = e.target;
//                 setLoginDetails((prevDetails) => ({
//                   ...prevDetails,
//                   [name]: value,
//                 }));
//               }}
//               name="username"
//               className="user-input"
//               type="text"
//             />
//           </div>
//           <div className="user-container">
//             <label className="la">Password</label>
//             <br />
//             <input
//               onChange={(e) => {
//                 const { name, value } = e.target;
//                 setLoginDetails((prevDetails) => ({
//                   ...prevDetails,
//                   [name]: value,
//                 }));
//               }}
//               name="password"
//               className="user-input"
//               type="password"
//             />
//           </div>
//           <div className="user-register-text">
//             <p>
//               New to Login <Link to={"/register"}>Register</Link>
//             </p>
//           </div>

//           <button className="submit-btn" type="submit">
//             Submit
//           </button>
//           <p
//             style={{
//               fontSize: "9px",
//               marginLeft: "10px",
//               marginRight: "auto",
//               color: "red",
//             }}
//           >
//             {errMsg}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// ===========================
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode to handle token decoding
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.username === "" || loginDetails.password === "") {
      setErrMsg("Both username and password are required!");
      return;
    }
    handleLogin();
  };

  // Login handler
  const handleLogin = () => {
    const userDetails = {
      username: loginDetails.username,
      password: loginDetails.password,
    };

    fetch("https://apis.ccbp.in/login", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt_token) {
          console.log(data, "data");
          Cookies.set("jwt_token", data.jwt_token, { expires: 7 });

          try {
            const decodedToken = jwtDecode(data.jwt_token);
            if (decodedToken.username === "rahul") {
              navigate("/admin");
            } else {
              navigate("/");
            }
          } catch (error) {
            console.error("Error decoding token", error);
            setErrMsg("Invalid token received. Please login again.");
          }
        } else if (data.status_code) {
          console.log(data.status_code);
          setErrMsg(data.error_msg || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Login request failed", err);
        setErrMsg("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="top-form-con">
      <div className="text-container">
        <h1>Digi Trade</h1>
      </div>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="user-container">
            <label className="la">User Name</label>
            <br />
            <input
              onChange={handleInputChange}
              name="username"
              className="user-input"
              type="text"
              value={loginDetails.username}
            />
          </div>
          <div className="user-container">
            <label className="la">Password</label>
            <br />
            <input
              onChange={handleInputChange}
              name="password"
              className="user-input"
              type="password"
              value={loginDetails.password}
            />
          </div>
          <div className="user-register-text">
            <p>
              New to Login? <Link to="/register">Register</Link>
            </p>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
          {errMsg && (
            <p
              style={{
                fontSize: "9px",
                marginLeft: "10px",
                color: "red",
              }}
            >
              {errMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

// =======================
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Storage } from "@capacitor/storage";
// // Import Capacitor Storage
// import "./login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [loginDetails, setLoginDetails] = useState({
//     username: "",
//     password: "",
//   });
//   const [errMsg, setErrMsg] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   const handleLogin = async () => {
//     const userDetails = {
//       username: loginDetails.username,
//       password: loginDetails.password,
//     };
//     console.log(userDetails);

//     try {
//       const response = await fetch("https://apis.ccbp.in/login", {
//         method: "POST",
//         body: JSON.stringify(userDetails),
//         headers: {
//           "Content-Type": "application/json", // Set content type
//         },
//       });
//       const data = await response.json();

//       if (data.jwt_token) {
//         console.log(data, "data");

//         // Store the token in Capacitor Storage
//         await Storage.set({
//           key: "authToken", // Use a key consistent with the one in ProtectedRoute
//           value: data.jwt_token,
//         });

//         navigate("/"); // Navigate after setting the token
//       } else if (data.status_code) {
//         console.log(data.status_code);
//         setErrMsg(data.error_msg);
//       }
//     } catch (err) {
//       console.error(err);
//       setErrMsg("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="top-form-con">
//       <div className="text-container">
//         <h1>Digi Trade</h1>
//       </div>
//       <div>
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div className="user-container">
//             <label className="la">User Name</label>
//             <br />
//             <input
//               onChange={(e) => {
//                 const { name, value } = e.target;
//                 setLoginDetails((prevDetails) => ({
//                   ...prevDetails,
//                   [name]: value,
//                 }));
//               }}
//               name="username"
//               className="user-input"
//               type="text"
//             />
//           </div>
//           <div className="user-container">
//             <label className="la">Password</label>
//             <br />
//             <input
//               onChange={(e) => {
//                 const { name, value } = e.target;
//                 setLoginDetails((prevDetails) => ({
//                   ...prevDetails,
//                   [name]: value,
//                 }));
//               }}
//               name="password"
//               className="user-input"
//               type="password"
//             />
//           </div>
//           <div className="user-register-text">
//             <p>
//               New to Login <Link to={"/register"}>Register</Link>
//             </p>
//           </div>

//           <button className="submit-btn" type="submit">
//             Submit
//           </button>
//           <p
//             style={{
//               fontSize: "9px",
//               marginLeft: "10px",
//               marginRight: "auto",
//               color: "red",
//             }}
//           >
//             {errMsg}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
