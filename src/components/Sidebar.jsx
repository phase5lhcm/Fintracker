import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuIcon from "@mui/icons-material/Menu";
import { tokens } from "../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        ".ps-sidebar-container": {
          background: isCollapsed
            ? "transparent !important"
            : `${colors.primary[400]} !important`,
        },
        ".ps-menuitem-root": {
          padding: "5px 35px 5px 20px !important",
        },
        ".ps-menuitem-root:hover": {
          color: "#868dfb !important",
        },
        ".ps-menuitem-root.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuIcon />}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" color={colors.grey[100]}>
                  FINTRACK
                </Typography>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              ></Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Christine Maynard
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Developer
                </Typography>
              </Box>

              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Account"
                  to="/user-profile"
                  icon={<AccountBoxIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Transactions"
                  to="/transactions"
                  icon={<MonetizationOnIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Reports"
                  to="/reports"
                  icon={<SummarizeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Analytics"
                  to="/analytics"
                  icon={<AnalyticsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Settings"
                  to="/settings"
                  icon={<SettingsApplicationsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Notifications"
                  to="/notifications"
                  icon={<NotificationsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Help"
                  to="/help"
                  icon={<HelpCenterIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;
