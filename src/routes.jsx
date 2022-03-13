import React from "react";
import { Navigate } from "react-router-dom";
import Editor from "./pages/Editor";
import Login from "./pages/Login";

const routes = [
    {
      path: "/",
      exact: true,
      component: <Navigate to="/login" replace={true} />
    },
    {
      path: "/login",
      exact: true,
      component: Login
    },
    {
      path: "/editor",
      exact: true,
      component: Editor
    },
  ];
  
  export default routes;