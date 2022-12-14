import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getArticle } from '../../data/articles'

const Article = () => {
    const { title } = useParams()
    const article = getArticle(title)
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
        <div className='flex flex-col gap-4 '>
            <p className='font-light text-theme-2'>{article.date}</p>
            <h1 className='font-bold text-2xl hover:text-theme-2'>{article.title}</h1>
            <p className='font-light text-justify'>{article.preview}</p>
            <p className='font-light text-justify'>{article.text}</p>
        </div>
    </motion.div>
  )
}

export default Article