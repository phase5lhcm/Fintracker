import React from "react";
import ImageCard from "../../components/ImageCard";
import ExternalAccounts from "../../components/ExternalAccounts";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
} from "@mui/material";
const AccountsCard = ({ title }) => (
  <Card sx={{ mb: "1em" }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        molestiae id explicabo illo nobis! Sit impedit, amet, autem nam tempora
        reiciendis deserunt sequi, ipsam assumenda doloribus sed qui ad unde.
        Tenetur doloribus, eos modi consectetur accusantium voluptates quidem,
        quam ut mollitia qui esse nostrum, aliquam rem. Nisi, consequuntur
        necessitatibus. Aliquam possimus dolore nam vero laborum velit qui
        eligendi explicabo nulla.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        molestiae id explicabo illo nobis! Sit impedit, amet, autem nam tempora
        reiciendis deserunt sequi, ipsam assumenda doloribus sed qui ad unde.
        Tenetur doloribus, eos modi consectetur accusantium voluptates quidem,
        quam ut mollitia qui esse nostrum, aliquam rem. Nisi, consequuntur
        necessitatibus. Aliquam possimus dolore nam vero laborum velit qui
        eligendi explicabo nulla.
      </p>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

const UserProfile = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={3}>
          <ImageCard />
          <ExternalAccounts title="Accounts List 1" />
        </Grid>

        {/* Right Column */}
        <Grid item xs={9}>
          <AccountsCard title="Accounts List 2" />
          <AccountsCard title="Accounts List 3" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
