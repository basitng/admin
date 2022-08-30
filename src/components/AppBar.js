import { NotificationsOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useId } from "react";
import BottomNav from "./BottomNav";

export default function NavBar() {
  const drawerWidth = 240;
  const links = [
    { pathname: "Dashboard", active: true, path: "dashboard/", id: useId() },
    { pathname: "Content", active: false, path: "content/", id: useId() },
    { pathname: "Sermon", active: false, path: "sermon/", id: useId() },
    { pathname: "Church", active: false, path: "church/", id: useId() },
    { pathname: "Articles", active: false, path: "articles/", id: useId() },
  ];
  return (
    <AppBar
      variant="elevation"
      color="inherit"
      elevation={3}
      sx={(theme) => ({
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        [theme.breakpoints.down("md")]: {
          width: "100%",
          ml: 0,
        },
      })}
    >
      <Toolbar>
        <Hidden smDown>
          <Hidden only="lg">
            <Box sx={{ flex: 1 }}>Dashboard</Box>
          </Hidden>
          <Hidden mdDown>
            <Box sx={{ flex: 1 }}></Box>
          </Hidden>
          <Box sx={{ display: "flex" }}>
            {links.map(({ pathname, id, active, path }) => (
              <Button
                key={id}
                disableElevation
                variant={active ? "contained" : "text"}
                sx={{
                  mr: 2,
                  color: active ? "white" : "#555",
                  textTransform: "capitalize",
                  background: active && "#3948a8dc",
                }}
              >
                {pathname}
              </Button>
            ))}
            <Tooltip title={"Notifications"}>
              <Box></Box>
            </Tooltip>
            <Tooltip title={"Notifications"}>
              <IconButton sx={{ mr: 2 }}>
                <Badge badgeContent={3} variant="standard" color="secondary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title={"User Account"}>
              <Avatar sx={{ background: "#3948a8dc", cursor: "pointer" }}>
                A
              </Avatar>
            </Tooltip>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Dashboard</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Tooltip title={"Notifications"}>
              <Box></Box>
            </Tooltip>
            <Tooltip title={"Notifications"}>
              <IconButton sx={{ mr: 2 }}>
                <Badge badgeContent={3} variant="standard" color="secondary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title={"User Account"}>
              <Avatar sx={{ background: "#3948a8dc", cursor: "pointer" }}>
                A
              </Avatar>
            </Tooltip>
          </Box>
          <BottomNav />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
