import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Admin from "./Components/pages/Admin";
import Container from "./Components/Container";
import Home1 from "./Components/pages/Home1";
import ProtectedRoute from "./Components/ProtectedRoute";
import H from "./Components/pages/H";
import Orders from "./Components/pages/Orders";
import Users from "./Components/pages/Users";
import New from "./Components/pages/New";
import Approved from "./Components/pages/Approved";
import History from "./Components/pages/History";
import Tracking from "./Components/pages/Tracking";
import CreateUser from "./Components/pages/CreateUser";
import ApprovalUser from "./Components/pages/ApprovalUser";
import AddCategory from "./Components/pages/AddCategory";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role={["rahul", "praneetha"]}>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/11",
        element: (
          <ProtectedRoute>
            <Home1 />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createuser",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <CreateUser />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addcategory",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <AddCategory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approvaluser",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <ApprovalUser />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tracking",
        element: (
          <ProtectedRoute>
            <Tracking />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approved",
        element: (
          <ProtectedRoute role={["rahul"]}>
            <Approved />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectedRoute role={["praneetha"]}>
            <H />
          </ProtectedRoute>
        ),
      },
      {
        path: "/1",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute role={"rahul"}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
