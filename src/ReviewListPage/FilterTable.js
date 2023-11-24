import {Button, TextField} from '@mui/material';

function SearchBox() {
  return ( 
    <>
      <TextField size="small" placeholder="授業名で検索"></TextField>
      <Button variant="outlined" type="submit">検索</Button>
    </>
  );
}

function FilterButton({value}) {
  return (
    <>
      <p>他の条件で検索：</p>
      <Button variant="contained">{value}</Button>
    </>
  );
}

function FilterClassTable() {
  return (
    <>
      <SearchBox />
      <FilterButton value="学部"/>
    </>
  );
}

export default FilterClassTable;
