import { Outlet } from "react-router-dom";

import "./TemperamentsBoard.css";
import TemperamentsView from "./Components/TemperamentsView";

export const TemperamentsBoard = () => {
  return (
    <div className="temperamentsboard">
      {location.pathname === "/mainpage/temperamentsboard/temperamentsView" ? (
        <TemperamentsView />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
