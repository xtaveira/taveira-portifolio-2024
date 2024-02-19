import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col justify-center items-center py-10 gap-5">
            <div className="w-[90%] border-b-2 border-black">Contact</div>
            <section className="flex md:flex-row flex-col md:justify-evenly w-[90%] my-10 md:gap-0 gap-10">
                <div className="flex flex-col items-center gap-5">
                    <h3>Social</h3>
                    <div className="flex gap-4">
                        <Image
                            alt='Instagram'
                            src='/insta.svg'
                            width={30}
                            height={30}
                        />
                        <Image
                            alt='Github'
                            src='/github.svg'
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h3>Email</h3>
                    <div className="flex gap-4 text-[#d9d9d9]">
                        <p>devtaveira@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h3>Social</h3>
                    <div className="flex gap-4 text-[#d9d9d9]">
                        <p>+55 (44) 98820-8778</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer