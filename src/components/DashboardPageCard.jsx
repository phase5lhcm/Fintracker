import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper, Grid } from "@mui/material";
import fintrackDashboard from "../assets/images/fintrackDashboard.png";

const DashboardPageCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="computer and spy camera"
        height="430"
        image={fintrackDashboard}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1" align="center" gutterBottom>
              Welcome to Fintrack
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">Track Your Expenses</Typography>
            <Typography variant="body1">
              Keep a close eye on your spending habits, categorize your
              expenses, and understand where your money goes.
            </Typography>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ backgroundColor: "#4a90e2", marginTop: "2em" }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          size="small"
          sx={{ color: "white", backgroundColor: "primary.main" }}
        >
          Edit profile
        </Button>
        <Button
          size="small"
          sx={{ color: "white", backgroundColor: "primary.main" }}
        >
          Account Settings
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardPageCard;
