import React from 'react';
import './App.css';
import Menu from 'components/Menu/Menu.jsx';
import Projects from 'components/Projects/Projects.jsx';
import About from 'components/About/About.jsx';
import SocialMedia from 'components/SocialMedia/SocialMedia.jsx';

function App() {
  return (
    <div className="container">
      <Menu />
      <Projects />
      <About />
      <SocialMedia />
    </div>
  );
}

export default App;
