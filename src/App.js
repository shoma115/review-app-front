import logo from './logo.svg';
import './App.css';
import FilterClassTable from './ReviewListPage/FilterTable.js';
import MainContent from './ReviewListPage/MainContentTable.js';

function App() {
  return (
    <>
      <div>
        <FilterClassTable />
        <MainContent />
      </div>
    </>
  )
}

export default App;
