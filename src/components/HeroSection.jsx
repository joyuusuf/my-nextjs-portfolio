'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section className='relative overflow-hidden'>
            {/* Ambient background glow, purely decorative */}
            <div className='pointer-events-none absolute inset-0 -z-10'>
                <div className='absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]' />
                <div className='absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-[120px]' />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-4 items-center py-10 sm:py-20 px-4 xl:px-16 max-w-6xl mx-auto'>

                <div className='order-2 sm:order-1 sm:col-span-7 place-self-center text-center sm:text-left'>

                    <p className='text-[#ADB7BE] text-sm sm:text-base tracking-wide mb-3'>
                        Frontend Developer &middot; React &amp; Next.js
                    </p>

                    <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hello, I&apos;m
                        </span>
                        <br />
                        <span className='inline-block min-h-[1.2em]'>
                            <TypeAnimation
                                sequence={[
                                    'J. Olamide YUUSUF',
                                    1500,
                                    'a Frontend Developer',
                                    1500,
                                    'a Next.js Developer',
                                    1500,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto sm:mx-0 leading-relaxed'>
                        I build websites that are not just clean and responsive, but also easy
                        and enjoyable to use. I work with React, Next.js, TypeScript, and Tailwind
                        CSS to turn ideas into digital experiences that actually feel good to
                        interact with. When I&apos;m not coding, I&apos;m writing and publishing
                        cookbooks on Amazon, bringing tasty recipes and healthy living together in
                        a practical, fun way. Let&apos;s connect and create something awesome
                        together.
                    </p>

                    <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4'>
                        <a
                            href="https://drive.google.com/drive/folders/1BTLDgaH-bP1ndElKEaXt8v-Dd3_DVEB9?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-6 py-3 rounded-full text-center font-medium text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-900/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-purple-700/40'
                        >
                            Hire Me
                        </a>

                        <a
                            href="https://drive.google.com/drive/folders/1VTzExb7pe1FOf71EExVok16PyxLqe3hF?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-[1.5px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-200 hover:scale-[1.03]'
                        >
                            <span className='block bg-[#121212] hover:bg-[#1a1a1a] rounded-full px-6 py-[10.5px] text-center font-medium text-white transition-colors'>
                                Download CV
                            </span>
                        </a>
                    </div>

                </div>

                <div className='order-1 sm:order-2 sm:col-span-5 place-self-center'>
                    <div className='relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px]'>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-2xl' />
                        <div className='absolute inset-0 rounded-full bg-[#181818] border border-white/5' />

                        {/* Dedicated clipping container so the image is actually cropped into a circle */}
                        <div className='absolute inset-0 rounded-full overflow-hidden'>
                            <Image
                                src="/images/heroimage.png"
                                alt="Portrait of J. Olamide Yuusuf"
                                fill
                                priority
                                sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 260px"
                                className='object-cover object-top'
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeroSection