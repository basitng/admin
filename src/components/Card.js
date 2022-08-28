import { valueToPercent } from "@mui/base";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import illustration from "../../public/assets/login.jpg";
export default function Card({ title, value, snack }) {
  return (
    <Box className="image-overview">
      <Box
        className={snack}
        sx={{
          width: 100,
          padding: 1,
          position: "absolute",
          top: 10,
          left: 5,
          borderRadius: 50,
        }}
      >
        <Typography variant="body2" color="white">
          Live Update
        </Typography>
      </Box>
      <Box className="image-overview-caption">
        <IconButton></IconButton>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Box>
  );
}
