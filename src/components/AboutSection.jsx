// 'use client';
// import React, { useTransition, useState } from 'react'
// import Image from 'next/image'
// import TabButton from './TabButton';

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <div className='flex flex-col gap-5'>
//         <div>
//           <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Frontend</p>
//           <div className='flex flex-wrap gap-2'>
//             {["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "ShadCN UI"].map((skill) => (
//               <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Backend & Data</p>
//           <div className='flex flex-wrap gap-2'>
//             {["Node.js", "Firebase", "MongoDB", "REST APIs"].map((skill) => (
//               <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Tools & Practice</p>
//           <div className='flex flex-wrap gap-2'>
//             {["Git", "GitHub", "Vercel", "Figma", "SSR / SSG", "Agile / Scrum", "Code Reviews"].map((skill) => (
//               <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <p className='text-xs uppercase tracking-widest text-cyan-300/70 mb-2'>Publishing</p>
//           <div className='flex flex-wrap gap-2'>
//             {["Amazon KDP Publishing", "E-Book Formatting"].map((skill) => (
//               <span key={skill} className='px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors'>
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   },

//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <div className='flex flex-col gap-4'>
//         <div className='border-l-2 border-cyan-400/40 pl-4'>
//           <p className='font-semibold text-white'>Diploma in Software Development</p>
//           <p className='text-sm text-slate-300'>SQI College of ICT, Dugbe Campus, Ibadan, Oyo State, Nigeria</p>
//           <p className='text-xs text-slate-400 mt-1'>2023 - 2024</p>
//         </div>
//         <div className='border-l-2 border-cyan-400/40 pl-4'>
//           <p className='font-semibold text-white'>B.Sc. (Ed) Economics</p>
//           <p className='text-sm text-slate-300'>Obafemi Awolowo University (OAU), Ile-Ife, Osun State, Nigeria</p>
//           <p className='text-xs text-slate-400 mt-1'>2014 - 2018</p>
//         </div>
//       </div>
//     )
//   },

//   {
//     title: "Experience",
//     id: "experience",
//     content: (
//       <div className='flex flex-col gap-4'>
//         {[
//           {
//             role: "Project Coordinator",
//             company: "Strategy Execution Company (Remote, US-based)",
//             period: "May 2025 - Present",
//           },
//           {
//             role: "Frontend Developer (Contract)",
//             company: "Starlight Energy & Agro Allied Ltd",
//             period: "2025 - Present",
//           },
//           {
//             role: "Frontend Developer",
//             company: "Strategy Execution Company (Remote, US-based)",
//             period: "Jan 2025 - May 2025",
//           },
//           {
//             role: "Front-End Developer",
//             company: "Cyberbuddies Ltd, Bodija, Ibadan, Oyo State, Nigeria",
//             period: "Nov 2024 - Jan 2025",
//           },
//           {
//             role: "Front-End Developer Intern",
//             company: "Smarthivetech Solutions Ltd, Lagos, Nigeria (Remote)",
//             period: "Jul 2024 - Oct 2024",
//           },
//         ].map((job) => (
//           <div key={job.role + job.period} className='border-l-2 border-cyan-400/40 pl-4'>
//             <p className='font-semibold text-white'>{job.role}</p>
//             <p className='text-sm text-slate-300'>{job.company}</p>
//             <p className='text-xs text-slate-400 mt-1'>{job.period}</p>
//           </div>
//         ))}
//       </div>
//     )
//   }

// ]

// const AboutSection = () => {
//   const [tab, setTab] = useState('skills');
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id)
//     });
//   }

//   return (
//     <section className='text-white'>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-12 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-6xl mx-auto'>

//         <div className='relative w-full max-w-sm mx-auto md:mx-0'>
//           <div className='absolute -inset-3 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-transparent to-violet-500/20 blur-xl' />
//           <Image
//             src="/images/abt-image.jpeg"
//             alt="Portrait of Jawad Olamide Yuusuf"
//             width={500}
//             height={500}
//             className='relative rounded-2xl border border-white/10 w-full h-auto object-cover'
//           />
//         </div>

