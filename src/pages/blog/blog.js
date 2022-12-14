import React from 'react'
import { motion } from 'framer-motion'
import Preview from './preview'
import { articles } from '../../data/articles'

const Blog = () => {
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
      <div 
          className='text-center py-8 space-y-2'
      >
        <h1 className='text-4xl font-bold'>Articles</h1>
        <p className='text-theme-3 underline'>Some of my writings</p>
      </div>
      <div 
          className='flex flex-col gap-8 w-4/5 mx-auto'
      >
        {
          articles.length ?
          (
            articles.map((article, index) => {
              return(
                  <Preview key={index} object={article} />
              )
            })
          ) : (
            <p>Sorry! no article to be displayed.</p>
          )
        }
        
      </div>
    </motion.div>
  )
}

export default Blog