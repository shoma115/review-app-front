import ReviewList from "./ReviewListPage/ReviewListTable";
import Test from "./ReviewDetail/reviewDetailTable";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={ <ReviewList />}></Route>
          <Route path='/review' element={ <Test />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