//         <div className='text-left flex flex-col'>
//           <p className='text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-2'>About Me</p>
//           <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
//             Building fast, clean, production-ready frontends
//           </h2>
//           <p className='text-base lg:text-lg text-slate-300 leading-relaxed'>
//             I&apos;m a Next.js-focused frontend developer with hands-on experience building
//             high-performance, responsive, and SEO-friendly web applications. I work with
//             React, Next.js, TypeScript, and modern CSS frameworks to create scalable and
//             maintainable user interfaces, from equity management platforms with role-based
//             permissions to agritech dashboards handling credit scoring and risk monitoring.
//             I enjoy collaborating with designers and developers, participating in code
//             reviews, and turning real business requirements into clean, reliable frontend
//             solutions.
//           </p>

//           <div className='flex flex-row flex-wrap mt-8 gap-3 justify-start'>
//             <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
//               Skills
//             </TabButton>

//             <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
//               Education
//             </TabButton>

//             <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
//               Experience
//             </TabButton>
//           </div>

//           <div className={`mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-opacity duration-200 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
//             {TAB_DATA.find((t) => t.id === tab).content}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutSection

'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/* ------------------------------ Content ------------------------------ */

const SKILL_GROUPS = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI", "Bootstrap", "Chart.js"] },
  { label: "Backend & Data", items: ["Node.js", "REST APIs", "Firebase", "MongoDB", "Prisma"] },
  { label: "Tools & Delivery", items: ["Git", "GitHub", "Vercel", "Figma", "SSR / SSG", "Code Reviews"] },
  { label: "Project Management", items: ["Agile / Scrum", "Sprint Planning", "ClickUp", "Documentation"] },
  { label: "Publishing", items: ["Amazon KDP Publishing", "E-Book Formatting"] },
];

const EDUCATION = [
  { title: "Diploma in Software Development", school: "SQI College of ICT, Dugbe Campus, Ibadan", period: "2023 - 2024" },
  { title: "B.Sc. (Ed) Economics", school: "Obafemi Awolowo University (OAU), Ile-Ife", period: "2014 - 2018" },
];

const EXPERIENCE = [
  { role: "Project Coordinator", company: "Strategy Execution Company", note: "Remote, US-based", period: "May 2025 - Present" },
  { role: "Frontend Developer (Contract)", company: "Starlight Energy & Agro Allied Ltd", note: "Nigeria", period: "2025 - Present" },
  { role: "Frontend Developer", company: "Strategy Execution Company", note: "Remote, US-based", period: "Jan 2025 - May 2025" },
  { role: "Front-End Developer", company: "Cyberbuddies Ltd", note: "Bodija, Ibadan", period: "Nov 2024 - Jan 2025" },
  { role: "Front-End Developer Intern", company: "Smarthivetech Solutions Ltd", note: "Lagos (Remote)", period: "Jul 2024 - Oct 2024" },
];

const STATS = [
  { value: "9+", label: "Products shipped" },
  { value: "5", label: "Roles held" },
  { value: "US · NG", label: "Teams" },
];

const TABS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

/* ------------------------------ Icons ------------------------------ */

const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d={d} />
  </svg>
);
const ICONS = {
  code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
  layers: "m12 2 10 5-10 5L2 7l10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
};

const HIGHLIGHTS = [
  { icon: "code", title: "Full product builds", body: "From first screen to working platform, with clean, typed code." },
  { icon: "layers", title: "Real-world domains", body: "Fintech, agritech, logistics and e-commerce products in production." },
  { icon: "users", title: "Team coordination", body: "I plan sprints and keep a remote US product team shipping." },
];

/* ------------------------------ Panels ------------------------------ */

