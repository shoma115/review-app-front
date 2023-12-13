import User from './ReviewCard.js';
import ReviewTop from './reviewTop.js';
import FilterReview from './FilterReview.js';
import LessonDetail from './lessonDetail.js';

function ReviewDetail() {
  return (
    <>
      <LessonDetail />
      <ReviewTop />
      <FilterReview />
      <User userName={'shoma'}/>
    </>
  )
}

export default ReviewDetail;

