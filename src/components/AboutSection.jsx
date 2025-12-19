'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div>
          <h4 className="font-semibold mb-2">Frontend</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Next.js & Performance</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Server-Side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>SEO Best Practices</li>
            <li>Image Optimization</li>
            <li>Lazy Loading</li>
            <li>Code Splitting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Styling & UI</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>ShadCN UI</li>
            <li>Responsive Design</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tools & Backend Basics</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Node.js (Basics)</li>
            <li>Figma</li>
          </ul>
        </div>

      </div>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>
          Front-End Developer Intern (Remote), SmarthiveTech Solutions Ltd, Lagos, Nigeria.
          July 2024 – October 2024
        </li>
        <li>
          Front-End Developer, Cyberbuddies Ltd, Ibadan, Oyo State, Nigeria.
          November 2024 – January 2025
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>SQI College of ICT, Dugbe Campus, Ibadan, Oyo State, Nigeria.</li>
        <li>Obafemi Awolowo University (OAU), Ile-Ife, Osun State, Nigeria.</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [fade, setFade] = useState(true);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    setFade(false); // start fade out
    setTimeout(() => {
      startTransition(() => {
        setTab(id);
        setFade(true); // fade in new content
      });
    }, 200); // 200ms fade transition
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/abt-image.jpeg" alt="About me" width={500} height={500} />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>

          <p className='text-base lg:text-lg'>
            I am a Next.js-focused Front-End Developer with hands-on experience building
            high-performance, responsive, and SEO-friendly web applications. I work with
            React, Next.js, TypeScript, and modern CSS frameworks to create scalable and
            maintainable user interfaces. I have experience implementing server-side
            rendering (SSR), static site generation (SSG), integrating third-party APIs,
            and optimizing applications for performance across devices. I enjoy
            collaborating with designers and developers, participating in code reviews,
            and turning real business requirements into clean, reliable frontend solutions.
          </p>

          <div className='flex flex-row mt-8 gap-5 justify-start'>
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          <div
            className={`mt-8 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
