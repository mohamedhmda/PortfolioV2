import React from 'react'
import Button from '../../../components/button'
import { send } from '../../../images/svgs'

const Cta = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto px-4 py-8">
        <div className='flex flex-col gap-4 text-center items-center'>
            <p className='text-theme-3 underline'>
                You have made it this far
            </p>
            <h1 className='text-4xl font-bold'>
                Get in Touch
            </h1>
            <p className='font-light lg:w-1/2'>
                Whether you are interested in collaborating with me, have an idea, or you just want to chat. I’m always open to discussing work or partnership opportunities.
            </p>
            <Button text="Start a conversation" icon={send} link="/contact" />
        </div>
    </div>
  )
}

export default Cta