import { Button } from "@mui/material";

function FilterButton({topics}) {
  return (
    <>
      <p>よく出るトピック：</p>
      <Button variant="contained">{topics}</Button>
    </>
  );
}

export default FilterButton;