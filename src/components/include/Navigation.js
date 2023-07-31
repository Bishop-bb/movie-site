import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navigation() {
  return (
    <header>
      <nav id="navy" className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div id="b" style={{ fontWeight: '650', color: 'wheat', fontSize: '20px' }}>
            Movie-Hub
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"><i className="fa-solid fa-house"></i>Home </Link>
              </li>
              <li className="nav-item">
                <Link to="ExplorePage">Explore</Link>
              </li>
              <li className="nav-item">
                <Link to="/"><i className="fa-solid fa-video"></i>Movies</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Series</Link>
              </li>
              <li className="nav-item">
                <Link to="/"><i className="fa fa-list-ul"></i> Anime</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
