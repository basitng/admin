import { createTheme, ThemeProvider } from "@mui/material";
import { orange, indigo } from "@mui/material/colors";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[600],
      },
      secondary: {
        main: orange[900],
      },
    },
    typography: {
      fontFamily: "Axiforma-Regular",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
