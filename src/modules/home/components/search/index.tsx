import { InputAdornment, TextField } from "@material-ui/core";
import { FC } from "react";
import SearchMedia from "../searchMedia";
import Submit from "../submit";

const Search: FC = () => {
  return (
    <TextField
      id="search"
      label="Pesquisar"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchMedia />
            <Submit />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
