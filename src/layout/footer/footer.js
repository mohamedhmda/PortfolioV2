import React from 'react'
import { Email, Facebook, Github, Instagram, Linkedin, Twitter } from './svgs'

const Footer = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2'>
        <div className='flex flex-row gap-4 justify-center md:justify-start'>
          <a target='_blank' href="https://twitter.com/Moh_Hamaida" rel="noreferrer">
            {Twitter}
          </a>
          <a target='_blank' href="https://github.com/mohamedhmda" rel="noreferrer">
            {Github}
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/mohamed-hamaida/" rel="noreferrer">
            {Linkedin}
          </a>
          <a target='_blank' href="https://www.instagram.com/mohamedhmda/" rel="noreferrer">
            {Instagram}
          </a>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100014322403921" rel="noreferrer">
            {Facebook}
          </a>
          <a target='_blank' href="mailto: mohamed.a.hamaida@gmail.com" rel="noreferrer">
            {Email}
          </a>
        </div>
        <section className='text-base font-light text-center md:text-right'>
          © 2022-Today/ Copyright Hamaida Mohamed Amine
        </section>
      </div>
    </div>
  )
}

export default Footer