import { Box } from "@mui/material";
import ERROR_ICON from "../../../../../assets/errorIcon.png";
import { UserList } from "./UserList";
import Header from "../../../../../Components/Header";
import "./UsersView.css";
import { UsersViewHeaderActions } from "./UsersViewActions";
import { endpoint, headers } from "../../../../../constants";
import axios from "axios";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

const fetchAllUsers = () => {
  return axios.get(`${endpoint}/api/users`, { headers: headers });
};

export const UsersView = () => {
  const {
    data: dataAllUsers,
    isLoading: isLoadingAllUsers,
    isError: isErrorAllUsers,
  } = useQuery(["all-users-list"], fetchAllUsers);

  const subtitle = `Il y a au total ${dataAllUsers?.data?.data?.length} utilisateurs enregistrés`;
  return (
    <div className="usersview">
      <Header
        title="Gestion des utilisateurs"
        subtitle={subtitle}
        custumHeader={<UsersViewHeaderActions />}
      />

      <div className="body">
        <div className="loadingSection">
         

          <Box sx={{ p: 3 }}>
          {isLoadingAllUsers && (
            <ClipLoader
              color="hsl(210, 100%, 59%)"
              loading={isLoadingAllUsers}
              aria-label="Loading Spinner"
              speedMultiplier={0.8}
              data-testid="loader"
            />
          )}

          {isErrorAllUsers && (
            <div className="errorIcon">
              <h2 className="error">Something went wrong</h2>
              <img src={ERROR_ICON} alt="" />
            </div>
          )}
            <UserList />
          </Box>
        </div>
      </div>
    </div>
  );
};
