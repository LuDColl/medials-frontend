import Footer from "../containers/footer";
import Header from "../containers/header";
import Main from "../containers/main";
import { Box } from "@material-ui/core";

export default function Home() {
  return (
    <Box>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}
