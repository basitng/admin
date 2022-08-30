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
import { Box } from "@mui/system";

export default function ActivitiesBar() {
  const Recent = [
    {
      name: "Gulti Lekan",
      action: "Created a Post",
      timestamp: "20:10am",
      snack: "snack-create",
      picture: "/assets/images/person1.jpg",
    },
    {
      name: "Sam Jaden",
      action: "Updated a Post",
      timestamp: "10:10am",
      snack: "snack-update",
      picture: "/assets/images/person3.jpg",
    },
    {
      name: "Driqueo Lucaqs",
      action: "Deleted a Post",
      timestamp: "7:10am",
      snack: "snack-delete",
      picture: "/assets/images/person2.jpg",
    },
  ];
  return (
    <Paper>
      <List>
        <ListSubheader>
          <Typography variant="body1">Recent</Typography>
          <Typography variant="body2">Real-time activities tracker</Typography>
        </ListSubheader>
        {Recent.map((activity) => (
          <ListItem alignItems="flex-start" button key={Math.random() * 20000}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={activity.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={activity.name}
              secondary={
                <p>
                  <Typography variant="body2">{activity.action}</Typography>
                  <Typography variant="body2">{activity.timestamp}</Typography>
                </p>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
