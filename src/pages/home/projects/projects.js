import React from 'react'
import { Link } from 'react-router-dom'
import Project from './project'

import {Snapshot, GymFit, CoffeeLand} from '../../../data/topProjects'
import Button from '../../../components/button'
import { folder } from '../../../images/svgs'


const Projects = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto px-4 py-8'>
        <div className='text-center space-y-2'>
            <h1 className='text-4xl font-bold'>Projects</h1>
            <p className='underline text-theme-3'>
                Here are my latest projects. Want to see more ? go to the 
                <Link className='text-theme-2 font-bold' to="projects"> Projects</Link> page.
            </p>
        </div>

        <div className='grid grid-cols-1 gap-2'>
            <Project project={Snapshot} />
            <Project project={GymFit} order={true} />
            <Project project={CoffeeLand} />
        </div>

        <div className='flex justify-center'>
            <Button text="More projects" icon={folder} link="/projects" />
        </div>
    </div>
  )
}

export default Projects