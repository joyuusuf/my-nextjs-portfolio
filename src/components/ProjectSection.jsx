"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { image } from "fontawesome";


const webProjects = [

    {
        id: 0,
    title: "Starlight Marketplace",
    description: "Starlight Marketplace is a web application that allows users to buy and sell products online. It features a user-friendly interface, secure payment options, and a robust search functionality to enhance the shopping experience.",
    image: "/images/Starlight-marketplace.png",
    tag: ["Project"],
    previewUrl: "https://starlightecoenergy.com",
    },


    {
        id: 1,
    image: "/images/founders-fund.png",
    title: "Founders Fund",
    description: "Equity management with role-based permissions and live ownership visualizations.",
    tag: ["Project"],
    previewUrl: "https://founders-fund.vercel.app",
},


 {
    id: 2,
    title: "AgriConnect",
    image: "/images/Starlight-agriconnect.png",
    description: "An agritech platform with credit scoring, repayment tracking, and risk monitoring.",
    tag: ["Project"],
    previewUrl: "https://agri-connect-front-end-8o3i.vercel.app/login", 
  },

    {
        id: 3,
        title: "DebtPadi",
        description: "A credit and debt tracking app built for Nigerian small business owners. Track who owes you, record partial payments, and send WhatsApp reminders in one tap - all without a notebook.",
        image: "/images/projects/debtpadi.png",
        tag: ["Project", "Full Stack"],
        gitUrl: "https://github.com/joyuusuf/debtpadi.git",
        previewUrl: "https://debtpadi.vercel.app",
    },

    

    {
        id: 5,
        title: "Paidley Banking Web App",
        description: "A modern fintech app that lets users send, receive, and manage money globally, with multi-currency wallets, virtual cards, and secure international transfers.",
        image: "/images/projects/paidleyimage.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/paid-banking.git",
        previewUrl: "https://paidley-beta.vercel.app",
    },

    {
        id: 6,
        title: "FlowvaHub",
        description: "Flowvahub helps you organize your digital workspace, track what you use and spend, and discover smarter tools, with an added twist of earning rewards while you do it.",
        image: "/images/projects/f.png",
        tag: ["Project"],
        gitUrl: " https://github.com/joyuusuf/flowvahub",
        previewUrl: "https://flowvahub-test-murex.vercel.app",
    },


    {
        id: 7,
        title: "Kolobuy E-commerce Website",
        description: `Kolobuy is a modern e-commerce platform and online marketplace designed to 
                        make buying and selling online simple, secure, and efficient. It connects 
                        customers with sellers through an intuitive interface, fast product discovery, 
                        and smooth checkout, all backed by secure payments and reliable order management. 
                        Kolobuy empowers businesses to grow digitally while providing shoppers with a 
                        seamless, trustworthy online shopping experience across all devices.`,
        image: "/images/projects/kolobuy.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/kolobuy.git",
        previewUrl: "https://kolobuy.vercel.app",
    },

    {
        id: 8,
        title: "Paybuddies Fintech",
        description: "Paybuddies built with HTML, CSS, and JavaScript",
        image: "/images/projects/paybuddies.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/payfintech.git",
        previewUrl: "",
    },

    // {
    //     id: 9,
    //     title: "Admin Page",
    //     description: "Designed and developed a fully responsive Admin Dashboard using Next.js, Tailwind CSS, and ShadCN UI library. The dashboard features a user-friendly interface with interactive elements, optimized for seamless navigation and functionality across devices.",
    //     image: "/images/projects/2.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/admin-page.git",
    //     previewUrl: "https://github.com/joyuusuf/admin-page.git",
    // },



    {
        id: 10,
        title: "HeadPhone",
        description: "A headphone website built with HTML, CSS and JavaScript",
        image: "/images/projects/13.png",
        tag: ["Project"],
        gitUrl: "https://github.com/joyuusuf/headphone.git",
        previewUrl: "https://gbeduheadset.vercel.app/",
    },

    {
    //     id: 11,
    //     title: "HTML Portfolio",
    //     description: " Created an earlier version of my portfolio using HTML, CSS, and JavaScript. Showcased core web development skills with custom styling, responsive design, and interactive elements to enhance user engagement.",
    //     image: "/images/projects/11.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/my-first-portfolio.git",
    //     previewUrl: "https://mideyuusuf-newportfolio-rugn.vercel.app/ ",
    // },


    // {
    //     id: 12,
    //     title: "NovaGlide Social Media",
    //     description: " NovaChat is a real-time chat web application built with Next.js, TypeScript, and Tailwind CSS. It focuses on performance, scalability, and a clean, responsive user experience, with a well-structured component architecture suitable for startup-ready products.",
    //     image: "/images/projects/nova.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/novaglide_social_media",
    //     previewUrl: "",
    // },

    // {
    //     id: 13,
    //     title: "Amazon NavBar",
    //     description: "Amazon Navbar built with HTML and CSS",
    //     image: "/images/projects/4.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/Amazon-Website.git",
    //     previewUrl: "/",
    // },


    // {
    //     id: 6,
    //     title: "Bank App",
    //     description: "Bank App with sign up, log in, making transfer, buying airtime, log out, getting receipt, signing out with firebase backend, built with HTML, CSS, and JavaScript.",
    //     image: "/images/projects/5.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/bank_app_with_firebase.git",
    //     previewUrl: "/",
    // },
    // {
    //     id: 134,
    //     title: "Statistical Table",
    //     description: "Built an interactive Statistical Table using HTML, CSS, and JavaScript with a fully responsive design adaptable to various screen sizes. Integrated dark and light mode toggling to enhance accessibility and user experience.",
    //     image: "/images/projects/12.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/AlphaTwelve-Project.git",
    //     previewUrl: "https://github.com/joyuusuf/AlphaTwelve-Project.git",
    // },

    // {
    //     id: 4,
    //     title: "My Next.js Portfolio",
    //     description: "My Portfolio built with Next.js",
    //     image: "/images/projects/1.png",
    //     tag: ["Project"],
    //     gitUrl: "https://github.com/joyuusuf/my-nextjs-portfolio.git",
    //     previewUrl: "https://novaglideportfolio.vercel.app",
    // },
    }
    
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
