import React from "react";
import { Grid, Container } from "@mui/material";
import Register from "../../components/Register";

const LandingPage = () => {
  return (
    <Container
      style={{
        height: "50vh",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "100%",
              border: "2px solid  #4a90e2",
              borderRadius: "5px",
              padding: "1em",
            }}
          >
            <Register />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              height: "100%",
              border: "2px solid  #4a90e2",
              borderRadius: "5px",
              padding: "1em",
            }}
          >
            Some marketing content goes here
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
