import axiosApiSetBaseURL from '../BaseURL';

function searchLessonAPI(currentPage, facultyId, department, major, division, search, setLessons, setPage) {
  const searchParams = {
    department: department,
    major: major,
    division: division,
    search: search,
  }

  axiosApiSetBaseURL(`api/lesson/search?currentPage=${currentPage}&faculty=${facultyId}`)
    .then((response) => {
      setLessons(response.data.data.lessons);
      setPage(response.data.meta);
    })
    .catch((error) => {
      console.log(error)
      alert("データの取得に失敗しました。再読み込みしてください。")
    })
}