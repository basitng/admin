import { LinearProgress } from "@mui/material";
import React from "react";

export default function ProgressBar() {
  return (
    <LinearProgress
      variant="query"
      sx={{
        position: "fixed",
        zIndex: 500000,
        top: 0,
        left: 0,
        width: "100vw",
      }}
      color="primary"
    />
  );
}
