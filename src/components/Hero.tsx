/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="flex justify-center lg:justify-evenly items-center bg-red-500 py-10">
      <div className="flex flex-col gap-4 items-center">
        <div className="
        lg:w-[700px]
        md:w-[400px]

        lg:text-5xl 

        w-[350px]  
        text-[1.50rem]
        ">
          <p>Welcome, I'm Davi Taveira and will be a pleasure to solve your problem. I am the Web Developer that you need.</p>
        </div>
        <div className="w-full flex justify-end px-10 text-lg lg:text-2xl">
          <button className="bg-[#d9d9d9] rounded-md px-3">let's talk</button>
        </div>
      </div>
      <div className=" 
      xl:w-[500px] xl:h-[500px] 
      md:flex hidden  bg-[#d9d9d9] 
      w-[300px] h-[300px]
      rounded-full  justify-center items-center">
        <Image
          className='rounded-full'
          alt='Davi Taveira Profile'
          src="/TaveiraProfile.png"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default Hero