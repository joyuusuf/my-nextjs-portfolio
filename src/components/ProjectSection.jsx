"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const webProjects = [
    {
        id: 1,
        title: "My Next.js Portfolio",
        description: "My Portfolio built with Next.js",
        image: "/images/projects/1.png",
        tag: [ "Project"],
        gitUrl: "https://github.com/joyuusuf/my-nextjs-portfolio.git",
        previewUrl: "",
    },

     {
        id: 2,
        title: "Admin Page",
        description: "Designed and developed a fully responsive Admin Dashboard using Next.js, Tailwind CSS, and ShadCN UI library. The dashboard features a user-friendly interface with interactive elements, optimized for seamless navigation and functionality across devices.",
        image: "/images/projects/2.png",
        tag: [ "Project"],
        gitUrl: "https://github.com/joyuusuf/admin-page.git",
        previewUrl: "/",
    },

  
    {
        id: 3,
        title: "Twitter Portfolio Website",
        description: "Developed a Twitter Page Clone using only HTML and CSS, replicating the visual design and layout of Twitter’s interface. ",
        image: "/images/projects/3.png",
        tag: [ "Project"],
        gitUrl: "https://github.com/joyuusuf/Twitter-pages.git",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Amazon NavBar",
        description: "Amazon Navbar built with HTML and CSS",
        image: "/images/projects/4.png",
        tag: [ "Project"],
        gitUrl: "https://github.com/joyuusuf/Amazon-Website.git",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Bank App",
        description: "Bank App with sign up, log in, making transfer, buying airtime, log out, getting receipt, signing out with firebase backend, built with HTML, CSS, and JavaScript.",
        image: "/images/projects/5.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/bank_app_with_firebase.git",
        previewUrl: "/",
    },
    // {
    //     id: 6,
    //     title: "Calculator",
    //     description: "Calculator built with HTML, CSS and JavaScript",
    //     image: "/images/projects/6.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/Calculator.git",
    //     previewUrl: "/",
    // },


    {
        id: 11,
        title: "HTML Portfolio",
        description: " Created an earlier version of my portfolio using HTML, CSS, and JavaScript. Showcased core web development skills with custom styling, responsive design, and interactive elements to enhance user engagement.",
        image: "/images/projects/11.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/my-first-portfolio.git",
        previewUrl: "https://mideyuusuf-newportfolio-rugn.vercel.app/ ",
    },

    {
        id: 12,
        title: "Statistical Table",
        description: "Built an interactive Statistical Table using HTML, CSS, and JavaScript with a fully responsive design adaptable to various screen sizes. Integrated dark and light mode toggling to enhance accessibility and user experience.",
        image: "/images/projects/12.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/AlphaTwelve-Project.git",
        previewUrl: "/",
    },


      {
        id: 2,
        title: "HeadPhone",
        description: "A headphone website built with HTML, CSS and JavaScript",
        image: "/images/projects/preview.png",
        tag: [ "Project"],
        gitUrl: "https://github.com/joyuusuf/headphone-plum.vercel.app",
        previewUrl: "/",
    },
];



const ProjectSection = () => {
    const [tag, setTag] = useState("Project");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    let contentToDisplay = [];

     if (tag === "Project") {
        contentToDisplay = webProjects;
    } 

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                {tag === "My Projects"}
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                
                <ProjectTag
                    onClick={handleTagChange}
                    name="Project"
                    isSelected={tag === "Project"}
                />
                
            </div>
            <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {contentToDisplay.map((item, index) => (
                    <motion.li
                        key={item.id} 
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image}
                            gitUrl={item.gitUrl}
                            previewUrl={item.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;
