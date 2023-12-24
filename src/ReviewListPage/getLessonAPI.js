import axiosApiSetBaseURL from '../BaseURL';

function getLessonAPI(currentPage, facultyId, setLessons, setPage) {
  axiosApiSetBaseURL.get(`/api/lesson?page=${currentPage}&faculty=${facultyId}`)
      .then((response) => {
        setLessons(response.data.data.lessons);
        setPage(response.data.meta);
        console.log(response.data);
        console.log("取得！");   
      })
      .catch((error) => {
        alert("授業データの取得に失敗しました。リロードしてください");
        console.log(error);
      });
}

export default getLessonAPI;
