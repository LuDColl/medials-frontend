import { Button } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { ChangeEvent, FC, useState } from "react";
import Input from "./styles";

const SearchMedia: FC = () => {
  const [imagem, setImagem] = useState<any>();

  const Img = async (e: ChangeEvent<HTMLInputElement>) => {
    const arrayBuffer: ArrayBuffer = await e.target.files![0].arrayBuffer();
    const algumaCoisa = Buffer.from(arrayBuffer).toString("base64");
    console.log(algumaCoisa.length);
    setImagem(algumaCoisa);
  };
  return (
    <>
      <img src={`data:image/jpeg;base64,${imagem}`} alt="" />
      <Input>
        <input
          id="contained-button-file"
          type="file"
          onChange={(e) => Img(e)}
        />
        <label htmlFor="contained-button-file">
          <Button color="primary" component="span">
            <AttachFileIcon />
          </Button>
        </label>
      </Input>
    </>
  );
};

export default SearchMedia;
