import React from 'react'
import { Link } from 'react-router-dom'

import ME from '../images/me.png'
import { ExternalLink } from '../../../images/svgs'

const Header = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto px-4 py-8">
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-12 lg:h-full'>
            <img className='rounded-sm mx-auto w-10/12
                            lg:col-span-5  lg:w-full'
                 src={ME} alt="thats me, lol" />
            <div className='lg:col-span-7 lg:place-self-end lg:py-20 lg:w-[105%] lg:mt-20
                            py-12 
                            bg-theme-2 rounded-md flex'>
                <div className='w-4/5 mx-auto my-auto text-theme-5 text-center lg:text-left'>
                    <div className='my-8 space-y-4'>
                        <h1 className=' text-2xl font-bold'>
                            Designer,  Software developer & Data engineer
                        </h1>
                        <p className='font-light text-justify'>
                            I help people through their digital transformation by building modern looking <span className='font-bold'>website</span>, <span className='font-bold'>management software</span> and <span className='font-bold'>IT support</span>.
                        </p>

                    </div>
                    <div className='text-justify space-y-1'>
                        <p className='font-light'>
                            I'm an independent software developer and IT engineer based in Algeria. I love creating beautiful looking websites, and consistent software for the benefit of the best user experience possible. And I consider myself to be completly blessed that i get to do it for a living.
                        </p>
                        <p className='font-light'>
                            I have a master degree in Networks and Data Engineering. I develope software since 2017. I started my coding career back then with purpos of continuously learning and developing my skills in software development, communication and marketing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center my-8'>
            <p className='font-light'>
                If you are interested in collaboration just head to the contact page and send me message.
            </p>
            <p className='flex flex-row gap-2 justify-center'>
                See my <span className='text-theme-2 font-bold'>Resume</span> <Link className='hover:stroke-theme-2' to='/resume'>{ExternalLink}</Link>
            </p>
        </div>
    </div>
  )
}

export default Header