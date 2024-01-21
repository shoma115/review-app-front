import ReviewList from "./ReviewListPage/ReviewListTable";
import ReviewDetail from "./ReviewDetail/reviewDetailTable";
import TopPage from "./Top/topPage";
import LoginPage from "./Certification/Login";
import RegisterPage from "./Certification/Register";
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
        <ToastContainer />
          <Routes>
            <Route path='/' element={ <TopPage /> }></Route>
            <Route path='/register' element={ <RegisterPage /> }></Route>
            <Route path="/login" element={ <LoginPage /> }></Route>
            <Route path='/lesson' element={ <ReviewList />}></Route>
            <Route path='/review' element={ <ReviewDetail />}></Route>
          </Routes>
        <ToastContainer />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App;
