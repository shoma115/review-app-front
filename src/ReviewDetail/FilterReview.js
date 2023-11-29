import {Button, TextField} from '@mui/material';

function SearchBox() {
  return ( 
    <>
      <TextField size="small" placeholder="キーワードで検索"></TextField>
      <Button variant="outlined" type="submit">検索</Button>
    </>
  );
}

function FilterButton({topics}) {
  return (
    <>
      <p>よく出るトピック：</p>
      <Button variant="contained">{topics}</Button>
    </>
  );
}

function FilterReview() {
  return (
    <>
      <SearchBox />
      <FilterButton topics={テスト} />
    </>
  )
}

export default FilterReview;