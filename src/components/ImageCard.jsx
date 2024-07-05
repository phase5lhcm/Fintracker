import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profile from "../assets/images/profile.png";

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 345, mb: "1em" }}>
      <CardMedia
        component="img"
        alt="user's profile picture"
        height="140"
        image={profile}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          Sheila McArthy
        </Typography>
        <Typography variant="body2" color="text.primary">
          Product Specialist
        </Typography>
        <Typography variant="body2" color="text.primary">
          42 E Avenue <br /> New York NJ 23381
        </Typography>
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

export default ImageCard;
