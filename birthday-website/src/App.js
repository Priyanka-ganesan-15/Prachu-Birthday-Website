import React from 'react';
import Hero from './components/Hero';
import BirthdaySection from './components/Cake';
import Timeline from './components/Timeline';


const App = () => {
  return (
    <div className="app">
      <Hero />
      <Timeline />
      <BirthdaySection />
    </div>
  );
};

export default App;
