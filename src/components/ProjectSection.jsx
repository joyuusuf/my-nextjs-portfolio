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
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Twitter Portfolio Website",
        description: "Twitter Website. This has the sign in page, Home page, Profile, Message, Explore page and Notification Page. Not responsive on small and medium screen. It was built with HTML and CSS.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/joyuusuf/Twitter-pages.git",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Bank App",
        description: "Bank App with sign up, log in, making transfer, buying airtime, log out, getting receipt, signing out with firebase backend, built with HTML, CSS, and JavaScript.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/joyuusuf/bank_app_with_firebase.git",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Calculator",
        description: "Calculator built with HTML, CSS and JavaScript",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/joyuusuf/Calculator.git",
        previewUrl: "/",
    },
];

const cookbooks = [
    {
        id: 7,
        title: "Pre-Gastric Surgery Bypass CookBook",
        description: `
                        Transform your pre-surgery experience with delicious, nutritious 
                        meals designed to prepare your body for success. This cookbook is your 
                        essential companion on the road to gastric bypass surgery. Forget bland, 
                        restrictive diets. We offer a vibrant collection of over 50+ 
                        easy-to-prepare recipes that are both palate-pleasing and doctor-approved. 
                        Embrace this transformative journey with confidence and a delicious plate! 
                        The "PRE-GASTRIC BYPASS SURGERY DIET COOKBOOK" is your key to a healthier, 
                        happier future.
                    `,
        image: "/images/projects/7.png",
        gitUrl: "https://www.amazon.com/PRE-GASTRIC-BYPASS-SURGERY-DIET-COOKBOOK/dp/B0CR6CK32J/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cZt3FRVxKg2_rw1tajzKtRF3zHSMhjkzYBtOLtLCMp8lLgrC6bSHpbk5lckzyrKNsrGIIz4iEIhICG6fcJNYBuZLnKAObPQm3MPoxD8XomlxGQu879_NmQU6hrysy6gEjthwOY8UZzikJoyTgxUKqkmjYKkZsfKbL0_Oz-fNvaXMjdA-MX88bfFHP8KM86v7A4d7bMa6YgZ6_1Yf9QtA42ODamuUpIPRVJYf31q7OfJrHNchkKUK7yiesJz0N1BX_E8lTL9X-yRxRlFJliUdfxibYAPhJD0hblwk753zzAE.nP-f6zjMVnf-LLQDN2w3eioP8wsxxa8jgYoZ1WzcOYU&dib_tag=se&keywords=Pre-gastric+surgery+bypass&qid=1728223586&sr=8-1",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Eczema Relief Diet CookBook for Kids.",
        description: `
                        Is your child's eczema leaving them itchy, frustrated, and 
                        missing out on fun? Do you feel helpless, watching them struggle 
                        with red, inflamed skin while conventional treatments seem to offer 
                        little relief? You're not alone. Millions of children worldwide suffer 
                        from eczema, a chronic condition that can take a toll on their well-being 
                        and yours. But what if there was a natural, delicious way to manage their 
                        symptoms and improve their quality of life? Don't let eczema steal your 
                        child's joy any longer. Take control of their health and well-being with 
                        "The Eczema Relief Diet Cookbook for Kids." Order your copy today and 
                        embark on a journey towards a happier, healthier future for your child.
                    `,
        image: "/images/projects/8.png",
        gitUrl: "https://www.amazon.com/ECZEMA-RELIEF-DIET-KIDS-Inflammation/dp/B0CTPQWM4F/ref=sr_1_2?crid=1FUYG7WEYC190&dib=eyJ2IjoiMSJ9.j5hX8iK5kph7bsmq3RwTZvfdtbU46wI3QMro8JhoDNR90eyP9xKrz84aQDb2A1e2usvsL-kGyY0brCjaECtGJHk7kcJJVPQ5cddXIf8m8DsKFQysDUAxIp0ih3C4-X8NMQiG3YUZL0l1pRtF322wGHgRY0z3a-Gz1Xqt4DZeCF0nZB8orH58wFFk-vj_X6XDqegObLsBEiH0NUtTi6Y6ARm4TzIjyQ2k2Ymv4LOQyKc.fvssG8f5tp_J4xIq2NlaJ75NZ6oZxEBtGFFzsd-e-6U&dib_tag=se&keywords=Eczema+relief+diet&qid=1728223939&sprefix=eczema+relief+diet+%2Caps%2C968&sr=8-2",
        previewUrl: "/",
    },
    {
        id: 9,
        title: "Stage 4 CKD CookBook for Seniors",
        description: ` 
                        Are you struggling with: Confusing and conflicting information 
                        about kidney-friendly diets? The fear of missing out on your favorite 
                        foods due to limitations? Feeling lost and unsure where to begin with 
                        meal planning? STAGE 4 CKD COOKBOOK FOR SENIORS is your lifeline to 
                        delicious, nutritious, and kidney-friendly meals. This comprehensive
                        guide empowers you to take control of your health, one delicious bite 
                        at a time.
                    `,
        image: "/images/projects/9.png",
        gitUrl: "https://www.amazon.com/STAGE-CKD-COOKBOOK-SENIORS-POTASSIUM/dp/B0CXJG6JLH/ref=sr_1_15?crid=BB9EHKOYOYPN&dib=eyJ2IjoiMSJ9.i4O1r0OOpMgP8Kb53b0OwyPylmFsnS4hAV3M5fwd6L8q_ZQ_bLm3AB9glSATDsfMCANG4ZRzT3iecF4iHTt0D3PRWPviTC13IXkYAyEeciFY7bvv2n72O_YC-BP-QKoKuKHWgFRq6b3gwBJ91Kkn7qu9B8TsLpQABXM3Zl9XmpGTfUpB8yuGl31mnpkxwFg1USOuGmum26ffSVMRD4_Ibj8lIlyCl5xAzBuyfLCzeCE.xPbNeJ7ZaaCqBfK3w70gBIdh74qfB3xH1qr49KMprMI&dib_tag=se&keywords=stage+4+ckd+cookbook+for+seniors&qid=1728225632&sprefix=Stage4+ckd+cookbook+for+senior%2Caps%2C584&sr=8-15",
        previewUrl: "/",
    },
    {
        id: 10,
        title: "Cancer-Fighting Nutrient Recipes CookBook",
        description: `
                        Is the fear of cancer casting a shadow over your life? 
                        Are you searching for answers, for ways to take charge of your health 
                        and well-being in the face of this daunting challenge? You're not alone. 
                        Millions of people worldwide grapple with the complexities of cancer, 
                        yearning for natural solutions to complement their conventional treatments.
                        Don't let fear and uncertainty cloud your path. Embrace the power of 
                        informed nutrition and embark on a delicious journey of empowerment with 
                        "The Cancer-Fighting Nutrients Recipes Cookbook.
                    `,
        image: "/images/projects/10.png",
        gitUrl: "https://www.amazon.com/CANCER-FIGHTING-NUTRIENTS-RECIPES-COOKBOOK-Nourishing-ebook/dp/B0CTFB6CL7/ref=sr_1_4?crid=1ITRJ9AR0QY0J&dib=eyJ2IjoiMSJ9.7PvpLAQI7dU4iG6LjwxsXHpaRMli6FVr7JXzfYxvREa36Tir-OINQzAtv84NwKZxabI1ieuvm17mRdEfWkEJ-NXjjFlBx1nve71YiRnQclDm-vqoVnDtnIA6FGcDjN4Dp6AfO6n2Qwcw8K9tMBz7kpYe5hjUAmIPfTRVSzGlNt3kSMXkpuOE1jRMBfyU5K5yleaQBpuGg8eJCvfrhO3OXapTpQt8yH_1ds5THr9SqyA.E-WVmgIBLrqwzO2rJyAJyt8HOgI6FJeYIj5jFckniD4&dib_tag=se&keywords=cancer-fighting+nutrient+recipes+cookbook&qid=1728225709&sprefix=cancer-fighting+nutrient+recipes+vookbook%2Caps%2C834&sr=8-4",
        previewUrl: "/",
    }
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    let contentToDisplay = [];

    if (tag === "All") {
        contentToDisplay = [...webProjects, ...cookbooks];
    } else if (tag === "Web") {
        contentToDisplay = webProjects;
    } else if (tag === "Cookbook") {
        contentToDisplay = cookbooks;
    }

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                {tag === "Cookbook" ? "My Cookbooks" : "My Projects"}
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Cookbook"
                    isSelected={tag === "Cookbook"}
                />
            </div>
            <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {contentToDisplay.map((item, index) => (
                    <motion.li
                        key={item.id} // Use item.id for unique keys
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
