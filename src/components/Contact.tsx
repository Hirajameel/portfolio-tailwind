import React from 'react'
import { GrMailOption } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl font-bold'data-aos="zoom-in-left">Get In Touch</h2>
                <p className='text-purple-950 text-[18px] pt-2'data-aos="zoom-in-left">
                Thank you for visiting my portfolio! If youre interested in working together have any questions or simply want to chat about potential projects feel free to get in touch. Im always excited to connect with creative minds and explore new opportunities.
                 Lets bring your ideas to life!
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in-left">
                <GrMailOption size={30}/>hirajamil786@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in-left">
                <BsTelephoneFill size={30}/>(031)-666-536
                </div>
                
            </div>
            <div className='space-y-8 '>
              <div className='flex flex-col gap-1'data-aos="zoom-in-left">
                <label htmlFor='name'>Name</label>
               <input type="text" 
               className='h-[40px] bg-transparent border border-black'
               id='name'/>
              </div>
              <div className='flex flex-col gap-1'data-aos="zoom-in-left">
                <label htmlFor='email'>Email</label>
               <input type="text" 
               className='h-[40px] bg-transparent border border-black'
               id='email'/>
              </div>
              <div className='flex flex-col gap-1 'data-aos="zoom-in-left">
                <label htmlFor='msg'>Message</label>
               <textarea 
               className=' bg-transparent border border-black'
               id='msg' rows={8}>
               </textarea>
              </div>
              <button className='bg-black text-white p-2 px-6'data-aos="zoom-in-left">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
