import React from 'react'
import profile from './profile.png'
import Image from "next/image";

const page = () => {
  return (
    <div>
    <header className='fixed top-0 left-0 flex justify-between text-center bg-black pt-16 px-[12%] pb-16 w-[100%] '>
      <a href="#home" className=" text-white font-extrabold text-5xl cursor-pointer  ease-in duration-300 hover:scale-[1.1] " >
        Alishba
<span className='text-[#691d6c]'> Shahzad</span>
      </a>
    </header>
    <section className=" min-height[100vh] py-1.5 pr-[12%] flex items-center justify-center" >
    <div className="flex flex-col mt-40 ">
        <h1 className='text-5xl'>Hi, Its me <span className='text-[#691d6c] text-5xl '> <strong>Alishba</strong></span></h1>
        <p className='max-w-screen-lg  text-3xl px-2.5 py-2.5 mt-20'>
        I m a frontend developer, passionate about technology and creating innovative solutions.<br/> I have a strong foundation in programming languages such as Html,Css,and JavaScript,<br/> I m currently working on Nextjs projects, and I m always eager to learn and grow.
        </p>
      
    </div>
    <div className=''>
<Image className ="relative top-12 w-[32vw] rounded-full h-[32vw] object-cover mt-44 left-56 cursor-pointer ease-in-out[0.4s]]"src={profile} alt='profile' />
</div>
    </section>
    </div>

  )
}

export default page
