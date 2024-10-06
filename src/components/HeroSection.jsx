'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'






const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>

                    <h1 className='text-white font-extrabold text-4xl lg:text-6xl mb-4'>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">

                            Hello, I'm {" "}

                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[

                                'Olamide Yuusuf',
                                1000,
                                'a Web Developer',
                                1000,
                                'a Front-End Developer',
                                1000,
                                'a Published Cookbook Author',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className='text-[#ADB7BE] text-base  sm:text-lg lg:text-xl mb-6 font-serif'>
                        As a developer, I bring ideas to life with clean, responsive designs and 
                        user-friendly experiences. My expertise in HTML, CSS, JavaScript, React and Next.js  lets me craft digital 
                        solutions that are not only functional but visually engaging.
                        When I'm not coding, I dive into the world of culinary creativity, 
                        writing and publishing cookbooks on Amazon. My latest projects blend 
                        the art of cooking with the science of health, 
                        offering readers a taste of delicious, well-researched recipes.
                        Let's connect, build, and create something amazing together!
                    </p>

                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px- py-2'>Download CV </span>
                        </button>
                    </div>

                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] [w-250px] [h-250px] lg:w-[400px] lg:h-[400px] relative'>
                        <img src="/images/hero-section.png" alt="hero-section"
                            width={300} height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />

                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeroSection