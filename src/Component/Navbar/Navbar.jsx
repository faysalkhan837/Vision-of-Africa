import { Link, NavLink } from "react-router-dom";
import './nav.css';

const Navbar = () => {
  const navItems = <>
          <NavLink to='/'><li><h3 className="text-white text-lg font-bold">HOME</h3></li></NavLink>
          <NavLink to='/weare'><li><h3 className="text-white text-lg font-bold">WHO WE ARE</h3></li></NavLink>
          <NavLink><li><h3 className="text-white text-lg font-bold">GOVERNANCE</h3></li></NavLink>
          <NavLink><li><h3 className="text-white text-lg font-bold">IMPACT</h3></li></NavLink>
          <NavLink><li><h3 className="text-white text-lg font-bold">NEWS</h3></li></NavLink>
          <NavLink><li><h3 className="text-white text-lg font-bold">EVENTS</h3></li></NavLink>
         
  </>;
  return (
    <div className="navbar bg-[#016C36] fixed z-[500]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#016C36] rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://vs-africa.org/wp-content/uploads/2024/03/VISION-FOR-SUSTAINABLE-AFRICA-1.png"
            alt=""
            className="w-20"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex flex-col">
        <select className=" duration-1000" name="" id="">
          <option>English</option>
          <option>Bangla</option>
          <option>China</option>
        </select>
        <Link to='/contuctus'>
          <button className="button animate-pulse">cotuct</button>
        {/* <p className=" bg-white max-w-36 rounded-md text-center text-base font-bold py-3 px-10 leading-3 text-[#016C36]">Contuct <br /> Us</p> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
