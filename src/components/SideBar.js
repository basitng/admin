import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HomeRounded, PersonRounded } from "@mui/icons-material";
import FolderCopyOutlined from "@mui/icons-material/FolderCopyRounded";
import CampaignOutlined from "@mui/icons-material/CampaignRounded";
import ChurchOutlined from "@mui/icons-material/ChurchRounded";
import NewspaperOutlined from "@mui/icons-material/NewspaperRounded";
import LightbulbOutlined from "@mui/icons-material/LightbulbRounded";
import { ListSubheader } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  const general = [
    { title: "Dashboard", id: React.useId(), path: "/", icon: <HomeRounded /> },
    {
      title: "Content",
      id: React.useId(),
      path: "content/",
      icon: <FolderCopyOutlined />,
    },
    {
      title: "Sermon",
      id: React.useId(),
      path: "sermon/",
      icon: <LightbulbOutlined />,
    },
    {
      title: "Church",
      id: React.useId(),
      path: "church/",
      icon: <ChurchOutlined />,
    },
    {
      title: "Articles",
      id: React.useId(),
      path: "articles/",
      icon: <NewspaperOutlined />,
    },
  ];
  const others = [
    {
      title: "Announcement",
      id: React.useId(),
      path: "announcemnet/",
      icon: <CampaignOutlined />,
    },
    {
      title: "Account",
      id: React.useId(),
      path: "account/",
      icon: <PersonRounded />,
    },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      elevation={3}
    >
      <Typography variant="h6" sx={{ m: "20px 15px 30px" }}>
        Dashbaord
      </Typography>
      <List>
        <ListSubheader>
          <Typography variant="body2">General</Typography>
        </ListSubheader>
        {general.map((nav) => (
          <ListItem button key={nav.key}>
            <ListItemIcon>{nav.icon}</ListItemIcon>
            <ListItemText primary={nav.title} />
          </ListItem>
        ))}
        <ListSubheader sx={{ m: "10px 0" }}>
          <Typography variant="body2">Others</Typography>
        </ListSubheader>
        {others.map((nav) => (
          <ListItem button key={nav.key}>
            <ListItemIcon>{nav.icon}</ListItemIcon>
            <ListItemText primary={nav.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
