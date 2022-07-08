import React, {} from 'react';

function NavBar(){
    return(
<nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href='.com' style={{color:'white', fontWeight:'bold'}}>Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}
export default NavBar;