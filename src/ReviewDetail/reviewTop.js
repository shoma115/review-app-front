import {Rating} from '@mui/material';

function Title() {
  return (
    <h1>みんなの声</h1>
  );
}

function AverageEvaluation({rateEasy, rateSatisficaton}) {
  return (
    <>
      <p>楽単：<Rating value={ rateEasy }></Rating></p>
      <p>充実：<Rating value={ rateSatisficaton}></Rating></p>
    </>
  )
}

function ReviewTop() {
  return (
    <>
      <Title />
      <AverageEvaluation rateEasy={4} rateSatisficaton={5} />
    </>
  )
  }

export default ReviewTop;