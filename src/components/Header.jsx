import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.colors.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
