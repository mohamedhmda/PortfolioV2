import React from 'react'

import { folderBig, component, ExternalLink, github } from '../../images/svgs'

const Project = ( {object} ) => {
  return (
    <div className='flex flex-col gap-4 px-4 py-12 bg-theme-3 text-theme-5 rounded-md'>
        <div className='flex flex-row justify-between items-center'>
            <section>
                {object.type === 1 ? folderBig : component}
            </section>
            <section className='flex flex-row gap-1'>
                <a href={object.github} className='cursor-pointer hover:stroke-theme-4' target="_blank" rel="noreferrer">
                    {object.github && github}
                </a>
                <a href={object.link} className='cursor-pointer hover:stroke-theme-4' target="_blank" rel="noreferrer">
                    {object.link && ExternalLink}
                </a>
            </section>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl hover:text-theme-4'>{object.title}</h1>
            <p className='font-light text-xs text-justify'>{object.description}</p>
            <p className='text-sm'>{object.stack}</p>
        </div>
    </div>
  )
}

export default Project