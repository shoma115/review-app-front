import axiosApiSetBaseURL from '../BaseURL';

export const getAPI = async(lessonId) => {
 try {
  await axiosApiSetBaseURL.get(`api/review?lesson=${ lesson }`)
 }
 catch(error) {
  console.log(error);
  throw(error)
 }
}

export default getReviewsAPI;

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