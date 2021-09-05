import { ButtonGroup } from "@material-ui/core";
import { FC, FormEvent } from "react";
import Search from "../../components/search";

const Main: FC = () => {
  function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Search />
      </ButtonGroup>
    </form>
  );
};

export default Main;
