import React, { useState } from 'react';
import './App.css';
import GameInfo from './views/GameInfo';
import MapView from './views/MapView';
import LeaderboardView from './views/LeaderboardView';
import BottomNav from './components/BottomNav';

function App() {
  const [currentView, setCurrentView] = useState(0);

  const renderView = () => {
    switch (currentView) {
      case 0:
        return <GameInfo />;
      case 1:
        return <MapView />;
      case 2:
        return <LeaderboardView />;
      default:
        return <GameInfo />;
    }
  };

  return (
    <div className="App">
      {renderView()}
      <BottomNav value={currentView} onChange={(newValue) => setCurrentView(newValue)} />
    </div>
  );
}

export default App;
