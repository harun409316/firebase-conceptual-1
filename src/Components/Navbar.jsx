import React from 'react';
import logo from '../assets/firebase-logo.png';
import MyContainer from './MyContainer';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';

const Navbar = () => {
    return (
        <div className='bg-slate-100 py-2 border-b border-b-slate-300'>
            <MyContainer className={'flex justify-between items-center'}>
                <figure>
                    <img src={logo} className='w-[55px]' alt="" />
                </figure>
                <ul className='flex items-center gap-2'>
                    <li>
                        <MyLink to={'/'} className={' text-slate-600 font-medium '} >Home</MyLink>
                     </li>
                    <li>
                        <MyLink to={'/aboutUs'} className={' text-slate-600 font-medium '} >About us</MyLink>
                     </li>
                    <li>
                        <MyLink to={'/profile'} className={' text-slate-600 font-medium '} >Profile</MyLink>
                    </li>
                </ul>
             <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
            </MyContainer>
            
        </div>
    );
};

export default Navbar;