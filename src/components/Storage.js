import { Box, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "@mui/icons-material";

export default function StorageOverview() {
  return (
    <Box
      sx={{ borderRadius: 3, position: "relative", p: "50px 20px" }}
      className="snack4"
    >
      <PieChart fontSize={"large"} sx={{ color: "#fff" }} />
      <Typography variant="h6">Storage Usage</Typography>
      <Typography variant="body2">
        Storage usage shows the breakdown of data storage, it anlyze the amount
        of storage used by the algorithmns
      </Typography>
      <Box sx={{ mt: 1 }} className="slider" />
      <Box
        className={"snack1"}
        sx={{
          width: 180,
          padding: 1,
          position: "absolute",
          top: 10,
          right: 5,
          borderRadius: 50,
          textAlign: "center",
        }}
      >
        <Typography varaint="body1" color="white">
          Database Storage
        </Typography>
      </Box>
    </Box>
  );
}
