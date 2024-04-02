import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import AuthProvaider from "./provaider/AuthProvider/AuthProvaider";
import Orders from "./component/Orders/Orders";
import PrivetRoute from "./route/PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </React.StrictMode>
);
