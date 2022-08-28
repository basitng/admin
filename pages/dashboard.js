import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useId } from "react";
import AppBar from "../src/components/AppBar";
import Card from "../src/components/Card";

export default function dashboard() {
  const Overview = [
    {
      title: "Articles",
      value: 10,
      path: "articles/",
      id: useId(),
      snack: "snack1",
    },
    {
      title: "Contents",
      value: 50,
      path: "contents/",
      id: useId(),
      snack: "snack2",
    },
    {
      title: "Sermon",
      value: 20,
      path: "sermon/",
      id: useId(),
      snack: "snack3",
    },
  ];
  return (
    <React.Fragment>
      <AppBar />
      <Container sx={{ mt: 13 }}>
        <Typography variant="body2" sx={{ m: "10px 0px" }} color="GrayText">
          Dashbaord Overview
        </Typography>
        <Grid container spacing={2}>
          {Overview.map(({ title, value, path, id, snack }) => (
            <Grid item xs={12} md={4} lg={4} sm={6} xl={4} key={id}>
              <Card title={title} value={value} path={path} snack={snack} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
