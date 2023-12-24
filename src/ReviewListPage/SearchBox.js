import { TextField, Button } from "@mui/material";

function SearchBox() {
  return ( 
    <>
      <TextField size="small" placeholder="授業名で検索"></TextField>
      <Button variant="outlined" type="submit">検索</Button>
    </>
  );
}

export default SearchBox;