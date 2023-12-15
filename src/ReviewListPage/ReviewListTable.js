import FilterClassTable from './FilterTable.js';
import MainContent from './MainContentTable.js';
import Paginate from './Paginate.js';
import axiosApiSetBaseURL from '../BaseURL';
import { useEffect, useState } from 'react';

function ReviewList() {
  const [lessons, setLessons] = useState([]);
  const [page, setPage] = useState([]);
    
    useEffect(() => {
        axiosApiSetBaseURL.get("/api/lesson")
            .then((response) => {
                setLessons(response.data.data.lessons);
                setPage(response.data.meta);
                console.log(response.data);   
            })
            .catch((error) => {
                alert("授業データの取得に失敗しました。リロードしてください");
                console.log(error);
            });
    }, [])
    // lessonsをpropとしてMainContentに引き渡し、MainContentからReviewBoxへlessonsが引き渡される
  return (
    <>
      <div>
        <FilterClassTable />
        <MainContent lessons={ lessons }/>
        <Paginate />
      </div>
    </>
  )
}

export default ReviewList;
