import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import FoodQuiz from './components/FoodQuiz'
import MusicQuiz from './components/MusicQuiz'
import SportsQuiz from './components/SportsQuiz'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foodquiz" element={<FoodQuiz />} />
          <Route path="/musicquiz" element={<MusicQuiz />} />
          <Route path="/sportsquiz" element={<SportsQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
