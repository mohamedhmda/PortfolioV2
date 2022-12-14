import React from 'react'

import { ExternalLink, github } from '../../../images/svgs'

const Project = ( { project, order } ) => {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-8'>
            <div className={`${order !== undefined ? 'lg:order-2' : ''}`}>
                <img src={`images/${project.image}`} alt="project" />
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <p className='text-theme-3 underline'>{project.subtitle}</p>
                <h1 className='font-bold text-2xl'>{project.title}</h1>
                <p className=''>{project.stack}</p>
                <p className='font-light text-justify'>{project.description}</p>
                <div className='flex flex-row gap-2'>
                  {project.github && <a href={project.github} className='w-fit hover:stroke-theme-2' target="_blank" rel="noreferrer">{github}</a>}
                  {project.link && <a href={project.link} className='w-fit hover:stroke-theme-2' target="_blank" rel="noreferrer">{ExternalLink}</a>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project