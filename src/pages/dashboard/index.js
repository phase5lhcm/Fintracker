import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subTitle="Manage Your Dashboard" />
      Dashboard
    </Box>
  );
};

export default Dashboard;
