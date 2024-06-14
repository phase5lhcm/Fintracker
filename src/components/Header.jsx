import React, { useContext } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ColorModeContext } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = useContext(ColorModeContext);
  return (
    <Box>
      <Typography variant="h1" component="div">
        {title}
      </Typography>
      <Typography variant="h2" component="div">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
