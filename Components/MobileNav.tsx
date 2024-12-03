import { XMarkIcon } from '@heroicons/react/16/solid/index.js';
import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <ul>
          <li className="nav-link-mobile">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeNav} // Close menu when clicked
            >
              Home
            </Link>
          </li>
          <li className="nav-link-mobile">
            <Link
              activeClass="active"
              to="hotel"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeNav} // Close menu when clicked
            >
              Hotel
            </Link>
          </li>
          <li className="nav-link-mobile">
            <Link
              activeClass="active"
              to="event"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeNav} // Close menu when clicked
            >
              Event
            </Link>
          </li>
          <li className="nav-link-mobile">
            <Link
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeNav} // Close menu when clicked
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#87289a]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
