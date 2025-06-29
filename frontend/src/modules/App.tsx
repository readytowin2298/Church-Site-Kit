import React from 'react';
import './App.css';
import PrayerWall from './PrayerWall/PrayerWall';
// import Devotional from './modules/Devotional/Devotional';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Your Church Site</h1>
      {/* <Devotional /> */}
      <PrayerWall />
    </div>
  );
}

export default App;
