import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AppBar from "../src/components/AppBar";
import Card from "../src/components/Card";
import DataTable from "../src/components/DataTable";
import StorageOverview from "../src/components/Storage";

export default function dashboard() {
  const Overview = [
    {
      title: "Articles",
      value: 10,
      path: "articles/",
      id: Math.random() * 100000000,
      snack: "snack1",
    },
    {
      title: "Contents",
      value: 50,
      path: "contents/",
      id: Math.random() * 100000000,
      snack: "snack2",
    },
    {
      title: "Sermon",
      value: 20,
      path: "sermon/",
      id: Math.random() * 100000000,
      snack: "snack3",
    },
  ];
  return (
    <React.Fragment>
      <AppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={9} lg={9} sm={12}>
          <Container
            sx={(theme) => ({
              mt: 11,
              [theme.breakpoints.down("sm")]: {
                mt: 10,
              },
            })}
          >
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
          <Container
            sx={(theme) => ({
              mt: 4,
              [theme.breakpoints.down("sm")]: {
                mt: 5,
              },
            })}
          >
            <Typography variant="h6" sx={{ m: "10px 0px" }}>
              Content Analysis
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems={"center"}
            >
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <DataTable />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} lg={3} sm={12}>
          <Box
            sx={(theme) => ({
              mt: 13,
              [theme.breakpoints.down("sm")]: {
                mt: 5,
              },
            })}
          >
            <StorageOverview />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
