import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='container'>
      <div className="logo">Logo</div>
      <div className="links">
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
