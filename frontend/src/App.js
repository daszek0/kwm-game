import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GameInfo from './views/GameInfo';
import MapView from './views/MapView';
import LeaderboardView from './views/LeaderboardView';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GameInfo />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/leaderboard" element={<LeaderboardView />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
