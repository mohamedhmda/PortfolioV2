import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ( {text, icon, link, callback } ) => {
  const navigate = useNavigate()

  return (
    <motion.button className='flex flex-row border-theme-3 border-2 rounded-full py-3 px-6 gap-2 my-2
                        hover:bg-theme-3 hover:text-theme-5'
                        onClick={ () => link != null ? navigate(link) : callback}
                        >
        {icon}{text}
    </motion.button>
  )
}

export default Button