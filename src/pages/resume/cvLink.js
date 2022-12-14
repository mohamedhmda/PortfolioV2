import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { pdf, ExternalLink } from '../../images/svgs'

const CvLink = ( {CV, text} ) => {
    const [isHovered, setHovered] = useState(false)
  return (
        <motion.a
            whileHover={ () => setHovered(true) }
            onHoverEnd={ () => setHovered(false) }
            href={CV}
            className=" flex flex-row border-theme-3 border-2 rounded-full py-3 px-6 gap-2
                       hover:bg-theme-4
                        w-fit overflow-hidden
                        "
            target="_blank" rel="noreferrer" 
        >   
            <motion.section
                animate={{ x : isHovered ? -50 : 0}}
                className={`${isHovered ? "hidden" : ""}`}>
                {pdf}
            </motion.section>

            <motion.p 
                transition={{ ease: "easeOut", duration: 2 }}
                className=''>
                {text}
            </motion.p>

            <motion.section 
                animate={{ x : isHovered ? 0 : 50}}
                className={`${isHovered ? "" : "hidden"} stroke-current`}>
                {ExternalLink}
            </motion.section>
        </motion.a>
  )
}

export default CvLink