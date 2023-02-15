import './App.css';
import { useState } from 'react';
import Particles from './components/Particles';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
//import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import DividerLine from './components/DividerLine/DividerLine';
import Footer from './components/Footer';
import Fireworks from './components/Fireworks';
import Sounds from './components/Sounds';
import Curtain from './components/Curtain';

function App() {
  const [playStatus, setPlayStatus] = useState(false);
  const openPack = (playStatus) => {
    console.log('Padre:',playStatus)
    setPlayStatus(playStatus)
  }

  if(playStatus){
    document.body.style.overflowY = "scroll"; 
  }

  return (
      <div className="App">
        <Fireworks playStatus={playStatus}/>
        <Curtain openPack={openPack}/>
        <Navbar/>
        <Home playStatus={playStatus}/>
        <Sounds playStatus={playStatus}/>
        <DividerLine/>
        <About/>
        <DividerLine/>
        <Skills/>
        <DividerLine/>
        {/* <Projects/> */}
        {/* <DividerLine/> */}
        <Contact/>
        <Footer/>
        <Particles id="tsparticles" />
      </div>
  );
}

export default App;
