import {Rating} from '@mui/material';
import { useLocation } from 'react-router-dom';

function Title() {
  return (
    <h1>みんなの声</h1>
  );
}

function AverageEvaluation({rateEase, rateSatisficaton}) {
  return (
    <>
      <h3>総合</h3>
      <p>楽単：<Rating name="read-only" precision={0.1} value={ rateEase } readOnly ></Rating></p>
      <p>充実：<Rating name="read-only" precision={0.1} value={ rateSatisficaton} readOnly ></Rating></p>
    </>
  )
}

function ReviewTop() {
  const location = useLocation().state.lesson;
  console.log(location);
  const lessonName = location.name;
  const attendance = location.attendance;
  const assignment = location.assignment;
  const test = location.test;
  const teachers = location.teachers.map(teacher =>(
    <p key={teacher.id}>{teacher.name}</p>
  ))
  const rateEase = location.reviews_avg_ease;
  const rateSatisficaton = location.reviews_avg_enrichment;
  const createdAt = location.created_at;
  const updatedAt = location.updated_at;

  return (
    <>
      <Title />
      <AverageEvaluation rateEase={ rateEase } rateSatisficaton={ rateSatisficaton } />
    </>
  )
  }

export default ReviewTop;