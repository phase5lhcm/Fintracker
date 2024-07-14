import React from "react";
import { Box, Paper, Grid, Button } from "@mui/material";
import Header from "../../components/Header";
import DashboardPageCard from "../../components/DashboardPageCard";
import NewsSection from "../../components/NewsSection";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subTitle="Manage Your Dashboard" />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Paper sx={{ padding: 2, height: "100%" }}>
              <DashboardPageCard />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ padding: 2, height: "100%" }}>
              <NewsSection />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
