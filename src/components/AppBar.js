import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useId } from "react";

export default function NavBar() {
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
      sx={{ width: "100%" }}
    >
      <Toolbar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" color="GrayText">
            Dashboard
          </Typography>
        </Box>
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
          <Tooltip title={"User Account"}>
            <Avatar sx={{ background: "#3948a8dc", cursor: "pointer" }}>
              A
            </Avatar>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
