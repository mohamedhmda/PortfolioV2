import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const itemIds = [0, 1, 2, 3, 4];

const variants = {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
      transition: { duration: .4 }
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: .4, staggerChildren: .1 }
    },
    exit: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      transition: { duration: .4 }
    }
  }

const variants2 = {
    initial: {
      opacity: 0,
      scale: .3,
    },
    animate: {
      opacity: 1,
      scale: 1,
    }
  }

const Navigation = ( {links, handle} ) => {
    return (
        <motion.ul 
            variants={variants} 
            className='absolute top-0 left-0 bottom-0 right-0 flex flex-col gap-6 justify-center items-center bg-theme-4
                       text-xl'
            key="squares"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {links.map(([link, path], index) => {
                return(
                    <motion.li 
                        variants={variants2} 
                        transition={{ duration: .8, type: 'spring' }} 
                        key={index}
                    >
                        <NavLink 
                            className={(navData) => (navData.isActive ? 'font-bold' : 'font-light')} 
                            to={path} end
                            onClick={handle}
                            >
                              {link}
                            </NavLink>
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

export default Navigation