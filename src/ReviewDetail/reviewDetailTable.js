import User from './ReviewCard.js';
import ReviewTop from './reviewTop.js';
import FilterReview from './FilterReview.js';
import LessonDetail from './lessonDetail.js';
import { useLocation } from 'react-router-dom';
import axiosApiSetBaseURL from '../BaseURL.js';
import { useEffect, useState } from 'react';

function ReviewDetail() {
  const location = useLocation().state.lesson;
  const [ review, setReview ] = useState([])
  console.log(location);
  
  useEffect(() => {
    axiosApiSetBaseURL.get(`api/${ location.id }/review`)
      .then((response) => {
        setReview(response.data.data.lesson[0].reviews);
        console.log(response.data);   
      })
      .catch((error) => {
        alert("レビューデータの取得に失敗しました。リロードしてください");
        console.log(error);
      });
  }, [])
  
  return (
    <>
      <LessonDetail lesson={ location }/>
      <ReviewTop lesson={ location }/>
      <FilterReview />
      <User reviews={ review } />
    </>
  )
}

export default ReviewDetail;

