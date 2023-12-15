import { Pagination } from '@mui/material';

function Paginate({ page, setCurrentPage}) {
  const handleClick = (event, value) => {
    setCurrentPage(value);
  }

  console.log(page)
  return (
    <Pagination count={ page.total } page={ page.current_page } variant="outlined" shape="rounded" onChange={handleClick}/>
  )
}

export default Paginate;