const SkillsPanel = () => (
  <div className="grid gap-5 sm:grid-cols-2">
    {SKILL_GROUPS.map((group) => (
      <div key={group.label} className={group.items.length > 6 ? "sm:col-span-2" : ""}>
        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{group.label}</p>
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Timeline = ({ items }) => (
  <ol className="relative space-y-6">
    <span className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent" aria-hidden="true" />
    {items.map((item) => {
      const current = item.period.includes("Present");
      return (
        <li key={item.title + item.period} className="relative pl-8">
          <span className={`absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 ${current ? "border-cyan-400 bg-cyan-400" : "border-white/30 bg-[#121212]"}`}>
            {current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />}
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-semibold text-white">{item.title}</p>
            {current && (
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                Current
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-slate-300">
            {item.subtitle}
            {item.note && <span className="text-slate-500"> · {item.note}</span>}
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">{item.period}</p>
        </li>
      );
    })}
  </ol>
);

const PANELS = {
  skills: <SkillsPanel />,
  experience: <Timeline items={EXPERIENCE.map((j) => ({ title: j.role, subtitle: j.company, note: j.note, period: j.period }))} />,
  education: <Timeline items={EDUCATION.map((e) => ({ title: e.title, subtitle: e.school, period: e.period }))} />,
};

/* ------------------------------ Section ------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="relative overflow-hidden text-white">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-4 py-16 sm:py-24 md:grid-cols-[0.9fr_1.1fr] xl:gap-20 xl:px-16">
        {/* ---------- Portrait ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-sm md:sticky md:top-24 md:mx-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-400/25 via-transparent to-violet-500/25 blur-2xl" />
          <div className="relative rounded-[1.75rem] bg-gradient-to-br from-cyan-400/60 via-white/10 to-violet-500/60 p-px">
            <div className="overflow-hidden rounded-[1.7rem] bg-[#121212]">
              <Image
                src="/images/abt-image.jpeg"
                alt="Portrait of Jawad Olamide Yuusuf"
                width={500}
                height={500}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* availability badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#121212]/80 px-3.5 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md sm:-right-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for projects
          </motion.div>

          {/* location badge */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-1/2 flex items-center gap-2 rounded-xl border border-white/10 bg-[#121212]/80 px-3 py-2 shadow-xl backdrop-blur-md sm:-left-6"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
              <Icon d={ICONS.pin} className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-white">Ibadan, Nigeria</span>
              <span className="block text-[10px] text-slate-400">Nigerian by base. Global by design.</span>
            </span>
          </motion.div>

          {/* stats */}
          <div className="relative -mt-10 mx-4 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#121212]/85 py-4 shadow-2xl backdrop-blur-xl">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <p className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Copy ---------- */}
        <div className="flex flex-col">
          <motion.p custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            About me
          </motion.p>

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            I build software that solves{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">real problems.</span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-base leading-relaxed text-slate-300 lg:text-lg">
            I&apos;m a software developer and project manager who builds complete web products, from the first screen to a platform people rely on every day. I work mainly with Next.js, React and TypeScript, and connect them to Node.js, Firebase and MongoDB backends.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-base leading-relaxed text-slate-400">
            My work covers equity management with role-based permissions, farmer credit scoring and repayment tracking, and delivery platforms with PIN-verified drop-offs. I also coordinate a remote US product team, so I know how to turn business requirements into plans, tickets and shipped releases.
          </motion.p>

          {/* highlights */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                custom={4 + i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300 transition-transform group-hover:scale-110">
                  <Icon d={ICONS[h.icon]} className="h-[18px] w-[18px]" />
                </span>
                <p className="mt-3 text-sm font-semibold text-white">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{h.body}</p>
              </motion.div>
            ))}
          </div>

          {/* tabs */}
          <div className="mt-10">
            <div role="tablist" aria-label="About details" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${tab === t.id ? "text-white" : "text-slate-400 hover:text-white"}`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="about-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[320px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {PANELS[tab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition hover:brightness-110"
            >
              Let&apos;s work together
              <Icon d={ICONS.arrow} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection