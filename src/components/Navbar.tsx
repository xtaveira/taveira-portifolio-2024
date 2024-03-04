import Image from 'next/image'
import React from 'react'

const Navbar = ({ about, projects, contact }) => {
    return (
        <nav className="flex p-5 sm:px-10 md:justify-end items-center justify-center gap-10">

            <div className="md:hidden flex bg-[#d9d9d9] rounded-full items-center w-[40px] h-[40px]">
                <Image
                    className='rounded-full'
                    alt='Davi Taveira Profile'
                    src="/TaveiraProfile.png"
                    width={500}
                    height={500}
                />
            </div>
            <div><a href=''>about</a></div>
            <div>projects</div>
            <div>contact</div>
        </nav>
    )
}

export default Navbar