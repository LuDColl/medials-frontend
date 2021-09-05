import { InputAdornment, TextField } from "@material-ui/core";
import SearchMedia from "../searchMedia";
import Submit from "../submit";

export default function Search() {
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
}
