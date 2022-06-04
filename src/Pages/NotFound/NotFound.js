import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundCSS from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center text-error text-3xl font-bold'>Page Not Found</h1>
            <section className={NotFoundCSS.errorcontainer}>
              <span><span>4</span></span>
              <span>0</span>
              <span><span>4</span></span>
            </section>
            <div className='text-center p-5 mt-20'>
              <Link className='text-decoration-none text-primary text-3xl font-bold' to="/home"><h2>Home</h2></Link>
            </div>
        </div>
    );
};

export default NotFound;