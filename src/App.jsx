import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import About from './About';
import Scorecard from './Scorecard';
import Handicap from './Handicap';

function App() {
  const [rounds, setRounds] = useState(() => {
    const storedRounds = localStorage.getItem('rounds');
    return storedRounds
      ? JSON.parse(storedRounds)
      : [
          { title: 'Countryside', score: 88 },
          { title: 'Arboretum Golf Club', score: 91 },
        ];
  });

  useEffect(() => {
    localStorage.setItem('rounds', JSON.stringify(rounds));
  }, [rounds]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/handicap" element={<Handicap scores={rounds.map(r => r.score)} />} />
        <Route path="/scorecards" element={<Scorecard rounds={rounds} setRounds={setRounds} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

