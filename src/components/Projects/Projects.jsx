import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="mb-5">
      <h2>Projects</h2>
      <div className="row mt-4 mb-5">
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/Marching-Cubes-Terrain" target="_blank" rel="noopener noreferrer"><img src="images/MarchingCubesTerrain.png" alt="yellow terrain with holes created using the marching cubes algorithm" /></a>
          <p>An implementation of the <a href="https://en.wikipedia.org/wiki/Marching_cubes">Marching Cubes algorithm</a> in Unity.</p>
          <h3>Most notable features</h3>
          <ul className="projectFeatureList">
            <li>Infinite procedurally generated terrain</li>
            <li>Ability to edit the terrain in realtime</li>
            <li>Uses Unity's Job System with the Burst compiler</li>
          </ul>
        </div>
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/Orbit-Hop" target="_blank" rel="noopener noreferrer"><img src="images/OrbitHop.png" alt="green, yellow and red pillars shining and fading to the black background. Blue square on top of the middle pillar representing the player" /></a>
          <p><b>Orbit Hop</b> is an endless runner game where you have to get as far as possible by rotating the cube around your mouse cursor!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <a href="https://github.com/Eldemarkki/CommunityGameJam" target="_blank" rel="noopener noreferrer"><img src="images/Naturebine.png" alt="pixel art tree with the text 'Naturebine' below it, game logo" /></a>
          <p><b>Naturebine</b> is a game where you have to combine new items from the items that you currently have, for example what if you tried adding <i>Water + Water</i>? Well of course that would make <i>an ocean</i>!</p>
          <p>Submission for the Community Game Jam (2019)</p>
        </div>
        <div className="col-sm">
        <a href="https://github.com/Eldemarkki/LudumDare44" target="_blank" rel="noopener noreferrer"><img src="images/Heartly.png" alt="pixel art heart, game logo" /></a>
          <p><b>Heartly</b> is a clicker game made for the Ludum Dare 44 game jam (2019)</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;