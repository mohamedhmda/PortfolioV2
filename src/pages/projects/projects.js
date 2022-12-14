import React from 'react'
import { motion } from 'framer-motion'

import Project from './project'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <motion.div 
        className='w-full md:w-4/5 mx-auto px-4 py-12'
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
      <div className='text-center py-8 space-y-2'>
        <h1 className='text-4xl font-bold'>Projects</h1>
        <p className='text-theme-3 underline'>Some projects I have worked on recently</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8'>
        {projects.map(((project, index) => {
          return(
            <Project key={index} object={project} />
          )
        }))}
      </div>
    </motion.div>
  )
}

export default Projects