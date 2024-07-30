import "./Dashview.css";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import GroupIcon from "@mui/icons-material/Group";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PlayForWork from "@mui/icons-material/PlayForWork";
import School from "@mui/icons-material/School";
import ERROR_ICON from "../../../../../assets/errorIcon.png";
import axios from "axios";

import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
import { endpoint, headers } from "../../../../../constants";
import Header from "../../../../../Components/Header";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const fetchAllUsers = () => {
  return axios.get(`${endpoint}/api/users`, { headers: headers });
};

const fetchUsersWhichNotTest = () => {
  return axios.get(`${endpoint}/api/users?temperamentIsNul=true`, {
    headers: headers,
  });
};

const fetchAllTestResult = () => {
  return axios.get(`${endpoint}/api/testResultats`, {
    headers: headers,
  });
};

const fetchAllFilieres = () => {
  return axios.get(`${endpoint}/api/filieres`, {
    headers: headers,
  });
};

export const Dashview = () => {
  const {
    data: dataAllUsers,
    isLoading: isLoadingAllUsers,
    isError: isErrorAllUsers,
  } = useQuery(["all-users-list"], fetchAllUsers);

  const {
    data: dataUsersNotTest,
 
  } = useQuery(["users-which-not-test-list"], fetchUsersWhichNotTest);

  const {
    data: dataAllTestResult,
    isLoading: isLoadingAllTestResults,
    isError: isErrorAllTestResult,
  } = useQuery(["all-test-result-list"], fetchAllTestResult);

  const {
    data: dataAllFilieres,
    isLoading: isLoadingAllFilieres,
    isError: isErrorAllFilieres,
  } = useQuery(["all-filieres-list"], fetchAllFilieres);

  const pieData = {
    labels: ["Tempérament en attente", "Tempérament Connus"],
    datasets: [
      {
        data: [
          dataUsersNotTest?.data?.data?.length,
          dataAllUsers?.data?.data?.length -
            dataUsersNotTest?.data?.data?.length,
        ],
        backgroundColor: ["#FFA500", "#03AC13"],
        hoverBackgroundColor: ["#FF8C00", "#028A0F"],
      },
    ],
  };

  const barData = {
    labels: ["August"],
    datasets: [
      {
        label: "Tempérament en attente",
        data: [dataUsersNotTest?.data?.data?.length],
        backgroundColor: "#FFA500",
      },
      {
        label: "Tempérament Connus",
        data: [
          dataAllUsers?.data?.data?.length -
            dataUsersNotTest?.data?.data?.length,
        ],
        backgroundColor: "#03AC13",
      },
    ],
  };

 
  return (
    <div className="usersview">
      <Header title="Dashboard" subtitle="Bienvenue sur Success Admin" />

      <div className="body">
        <div className="loadingSection">
          <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper>
                  <Box p={2}>
                    <Typography variant="h6" align="center">
                      Statut des utilisateurs
                    </Typography>
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
                    <Pie  data={pieData} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper>
                  <Box p={2}>
                    <Typography variant="h6" align="center">
                      Statistiques mensuelles des tests
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="textSecondary"
                    >
                      Période : 2023-2024
                    </Typography>
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
                    <Bar data={barData} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper>
                  <Box p={2} textAlign="center">
                    <GroupIcon fontSize="large" />
                    <Typography variant="h6">Utilisateurs</Typography>
                    <Typography variant="h4">
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
                      {dataAllUsers?.data?.data?.length}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper>
                  <Box p={2} textAlign="center">
                    <PlayForWork fontSize="large" />
                    <Typography variant="h6">Tests réalisés</Typography>
                    <Typography variant="h4">
                      {isLoadingAllTestResults && (
                        <ClipLoader
                          color="hsl(210, 100%, 59%)"
                          loading={isLoadingAllUsers}
                          aria-label="Loading Spinner"
                          speedMultiplier={0.8}
                          data-testid="loader"
                        />
                      )}

                      {isErrorAllTestResult && (
                        <div className="errorIcon">
                          <h2 className="error">Something went wrong</h2>
                          <img src={ERROR_ICON} alt="" />
                        </div>
                      )}
                      {dataAllTestResult?.data?.data?.length}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper>
                  <Box p={2} textAlign="center">
                    <School fontSize="large" />
                    <Typography variant="h6">Filières</Typography>
                    <Typography variant="h4">
                      {isLoadingAllFilieres && (
                        <ClipLoader
                          color="hsl(210, 100%, 59%)"
                          loading={isLoadingAllUsers}
                          aria-label="Loading Spinner"
                          speedMultiplier={0.8}
                          data-testid="loader"
                        />
                      )}

                      {isErrorAllFilieres && (
                        <div className="errorIcon">
                          <h2 className="error">Something went wrong</h2>
                          <img src={ERROR_ICON} alt="" />
                        </div>
                      )}
                      {dataAllFilieres?.data?.data?.length}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper>
                  <Box p={2} textAlign="center">
                    <HandshakeIcon fontSize="large" />
                    <Typography variant="h6">En attente d'entretien</Typography>
                    <Typography variant="h4">0</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};
