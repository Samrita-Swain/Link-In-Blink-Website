import { Bars3Icon } from '@heroicons/react/16/solid/index.js';
import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#121212] shadow-md">
      <div className="flex items-center justify-evenly w-[100%] max-auto h-[100%]">
        <div className='w-[50%]'>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <img
            src="/images/logo.png"
            alt="link-in-blink"
            className="w-[85px] cursor-pointer"
          />
            </Link>
        </div>

        <ul className="flex gap-[50px]">
          <li className="nav-link">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link activeClass="active" to="hotel" spy={true} smooth={true} offset={-100} duration={500}>
              Hotel
            </Link>
          </li>
          <li className="nav-link">
            <Link activeClass="active" to="event" spy={true} smooth={true} offset={-100} duration={500}>
              Event
            </Link>
          </li>
          <li className="nav-link">
            <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-100} duration={500}>
              Reviews
            </Link>
          </li>
        </ul>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#87289a]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
