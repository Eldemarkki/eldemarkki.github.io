import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="mb-5">
      <h2>Projects</h2>
      <div className="row mt-4 mb-5">
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/Marching-Cubes-Terrain" target="_blank" rel="noopener noreferrer"><img src="https://i9.ytimg.com/vi/Tge_kwjj2So/mqdefault.jpg?time=1588618946495&sqp=CLDMwfUF&rs=AOn4CLDBcfNXowujJDVaXmGIUT1w6OgE3w" alt="placeholder" /></a>
          <p>An implementation of the <a href="https://en.wikipedia.org/wiki/Marching_cubes">Marching Cubes algorithm</a> in Unity.</p>
          <h3>Most notable features</h3>
          <ul className="projectFeatureList">
            <li>Uses Unity's Job System with the Burst compiler</li>
            <li>Ability to edit the terrain in realtime</li>
            <li>Infinite procedurally generated terrain</li>
          </ul>
        </div>
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/Orbit-Hop" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/c13fccc552bdbb1943b45fc556d5c4c1a5237e19/68747470733a2f2f692e696d6775722e636f6d2f446a7551615a472e706e67" alt="placeholder" /></a>
          <p><b>Orbit Hop</b> is an endless runner game where you have to get as far as possible by rotating the cube around your mouse cursor!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/CommunityGameJam" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/b3285756f32038c6fa6756174df9c273bad10636/68747470733a2f2f692e696d6775722e636f6d2f576a3930367a6f2e706e67" alt="pixel art tree, game logo" /></a>
          <p><b>Naturebine</b> is a game where you have to combine new items from the items that you currently have, for example what if you tried adding <i>Water + Water</i>? Well of course that would make <i>an ocean</i>!</p>
          <p>Submission for the Community Game Jam (2019)</p>
        </div>
        <div className="col-sm">
        <a href="https://github.com/Eldemarkki/LudumDare44" target="_blank" rel="noopener noreferrer"><img className="mb-3" src="https://camo.githubusercontent.com/30e8effdbc78c356d8e2e2046d59c69cc0169959/68747470733a2f2f692e696d6775722e636f6d2f505768334e6e682e706e67" alt="pixel art heart, game logo" /></a>
          <p><b>Heartly</b> is a clicker game made for the Ludum Dare 44 game jam (2019)</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;