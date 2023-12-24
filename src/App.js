import ReviewList from "./ReviewListPage/ReviewListTable";
import ReviewDetail from "./ReviewDetail/reviewDetailTable";
import TopPage from "./Top/topPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={ <TopPage /> }></Route>
          <Route path='/lesson' element={ <ReviewList />}></Route>
          <Route path='/review' element={ <ReviewDetail />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
