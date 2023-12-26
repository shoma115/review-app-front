import axiosApiSetBaseURL from '../BaseURL';

function searchLessonAPI(currentPage, facultyId, department, major, division, search, setLessons, setPage) {
  const searchParams = {
    department: department,
    major: major,
    division: division,
    search: search,
  }

  const fliteredSearchParams = Object.fromEntries(
    Object.entries(searchParams).filter(([key, value]) => value !== null)
  );
  const queryParams = new URLSearchParams(fliteredSearchParams).toString();

  axiosApiSetBaseURL(`api/lesson/search?currentPage=${currentPage}&faculty=${facultyId}&${queryParams}`)
    .then((response) => {
      setLessons(response.data.data.lessons);
      setPage(response.data.meta);
    })
    .catch((error) => {
      console.log(error)
      alert("データの取得に失敗しました。再読み込みしてください。")
    })
}

export default searchLessonAPI;