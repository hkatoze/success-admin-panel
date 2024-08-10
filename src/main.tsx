import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Errorpage from "./routes/Errorpage";

import App from "./App";
import Login from "./routes/login/Login";
import Mainpage from "./routes/main/Mainpage";

import Profilboard from "./routes/main/board/profilboard/Profilboard";
import Helpboard from "./routes/main/board/helpboard/Helpboard";

import { Usersboard } from "./routes/main/board/usersboard/Usersboard";
import { Dashview } from "./routes/main/board/dashboard/Components/Dashview";
import { Dashboard } from "./routes/main/board/dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "mainpage",
        element: <Mainpage />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [{ path: "dashview", element: <Dashview /> }],
          },

          {
            path: "usersboard",
            element: <Usersboard />,
          },

          { path: "profilboard", element: <Profilboard /> },
          { path: "helpboard", element: <Helpboard /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
