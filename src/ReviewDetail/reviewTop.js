function Title() {
  return (
    <h1>みんなの声</h1>
  );
}

function AverageEvaluation({rateEasy, rateSatisficaton}) {
  return (
    <>
      <p>楽単：{ rateEasy }</p>
      <p>充実：{ rateSatisficaton}</p>
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