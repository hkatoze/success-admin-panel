import { Outlet } from "react-router-dom";

import "./Usersboard.css";
import { UsersView } from "./Components/UsersView";

export const Usersboard = () => {
  return  <div className="usersboard">
  {location.pathname === "/mainpage/usersboard" ? (
    <UsersView />
  ) : (
    <Outlet />
  )}
</div>
};
