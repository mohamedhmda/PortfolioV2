import React from 'react'

const Service = ( {logo, title, description} ) => {
  return (
    <div className='rounded-sm  h-[440px] w-[320px] lg:w-[32%]
                    flex flex-col gap-4 mx-auto lg:mx-0 my-4 
                    justify-center items-center shadow-lg 
                    hover:bg-theme-3 hover:text-theme-5
                    cursor-pointer
                    '>
        <div className='w-4/5 mx-auto space-y-4'>
            {logo}
            <h1 className='font-bold text-3xl'>{title}</h1>
            <p className='font-light'>{description}</p>
        </div>

    </div>
  )
}

export default Service