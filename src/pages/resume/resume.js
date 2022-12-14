import React from 'react'
import { motion } from 'framer-motion'

import ENG_CV from '../../data/cvs/eng.pdf'
import FR_CV from '../../data/cvs/fr.pdf'
import CvLink from './cvLink'

const Resume = () => {
  return (
    <motion.div
        className='w-full md:w-4/5 mx-auto px-4 h-[75vh]'
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
        <div className='flex flex-col gap-6 items-center h-full justify-center'>
            <CvLink CV={FR_CV} text="French version" />
            <CvLink CV={ENG_CV} text="English version" />
        </div>
    </motion.div>
  )
}

export default Resume