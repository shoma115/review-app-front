import axiosApiSetBaseURL from '../BaseURL';

// 授業のレビューの取得
export const getAPI = async(lesson) => {
 try {
  const response = await axiosApiSetBaseURL.get(`api/review?lesson=${ lesson }`)
  const data = response.data.data
  return data
 }
 catch(error) {
  console.log(error);
  throw(error)
 }
}

// レビューの検索
export const searchAPI = async(searchWord, lesson) => {
  const searchParams = {
    search: searchWord ? searchWord : null, 
  }

  const fliteredSearchParams = Object.fromEntries(
    Object.entries(searchParams).filter(([key, value]) => value !== null)
  );
  const queryParams = new URLSearchParams(fliteredSearchParams).toString();
  try {
    const response = await axiosApiSetBaseURL.get(`api/review/search?lesson=${ lesson }&${ queryParams }`)
    const data = response.data.data;
    return data
  }
  catch(error) {
    console.log(error)
    throw(error);
  }
}

// 授業レビューの投稿
export const postAPI = async(title, ease, enrichment, content, userId, lessonId,) => {
  try {
    await axiosApiSetBaseURL.post("/api/review", {
      title: title,
      ease: ease,
      enrichment: enrichment,
      content: content,
      userId: userId,
      lessonId: lessonId,
    })
  }
  catch(error) {
    console.log(error);
    throw(error)
  }
  
}