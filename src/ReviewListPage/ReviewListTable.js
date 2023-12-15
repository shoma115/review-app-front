import FilterClassTable from './FilterTable.js';
import MainContent from './MainContentTable.js';
import Paginate from './Paginate.js';
import axiosApiSetBaseURL from '../BaseURL';
import { useEffect, useState } from 'react';

function ReviewList() {
  const [lessons, setLessons] = useState([]);
  const [page, setPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        axiosApiSetBaseURL.get(`/api/lesson?page=${currentPage}`)
            .then((response) => {
                setLessons(response.data.data.lessons);
                setPage(response.data.meta);
                console.log("取得！");   
            })
            .catch((error) => {
                alert("授業データの取得に失敗しました。リロードしてください");
                console.log(error);
            });
    // setCurrentPageをpropとして子のpaginateに渡しており、ページを変更するごとにcurrentPageが再設定される。
    // つまり、依存配列にcurrentPageを設定することで、ページを移動するごとにAPIが起動する。マウント時もちゃんと起動するので安心してね
    }, [currentPage])

    // lessonsをpropとしてMainContentに引き渡し、MainContentからReviewBoxへlessonsが引き渡される
  return (
    <>
      <div>
        <FilterClassTable />
        <MainContent lessons={ lessons }/>
        <Paginate page={ page } setCurrentPage={ setCurrentPage }/>
      </div>
    </>
  )
}

export default ReviewList;
