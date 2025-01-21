import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function contact() {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Get in touch</h2>
            <p className='text-gray-700 text-[18px] pt-2'>
                send message or call me
            </p>
            <div className='flex gap-3 items-center'>
                < IoIosMail size={30}/> abc@gmail.com
            </div>
            <div className='flex gap-3 items-center'>
                < FaPhoneAlt  size={30}/> (021)0000 1111
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text'
                className='h-[35px] bg-transparent border border-black'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type='text'
                className='h-[35px] bg-transparent border border-black'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='message'>Message</label>
                <textarea 
                className='h-[35px] bg-transparent border border-black'
                id='message' rows={10}>
                    </textarea>
            </div>
            <button className='bg-aqua p-2 px-6'>send</button>
            
             </div>
      </div>
    </div>
  )
}

export default contact
