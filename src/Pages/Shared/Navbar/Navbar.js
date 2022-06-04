import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      signOut(auth);
      localStorage.removeItem('accessToken')
      const path = `/`;
      navigate(path);
  }

    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/add">Add Radio Stations</Link></li>
                <li><Link to="/update">Update Radio Stations</Link></li>
                <li><Link to="/delete">Delete Radio Stations</Link></li>
              </ul>
            </div>
            <Link to="/home" className="btn btn-ghost normal-case text-xl">Radio Stations</Link>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/add">Add Radio Stations</Link></li>
              <li><Link to="/update">Update Radio Stations</Link></li>
              <li><Link to="/delete">Delete Radio Stations</Link></li>
            </ul>
          </div>
          <div className="navbar-end">

          {
            user ?
            <div className='flex'>
              <h2 className='text-primary font-bold mr-4 mt-2 hidden md:flex text-2xl'>User: {user?.name || user?.displayName}</h2>
              <Link to='/home' onClick={handleSignOut} className="btn">Log Out</Link>
            </div>
            :
            <div>
              <Link to="/login" className="btn">Login</Link>
            </div>
          }
          </div>
        </div>
      </div>
    );
};

export default Navbar;