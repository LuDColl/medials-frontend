import { Button } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { FC } from "react";
import Input from "./styles";

const SearchMedia: FC = () => {
  return (
    <>
      <Input id="contained-button-file" type="file" />
      <label htmlFor="contained-button-file">
        <Button color="primary" component="span">
          <AttachFileIcon />
        </Button>
      </label>
    </>
  );
};

export default SearchMedia;
