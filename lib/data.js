import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { FaBehance } from "react-icons/fa";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Showcase",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Let's talk",
        hash: "#contact",
    },
];

export const socialLinks = [
    {
        icon: <BsLinkedin />,
        href: 'https://www.linkedin.com/in/kmrakash/'
    },
    {
        icon: <BsGithub />,
        href: 'https://github.com/kmrakash'
    },
    {
        icon: <BsInstagram />,
        href: 'https://www.instagram.com/kmraksh/'
    },
    // {
    //     icon: <FaBehance />,
    //     href: 'https://www.behance.net/anushreyjain'
    // }
]

export const showcase = [
    {
        sNo: "01",
        title: "MVP ROCKETS - ArisInfra",
        desc: "India's largest digital platform to simplify construction for every stake-holder in the ecosystem",
        workDone: [
            `Refined slow queries to achieve an 80% reduction in response time, enhancing application speed with large data volumes`,
            'Engineered a deal summary feature to provide an overall summary of projected business and growth using graphical representations.',
            'Revamped the completed delivery section to include search and filter capabilities, streamlining data retrieval and improving user accessibility.',
            `Developed a permission management service to efficiently handle user permissions, including listing, adding, and removing permissions`,
            `Collaborated with senior developers and product managers to build a robust user management service for a distributed platform.`
        ],
        href: 'https://arisinfra.com/'
    },
    {
        sNo: "02",
        title: "MVP ROCKETS - Zenova",
        desc: `Zenova Car Subscription | Premium Car Rental for the Long Term`,
        workDone: [
            `Integrated REST APIs with all application pages for Zenova's premium car subscription platform`,
            'Implemented a feature to allow users to include or exclude additional services / drivers in an active subscription, resulting in a 10% increase in revenue',
            `Created a functionality to enable users to upgrade or downgrade their subscription plans seamlessly`,
        ],
        href: 'https://zenova.com'

    },
    {
        sNo: "03",
        title: "MVP ROCKETS - DB Daddy",
        desc: "DB Daddy - Create Database Relational Schema Diagrams Online",
        workDone: [
            'Collaborated with product managers and UI developers to create an online platform for generating database relational schema diagrams.',
            `Developed a feature to write DBML code in a code editor, enabling users to generate database schema and their relationships.`,
            `Implemented tagging functionality for schema tables, allowing users to organize and filter tables based on tags.`,
            `Created a search feature to find specific schema tables and their relationships quickly.`
        ],
        href: 'https://dbdaddy.dev/'

    }
];

// export const stats = [
//     { title: "30+", subTitle: "Projects done" },
//     { title: "50+", subTitle: "Clients handled" },
//     { title: "100+", subTitle: "Cups of coffee" },
// ];

export const experiencesData = [
    {
        company: 'MVP Rockets',
        profile: 'FullStack Developer',
        href: 'https://mvprockets.com/',
        duration: 'Jul 2022-Present',
        tagline: `Developed web applications using technologies like Javascript, Node.js, Express.js, Next.js, React.js, PostgreSQL`,
        list: [
            `Contributed to building robust and scalable web applications for clients including Afto, Zenova, and ArisInfra`,
            `Developed REST APIs and integrated them with UI components following Test Driven Development (TDD) practices`,
            `Created an in-house application for generating online Database Relational Schema Diagrams.`,
        ]
    },

    {
        company: 'PeakMind',
        profile: 'FullStack Developer (Intern)',
        href: 'https://www.peakmind.in/',
        duration: 'Jan 2022 - March 2022',
        tagline: ``,
        list: [
          'Developed and optimized responsive landing pages, ensuring a maximum response time of 1 second to enhance user experience.',
          `Improved the client onboarding service by implementing parallel processing for data uploads via CSV files, resulting in a 40% reduction in response time.`
        ]
    },
];

export const skillsData = [
    {
        logo: 'javascript',
        name: 'JavaScript'
    },
    {
        logo: 'nodejs',
        name: 'Node.js'
    },
    {
        logo: 'express',
        name: 'Express.js'
    },
    {
        logo: 'postgresql',
        name: 'PostgreSQL'
    },
    {
        logo: 'react-js',
        name: 'React.js'
    },
    {
        logo: 'next-js',
        name: 'Next.js'
    },
    {
        logo: 'tailwind-css',
        name: 'Tailwind CSS'
    },
    {
        logo: 'git',
        name: 'Git'
    },
    {
        logo: 'html',
        name: 'HTML'
    },
    {
        logo: 'css',
        name: 'CSS3'
    },


];
