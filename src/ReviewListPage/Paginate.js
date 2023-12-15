import { Pagination } from '@mui/material';

function Paginate({ pageCount}) {
  return (
    <Pagination count={ pageCount } variant="outlined" shape="rounded" />
  )
}

export default Paginate;