import { Link } from "react-router-dom";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import "./UsersViewActions.css";
import Button from "../../../../../Components/Button";

export const UsersViewHeaderActions = () => {
  return (
    <div className="actions">
      <div className="iconBox">
        <HiAdjustmentsHorizontal size="30" />
      </div>
      <Link to="/mainpage/usersboard/addUser">
        <Button type="button">CREATE USER</Button>
      </Link>
    </div>
  );
};
