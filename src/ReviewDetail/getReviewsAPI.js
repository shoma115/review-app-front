import axiosApiSetBaseURL from '../BaseURL.js';

function getReviewsAPI(lesson, setReview) {
  axiosApiSetBaseURL.get(`api/review?lesson=${ lesson }`)
      .then((response) => {
        setReview(response.data.data.reviews);
      })
      .catch((error) => {
        alert("レビューデータの取得に失敗しました。リロードしてください");
        console.log(error);
      });
}

export default getReviewsAPI;