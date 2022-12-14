import React from 'react'
import { check, x, xSmall } from '../images/svgs'

const Success = {
  title : "Message sent",
  text : 'Your message has been successfuly sent. I will get back to you as soon as possible.',
  extra : "Keep the smile!!",
}
const Failure = {
  title : "Error occured",
  text : 'Sorry but there was an error preventing your message from being sent.',
  extra : "Please try again.",
}

const Message = ( {object, action} ) => {
  return(
    <>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold'>{object.title}</h1>
        <button className='mx-6 text-theme-3/70 hover:text-theme-3' onClick={action}>
                {xSmall}
        </button>
      </div>
      <p className='font-light text-sm w-11/12'>{object.text}</p>
      <p className='font-light text-sm'>{object.extra}</p>
    </>
  )
}

const Alert = ( {etat, action} ) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50'>
          <div className='w-[50vw] h-fit grid grid-cols-12 bg-theme-4 py-4 rounded-lg'>
            <div className='col-span-2 flex justify-center items-center'>
              <div className={`w-16 h-16 rounded-full ${ etat ? "bg-theme-2" : "bg-red-500"} flex justify-center items-center text-theme-5`}>
                {etat ? check : x}
              </div>
            </div>
            <div className='col-span-10 flex flex-col'>
                {
                  etat ? 
                  (
                    <Message object={Success} action={action} />
                  ) : (
                    <Message object={Failure} action={action} />
                  )
                }
            </div>
          </div>
    </div>
  )
}

export default Alert