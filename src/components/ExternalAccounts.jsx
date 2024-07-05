import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const ExternalAccounts = () => {
  return (
    <Card sx={{ maxWidth: 345, mb: "1em" }}>
      <CardContent>
        {[1, 2, 3, 4].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body1">Account {item}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ ml: 1 }}>
                www.account.com {item}
              </Typography>
              <AccountBalanceIcon />
            </Box>
          </Box>
        ))}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          sx={{ color: "white", backgroundColor: "primary.main" }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExternalAccounts;
