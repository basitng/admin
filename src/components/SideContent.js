import React, { useId } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";

export default function SideContent() {
  const pastors = [
    {
      name: "Gulti Lekan",
      role: "Database administrative",
      picture: "/assets/images/person1.jpg",
    },
    {
      name: "Driqueo Lucaqs",
      role: "Pastor in charge",
      picture: "/assets/images/person2.jpg",
    },
    {
      name: "Sam Jaden",
      role: "Prophet",
      picture: "/assets/images/person3.jpg",
    },
  ];
  return (
    <Paper>
      <List>
        <ListSubheader>
          <Typography variant="body1">Pastors</Typography>
        </ListSubheader>
        {pastors.map((pastor) => (
          <ListItem key={Math.random() * 200000} alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={pastor.picture} />
            </ListItemAvatar>
            <ListItemText primary={pastor.name} secondary={pastor.role} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
