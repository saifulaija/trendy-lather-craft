
import { Link } from 'react-router-dom';
import logo from '../assets/images/shoe-logo.png'
import {FaSearch } from "react-icons/fa";
import {BsFillPeopleFill } from "react-icons/bs";
import { StyleButton } from '../components/styled/Button';

const Navbar = () => {
      return (
            <div className='bg-slate-200 shadow-md'>
                <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/' >
                  <img src={logo} alt="trendy-logo" className='w-[40px] h-[40px] rounded-full' />
                </Link>
                
               <div className=' gap-5 hidden md:block'>
               <Link>Shop</Link>
               <Link>New Products</Link>
               <Link>Blog</Link>
               </div>
               <Link to='/login'
                className='btn-primary'>Login</Link>
                </div>
            </div>
      );
};

export default Navbar;
