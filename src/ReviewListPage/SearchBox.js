import { TextField, Button } from "@mui/material";

function SearchBox({inputValue, handleInputvalue, handleSearch}) {
  return ( 
    <>
      <TextField
        value={inputValue} 
        size="small" 
        placeholder="授業名で検索"
        onChange={handleInputvalue}
      >
      </TextField>
      <Button
        onClick={handleSearch} 
        variant="outlined" 
        type="submit"
      >
        検索
      </Button>
    </>
  );
}

export default SearchBox;