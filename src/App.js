import logo from './logo.svg';
import './App.css';
import './style.css'
import Header from './Header';
import FoodCard from './FoodCard';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
