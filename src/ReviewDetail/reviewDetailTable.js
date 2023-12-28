import Review from './ReviewCard.js';
import ReviewTop from './reviewTop.js';
import FilterReview from './FilterReview.js';
import LessonDetail from './lessonDetail.js';
import { useLocation } from 'react-router-dom';
import getReviewsAPI from './getReviewsAPI.js';
import { useEffect, useState } from 'react';

function ReviewDetail() {
  const location = useLocation().state.lesson;
  const [ review, setReview ] = useState([])
  console.log(location);

  const [inputValue, setInputValue] = useState(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  }

  const handleSearch = () => {

    
  }
  
  useEffect(() => {
    getReviewsAPI(location.id, setReview)
  }, [])
  
  return (
    <>
      <LessonDetail lesson={ location }/>
      <ReviewTop lesson={ location }/>
      <FilterReview />
      <Review reviews={ review } />
    </>
  )
}

export default ReviewDetail;

