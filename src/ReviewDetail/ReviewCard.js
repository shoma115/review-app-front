import {Avatar, Rating, Button} from '@mui/material';
import '../App.css';

function User({userName, rate}) {
  return (
    <>
      <div className='userOnReview'>
        <Avatar />
        <span>{userName}</span>
      </div>
      <div>
        <div>楽単：<Rating value={ rate } readOnly/></div>
        <div>充実：<Rating value={ rate } readOnly/></div>
      </div>
      <h3>タイトル</h3>
      <p>aaaaaaaaaaaaaaaaa</p>
      <Button variant="outlined">役に立った</Button>     
    </>
  )
}

export default User;