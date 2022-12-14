import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"


import Button from '../../components/button'
import Alert from '../../components/alert'

import { send } from '../../images/svgs'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  })

  const [Modal, setModal] = useState(false)
  const [Etat, setEtat] = useState(null)

  const handleAlert = (etat) =>{
    document.body.style.overflow = Modal ? 'unset' : 'hidden'
    setEtat(etat)
    setModal(!Modal)
  }

  const onSubmit = (data) => {
    emailjs.send("service_fq8fz69", "template_fkp206w", data, "Md92Rzf6KFu0sC_2Q")
            .then((result) => {
              handleAlert(true);
            }, (error) => {
              handleAlert(false);
            });
  }

  return (
    <motion.div 
        className='w-full md:w-4/5 mx-auto px-4 py-12'
        initial={
            {
                opacity: 0,
                
            }
        }
        animate={
            {
                opacity: 1,
            }
        }
        exit={
            {
                opacity: 0,
            }
        }
    >
      <div className='w-4/5 mx-auto py-12'>
        <h1 className='font-bold text-4xl text-center'>
          Thanks for taking the time to reach out.
          How can I help you today?
        </h1>
        <form className='py-16 space-y-12' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

            {/* Name input  */}
            <div className='flex flex-col gap-2'>
              <label className='text-theme-2' htmlFor="name">Your name</label>
              {/* <input className='py-2 outline-none border-b-2 border-theme-3 focus:border-theme-4' type="text" name='name' placeholder='Enter your name' /> */}
              <input
                className='py-2 outline-none border-b-2 border-theme-3 focus:border-theme-4'
                placeholder='Enter your name'
                {...register("name", {
                  required: "This field is required",
                  maxLength: {
                    value: 100,
                    message: "This field must not exceed 100 characters long",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className='text-red-700 font-light' key={type}>{message}</p>
                  ))
                }
              />
            </div>


            {/* Email Input    */}
            <div className='flex flex-col gap-2'>
              <label className='text-theme-2' htmlFor="email">Email address</label>
              {/* <input className='py-2 outline-none border-b-2 border-theme-3 focus:border-theme-4' type="text" name='email' placeholder='Your email address' /> */}
              <input
                className='py-2 outline-none border-b-2 border-theme-3 focus:border-theme-4'
                placeholder='Your email address'
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "This is not a valid email adress",
                  },
                })}
              />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p className='text-red-500' key={type}>{message}</p>
                ))
              }
            />
            </div>
          </div>

          {/* text input  */}
          <div className='w-full flex flex-col'>
            <label className='text-theme-2' htmlFor="content">Your message</label>
            {/* <textarea className='py-2 h-60 resize-none outline-none border-b-2 border-theme-3 focus:border-theme-4' name='content' placeholder='Hi, I think we need a website for our company...' /> */}
            <textarea
              className='py-2 h-60 resize-none outline-none border-b-2 border-theme-3 focus:border-theme-4'
              placeholder='Hi, I think we need a website for our company...'
              {...register("content", {
                required: "This field is required",
                maxLength: {
                  value: 500,
                  message: "This field must not exceed 500 characters long",
                },
              })}
            ></textarea>
            <ErrorMessage
              errors={errors}
              name="content"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p className='text-red-500' key={type}>{message}</p>
                ))
              }
            />
          </div>

          <div className='flex justify-center'>
            <Button text="Send my message" icon={send} />
          </div>
            
        </form>

        <div className='text-center'>
          <p>Or you could use one of the links in the footer and contact me on your favorite plateform.</p>
        </div>
      </div>

      <div id='modal'>
              {
                Modal && (
                  <Alert etat={Etat} action={() => handleAlert()} />
                )
              }
      </div>
    </motion.div>
  )
}

export default Contact