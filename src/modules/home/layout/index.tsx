import Footer from "../containers/footer";
import Header from "../containers/header";
import Main from "../containers/main";
import { Grid } from "@material-ui/core";
import StyledGrid from "./styles";

export default function Home() {
  return (
    <StyledGrid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item component="header">
        <Header />
      </Grid>

      <Grid item component="main">
        <Main />
      </Grid>

      <Grid item component="footer">
        <Footer />
      </Grid>
    </StyledGrid>
  );
}
