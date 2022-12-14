import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './logo'
import Mobile from './mobile/mobile';

const Nav = () => {
  const links = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Shelf", "/blog"],
    ["Resume", "/resume"],
    ["Contact", "/contact"],
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto px-4">
      <div className="w-full inline-flex justify-between h-16" id="nav">
        <section className="self-center text-lg font-semibold relative z-40">
          <Link to="/">
            {Logo}
          </Link>
        </section>

        <div className="hidden lg:flex justify-center">
          <ul className="flex flex-row text-xl font-medium space-x-5 self-center">
              {
                links.map(([link, path], index) => (
                  <li 
                    key={index} 
                    className="w-fit mx-auto hover:text-theme-2"
                  >
                     <NavLink
                        className={(navData) => (navData.isActive ? 'font-bold' : 'font-light')}
                        to={path} 
                        end>
                          {link}
                      </NavLink>
                      
                  </li>
                ))
              }
          </ul>
        </div>

        <div className='flex items-center justify-end lg:hidden'>
          <Mobile links={links} />
        </div>
      </div>
    </div>
  )
}

export default Nav