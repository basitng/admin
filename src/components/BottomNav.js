import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  CampaignOutlined,
  ChurchOutlined,
  HomeRounded,
  LibraryBooksOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  const navs = [
    { name: "Dashboard", icon: <HomeRounded />, path: "", id: React.useId() },
    {
      name: "Content",
      icon: <LibraryBooksOutlined />,
      path: "content/",
      id: React.useId(),
    },
    {
      name: "Sermon",
      icon: <LightbulbOutlined />,
      path: "sermon/",
      id: React.useId(),
    },

    {
      name: "Announcemnet",
      icon: <CampaignOutlined />,
      path: "announcement/",
      id: React.useId(),
    },
  ];

  return (
    <Box
      sx={{ width: "100%", zIndex: 10, position: "fixed", bottom: 0, left: 0 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navs.map((nav) => (
          <BottomNavigationAction
            label={nav.name}
            icon={nav.icon}
            key={nav.id}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
