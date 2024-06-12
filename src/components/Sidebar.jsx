import { useState } from "react";
import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleIcon from "@mui/icons-material/People";
import HelpIcon from "@mui/icons-material/Help";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
import MapIcon from "@mui/icons-material/Map";
import AccountBox from "@mui/icons-material/AccountBox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsApplications from "@mui/icons-material/SettingsApplications";
import Notifications from "@mui/icons-material/Notifications";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  retur(
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "$ .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <MenuItem>menu items will be built here</MenuItem>

      {!isCollapsed && (
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box>
              image goes here
              {/* <img
                src="#"
                alt="profile-user"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              /> */}
            </Box>
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Christine Maynard
            </Typography>
            <Typography variant="h5" color={colors.green[500]}>
              Developer
            </Typography>
          </Box>

          {/*MENU ITEMS */}
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
              to="/"
              icon={<AccountBox />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transactions"
              to="/"
              icon={<MonetizationOnIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reports"
              to="/"
              icon={<SummarizeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Analytics"
              to="/"
              icon={<AnalyticsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/"
              icon={<SettingsApplications />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/"
              icon={<Notifications />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Help"
              to="/"
              icon={<HelpCenterIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/"
              icon={<CalendarTodayIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
