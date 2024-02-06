import Review from './ReviewCard.js';
import ReviewTop from './reviewTop.js';
import FilterReview from './FilterReview.js';
import FrequentWords from './FrequentWords.js';
import SearchBox from '../commonComponents/SearchBox.js';
import LessonDetail from './lessonDetail.js';
import { useLocation } from 'react-router-dom';
import searchReviewAPI from './searchReviewAPI.js';
import { useState } from 'react';
import Icon from '@mui/material/Icon';
import { useGetReview } from '../Querys/ReviewQuery.js';

function ReviewDetail() {
  const location = useLocation().state.lesson;
  // ↓この子がundefined投げてます。修正対象
  const { data, isLoading, isError } = useGetReview(location.id);
  console.log(data);
  const [ review, setReview ] = useState()
  const [inputValue, setInputValue] = useState(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  }

  const handleSearch = () => {
    searchReviewAPI(inputValue, location.id, setReview);
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  else if(isError) {
    return <h1>Error</h1>
  }
  
  return (
    <>
      <LessonDetail lesson={ location }/>
      <ReviewTop lesson={ location }/>
      <FilterReview>
        <SearchBox 
          inputValue={inputValue}
          placeholder="キーワードで検索"
          handleInputvalue={handleInputChange}
          handleSearch={handleSearch} 
        />
        <FrequentWords 
          topics="テスト"
        />
      </FilterReview>
      <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      <Review reviews={ data.reviews } />
    </>
  )
}

export default ReviewDetail;

