import {Avatar, Rating, Button} from '@mui/material';

function User({rate}) {
  return (
    <>
      <Avatar />user-name
      <Rating value={ rate } readOnly/>
      <Rating value={ rate } readOnly/>
      <p>aaaaaaaaaaaaaaaaa</p>
      <Button variant="outlined">役に立った</Button>     
    </>
  )
}

export default User;