import {Avatar, Rating, Button} from '@mui/material';
import '../App.css';

function Review({ reviews }) {
  console.log(reviews)
  const reviewCard = reviews.map((review) =>
    <>
      <div className='userOnReview'>
        <Avatar />
        <span>{ review.user.name }</span>
      </div>
      <div>
        <div>楽単：<Rating value={ review.ease } readOnly/></div>
        <div>充実：<Rating value={ review.enrichment } readOnly/></div>
      </div>
      <h3>{ review.title }</h3>
      <p>{ review.content }</p>
      <Button variant="outlined">役に立った</Button>  
    </>
  )

  return (
    <div>{ reviewCard }</div>
  )
}

export default Review;