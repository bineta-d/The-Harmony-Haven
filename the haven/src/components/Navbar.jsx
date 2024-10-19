import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

export const Navbar =() =>{
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div className='nav-bar container-fluid'>
        <img class="navbar-brand" src="img/balance.png" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='nav-list navbar-nav me-auto mb-2 mb-lg-0'>
            <Link to ="/">  <li className="nav-item">Home</li></Link>
              <Link to ="/mental-health">  <li className="nav-item">Mental Health</li></Link>
            <Link  to ="/pro-dev" > <li className="nav-item">Professional Development</li></Link>
            <Link to ="/finances" >  <li className="nav-item">Finances</li></Link>
            <Link to="/nutrition" > <li className="nav-item">Nutrition</li></Link>
            <Link to ="/hobbies" >  <li className="nav-item">Hobbies</li></Link>
            <Link to ="/future-athletes" > <li className="nav-item">Future Athletes</li></Link>
            </ul>
            <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      </div>

            
        </div>
        </nav>
    )

}
export default Navbar; 