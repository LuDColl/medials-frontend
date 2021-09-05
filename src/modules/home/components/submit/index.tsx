import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { FC } from "react";

const Submit: FC = () => {
  return (
    <Button color="primary" type="submit">
      <SearchIcon />
    </Button>
  );
};

export default Submit;
