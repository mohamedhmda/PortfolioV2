import React from 'react'
import { motion } from 'framer-motion'

import Cta from './cta/cta'
import Header from './header/header'
import Projects from './projects/projects'
import Services from './services/services'

const Home = () => {
  return (
    <motion.div
      initial={
            {
                opacity: 0,
            }
        }
        animate={
            {
                opacity: 1,
            }
        }
        exit={
            {
                opacity: 0,
            }
        }
    >
      <Header />
      <Services />
      <Projects />
      <Cta />
    </motion.div>
  )
}

export default Home