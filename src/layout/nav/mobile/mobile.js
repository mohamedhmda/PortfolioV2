import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ToggleMenu from './toggleMenu';
import Navigation from './navigation';

const wrapperVariants = {
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


const Mobile = ( {links} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>{
        document.body.style.overflow = isOpen ? 'unset' : 'hidden'
        setIsOpen(!isOpen)
    }

    return (
        <motion.div className='w-full'>
            <section className='relative z-40'>
                <ToggleMenu
                    isOpen={isOpen}
                    onClick={() => handleMenu()}
                    strokeWidth="2"
                />
            </section>
            <AnimatePresence exitBeforeEnter initial={false}>
                {
                    isOpen
                    ?(
                        <motion.div
                            className='bg-theme-4 fixed top-0 left-0 h-screen w-screen z-20'
                            key="card"
                            variants={wrapperVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Navigation links={links} handle={() => handleMenu()} />
                        </motion.div>
                    ) : null
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Mobile