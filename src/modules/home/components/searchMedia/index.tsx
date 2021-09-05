import { Button } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Input from "./styles";

export default function SearchMedia() {
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
}
