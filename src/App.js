import '../src/App.css'
import Home from './Views/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchResult from './Views/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/search/:moviename" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
