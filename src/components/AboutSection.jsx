'use client';
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className='flex flex-col gap-5'>
        <div>
          <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Frontend</p>
          <div className='flex flex-wrap gap-2'>
            {["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "ShadCN UI"].map((skill) => (
              <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Backend & Data</p>
          <div className='flex flex-wrap gap-2'>
            {["Node.js", "Firebase", "MongoDB", "REST APIs"].map((skill) => (
              <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Tools & Practice</p>
          <div className='flex flex-wrap gap-2'>
            {["Git", "GitHub", "Vercel", "Figma", "SSR / SSG", "Agile / Scrum", "Code Reviews"].map((skill) => (
              <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Publishing</p>
          <div className='flex flex-wrap gap-2'>
            {["Amazon KDP Publishing", "E-Book Formatting"].map((skill) => (
              <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <div className='flex flex-col gap-4'>
        <div className='border-l-2 border-cyan-400/40 pl-4'>
          <p className='font-semibold text-white'>Diploma in Software Development</p>
          <p className='text-sm text-slate-300'>SQI College of ICT, Dugbe Campus, Ibadan, Oyo State, Nigeria</p>
          <p className='text-xs text-slate-400 mt-1'>2023 - 2024</p>
        </div>
        <div className='border-l-2 border-cyan-400/40 pl-4'>
          <p className='font-semibold text-white'>B.Sc. (Ed) Economics</p>
          <p className='text-sm text-slate-300'>Obafemi Awolowo University (OAU), Ile-Ife, Osun State, Nigeria</p>
          <p className='text-xs text-slate-400 mt-1'>2014 - 2018</p>
        </div>
      </div>
    )
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <div className='flex flex-col gap-4'>
        {[
          {
            role: "Project Coordinator",
            company: "Strategy Execution Company (Remote, US-based)",
            period: "May 2025 - Present",
          },
          {
            role: "Frontend Developer (Contract)",
            company: "Starlight Energy & Agro Allied Ltd",
            period: "2025 - Present",
          },
          {
            role: "Frontend Developer",
            company: "Strategy Execution Company (Remote, US-based)",
            period: "Jan 2025 - May 2025",
          },
          {
            role: "Front-End Developer",
            company: "Cyberbuddies Ltd, Bodija, Ibadan, Oyo State, Nigeria",
            period: "Nov 2024 - Jan 2025",
          },
          {
            role: "Front-End Developer Intern",
            company: "Smarthivetech Solutions Ltd, Lagos, Nigeria (Remote)",
            period: "Jul 2024 - Oct 2024",
          },
        ].map((job) => (
          <div key={job.role + job.period} className='border-l-2 border-cyan-400/40 pl-4'>
            <p className='font-semibold text-white'>{job.role}</p>
            <p className='text-sm text-slate-300'>{job.company}</p>
            <p className='text-xs text-slate-400 mt-1'>{job.period}</p>
          </div>
        ))}
      </div>
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-12 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-6xl mx-auto'>

        <div className='relative w-full max-w-sm mx-auto md:mx-0'>
          <div className='absolute -inset-3 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-transparent to-violet-500/20 blur-xl' />
          <Image
            src="/images/abt-image.jpeg"
            alt="Portrait of Jawad Olamide Yuusuf"
            width={500}
            height={500}
            className='relative rounded-2xl border border-white/10 w-full h-auto object-cover'
          />
        </div>

        <div className='text-left flex flex-col'>
          <p className='text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-2'>About Me</p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Building fast, clean, production-ready frontends
          </h2>
          <p className='text-base lg:text-lg text-slate-300 leading-relaxed'>
            I&apos;m a Next.js-focused frontend developer with hands-on experience building
            high-performance, responsive, and SEO-friendly web applications. I work with
            React, Next.js, TypeScript, and modern CSS frameworks to create scalable and
            maintainable user interfaces, from equity management platforms with role-based
            permissions to agritech dashboards handling credit scoring and risk monitoring.
            I enjoy collaborating with designers and developers, participating in code
            reviews, and turning real business requirements into clean, reliable frontend
            solutions.
          </p>

          <div className='flex flex-row flex-wrap mt-8 gap-3 justify-start'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>

            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>

            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              Experience
            </TabButton>
          </div>

          <div className={`mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-opacity duration-200 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection