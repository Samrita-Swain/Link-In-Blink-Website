import { Bars3Icon } from '@heroicons/react/20/solid'; // Correct version import
import Image from 'next/image'; // Import Image component
import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#121212] shadow-md">
      <div className="flex items-center justify-evenly w-full max-w-auto h-full">
        <div className="w-1/2">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Image
      src="/images/logo.png"
      alt="link-in-blink"
      className="cursor-pointer lg:w-[10%] sm:w-[30%] md:w-[20%]"
      width={60}
      height={60}
      sizes="100vw"
      style={{ height: 'auto' }}
    />
          </Link>
        </div>

        <ul className="flex gap-[50px]">
          <li className="nav-link">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="hotel"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Hotel
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="event"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Event
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <div onClick={openNav}>
          <Bars3Icon className="w-8 md:hidden h-8 cursor-pointer text-[#87289a]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
