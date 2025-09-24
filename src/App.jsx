import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import WorkExperience from './Pages/Work';
import AchievementsSection from './Pages/Achievements';
import Footer from './Components/Footer';

function App() {

  return (
    <>
     <Home />
     <Projects />
     <WorkExperience />
     <AchievementsSection />
     <Footer />
    </>
  )
}

export default App
