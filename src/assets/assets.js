
import {
    FaCloud, FaCode, FaDatabase, FaLightbulb, FaPaintBrush,
    FaReact, FaServer, FaTools
} from "react-icons/fa";

import fasteat from '../assets/fasteat.png';
import hiddle from '../assets/hiddle.png';
import timemust from '../assets/timemust.png';
import lifeofme from '../assets/lifeofme.png';
import Offerapret from '../assets/offerapret.png';
import profileImage from "../assets/profile.png";



export const assets = {
    profileImage: profileImage,

};

export const navMenu = [
    {
        title:"Home",
        id:"home"
    },
    {
        title:"Work",
        id:"work"
    },
    {
        title:"Skills",
        id:"skills"
    },
    {
        title:"About",
        id:"about"
    },
    {
        title:"Contact",
        id:"contact"
    }
];

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        color: 'text-orange',
        description: 'I enjoy solving complex problems and building creative solutions that improve user experience and business efficiency.'
    },
    {
        icon: FaPaintBrush,
        title: 'Design',
        color: 'text-orange',
        description: 'I create clean, modern, and user-friendly interfaces with strong attention to detail and usability.'
    },
    {
        icon: FaCode,
        title: 'Clean code',
        color: 'text-orange',
        description: 'I follow best practices, write maintainable code, and build scalable architectures that are easy to understand and extend.'
    }
];

export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend Developmet',
        description: 'I build responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. I focus on creating clean, modern designs and smooth user experiences that work seamlessly across all devices.',
        techs: ["Rect.js", "Next.js", "HTML"]
    },
    {
        icon: FaServer,
        title: 'Backend',
        description: 'I develop secure and scalable server-side applications using Node.js and Express. I create RESTful APIs, handle authentication, and ensure efficient data processing and application performance.',
        techs: ["Node.js", "Express.js", 'REST APIs']
    },
    {
        icon: FaDatabase,
        title: 'Database',
        description: 'I design and manage databases to ensure structured, secure, and optimized data storage. I work with both SQL and NoSQL databases depending on project requirements.',
        techs: ["MongoDB", "MySQL"]
    },
    {
        icon: FaCloud,
        title: 'Cloud',
        description: 'I deploy and manage applications on cloud platforms with CI/CD pipelines for smooth and automated delivery. I focus on performance, scalability, and reliability.',
        techs: ["EC2", "Docker", "CI/CD"]
    },
    {
        icon: FaTools,
        title: 'Tools',
        description: 'I use modern development tools to improve productivity, collaboration, and code quality throughout the development lifecycle',
        techs: ["GIT", "VS Code"]
    },

];
export const projects = [
    {
        title: "FastEat",
        description: "FastEat is a food delivery app that allows users to quickly browse restaurants, order meals, and have food delivered to their doorstep. The app focuses on speed, convenience, and a smooth user experience for both customers and restaurant partners.",
        image: fasteat,
        techs: ["Node.js", "Express.js","EC2","Stripe"]
    },
    {
        title: "Hiddle",
        description: "Hiddle facilitates connections between users based on mutual interests. Users can browse through profiles and express their preferences. When two users like each other, a match is formed, enabling further interaction through a chat.",
        image: hiddle,
        techs: ["Node.js", "Express.js","S3","EC2"]
    },
    {
        title: "TimeMust",
        description: "TimeMust is a school bus management system that enables admins to manage multiple schools and bus assignments. Schools can add buses, drivers, and student/parent accounts, while parents can track buses in real time and make online payments for safe and convenient transportation management.",
        image: timemust,
        techs: ["Node.js", "Express.js","EC2"]
    },
    {
        title: "LifeOfMe",
        description: "This application enables users to plan and organize all aspects of their funeral, including ceremony details, guest lists, themes, and personalized gifts. Users can add family members, and the system generates a PDF wish certificate containing all their preferences to share with family members",
        image: lifeofme,
        techs: ["Node.js", "Express.js","EC2"]
    },
    {
        title: "Offerapret",
        description: "Oferapret is an online marketplace that connects homeowners in Romania with skilled tradespeople. Homeowners can post job requests with detailed requirements, while tradespeople can browse relevant opportunities and contact clients through calls, emails, or chat for efficient collaboration.",
        image: Offerapret,
        techs: ["Node.js", "React","S3","EC2"]
    },
]