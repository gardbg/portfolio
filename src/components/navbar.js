import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/"><img className="img-fluid img-logo" src="https://i.gyazo.com/072d92bbb5f586280aee1fdab0e016d9.png" alt="logo"></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto">
          <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span><hr class="divider my-4" /></Link>
          <Link className="nav-item nav-link" to="/about">About <hr class="divider my-4" /></Link>
          <Link className="nav-item nav-link" to="/contact">Contact <hr class="divider my-4" /></Link>
          <Link className="nav-item nav-link" to="/cv">CV <hr class="divider my-4" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;