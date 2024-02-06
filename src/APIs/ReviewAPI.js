import axiosApiSetBaseURL from '../BaseURL';

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