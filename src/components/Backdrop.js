import { Backdrop } from "@mui/material";
import React from "react";

export default function Backdropper() {
  return <Backdrop open={true} sx={{ userSelect: "none" }}></Backdrop>;
}
