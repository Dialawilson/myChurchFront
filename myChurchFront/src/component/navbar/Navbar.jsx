import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end  p-3  ml-2  "  id="navbarNavAltMarkup">
      <div className="navbar-nav text-capitalize ">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">events</a>
        <a className="nav-link" href="#">messages</a>
        <a className="nav-link" >contact</a>
        <a className="nav-link" >donate</a>
      </div>
    </div>
  </div>
</nav>
  )
}


export default Navbar