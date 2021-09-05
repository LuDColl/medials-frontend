import { Grid, ButtonGroup } from "@material-ui/core";
import Search from "../../components/search";
import Submit from "../../components/submit";

export default function Main() {
  return (
    <Grid container spacing={0}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Search />
      </ButtonGroup>
    </Grid>
  );
}
