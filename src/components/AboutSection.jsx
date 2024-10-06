'use client';
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>Firebase</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Git</li>
      </ul>
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>SQI College of ICT, Dugbe Campus, Ibadan, Oyo State, Nigeria.</li>
        <li>Obafemi Awolowo University (OAU), Ile-Ife, Osun State, Nigeria. </li>
      </ul>
    )
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Front-End Developer Intern (Remote), Smarthivetech Solutions LTD, Lagos, Nigeria.</li>
      </ul>
    )
  }

]
const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    });
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <img src="/images/abt-image.jpeg" alt="" width={500} height={500} />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
          <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
          <p className='text-base lg:text-lg '>I am a full stack web developer with a passion for 
            creating interactive and responsive web applications. I have experience working with HTML, 
            CSS, Bootstrap, JavaScript, React, Next.Js,
            NodeJs, MongoDB, Git. I am a quick learner and
            I am always looking to expand my knowledge and skill set.
            I am always excited to work with team to create amazing applications.
          </p>
          <div className='flex flex-row mt-8 gap-5 justify-start'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills {" "}
            </TabButton>

            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education {" "}
            </TabButton> <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experiece"}>
              {" "}
              Experience {" "}
            </TabButton>

          </div>

          <div className='mt-8'>{TAB_DATA.find ((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection