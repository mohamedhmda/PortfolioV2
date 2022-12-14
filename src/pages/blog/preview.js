import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '../../components/divider'

const Preview = ( {object} ) => {
  return (
    <>
        <div className='flex flex-col gap-2 '>
            <p className='font-light text-theme-2'>{object.date}</p>
            <Link to={`/article/${object.title}`} className='font-bold text-2xl hover:text-theme-2'>{object.title}</Link>
            <p className='font-light text-justify'>{object.preview}</p>
        </div>
        <Divider />
    </>
  )
}

export default Preview