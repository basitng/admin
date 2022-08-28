import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Link from "next/link";
import ProgressBar from "../../src/components/ProgressBar";
import Backdropper from "../../src/components/Backdrop";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleLogin = () => {
    setLoading(true);
  };

  React.useEffect(() => {
    if (email == "" || password == "" || password.length <= 5) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
  }, [email, password]);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", background: "#f1f1f1", padding: 5 }}
    >
      {loading && <ProgressBar />}
      {loading && <Backdropper />}
      <Grid item xs={12} md={12} lg={4} sm={12}>
        <Paper elevation={4} sx={{ p: 4, background: "#fff", borderRadius: 2 }}>
          <form>
            <Typography
              variant="h6"
              align="center"
              sx={{ m: "10px 0px" }}
              color="GrayText"
            >
              Login to Dashboard
            </Typography>
            <TextField
              fullWidth
              variant="filled"
              type={"email"}
              label="Email Address"
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              variant="filled"
              type="password"
              label="Password"
              margin="dense"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {loading ? (
              <Button
                disableElevation
                variant="contained"
                fullWidth
                sx={{ mt: 1 }}
                size="large"
                onClick={handleLogin}
                disabled={true}
              >
                Loading
              </Button>
            ) : (
              <Button
                disableElevation
                variant="contained"
                fullWidth
                sx={{ mt: 1 }}
                size="large"
                onClick={handleLogin}
                disabled={isEmpty && true}
              >
                Login
              </Button>
            )}
          </form>
          <Typography
            variant="body2"
            sx={{ m: "20px auto" }}
            align="center"
            color="GrayText"
          >
            {`  Can't Login .`}{" "}
            <Link href="forgot-password">Forgot Password</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
