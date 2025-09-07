import { faGithub } from "@fortawesome/free-brands-svg-icons";
import quickgpt from '../assets/quickgpt.png'
import cryto from '../assets/cryto.png'
import ecom from '../assets/ecom.png'
import netfix from '../assets/netflix.png'
import port from '../assets/port1.png'
import portreact from '../assets/portreact.png'


export const data = [
    {
        date: "SEP 2025",
        title: "Quickchat",
        link: "https://quickchat-xi-ruddy.vercel.app/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/Quickchat" },
            
        ],
        descriptions: [
            "AI Creative Platform – Interact with AI using Google Gemini 2.0 Flash for chat, and generate images from prompts with ImageKit AI. The platform includes a credit system for accessing services, a community gallery to share creations, supports dark and light modes, and features a responsive design for seamless use on any device.",
    
        ],
        skills: [
            ["React", "Vite", "Tailwind "],
            ["JWT", "NodeJS", "Express", "MongoDB"],
        ],
        picture: quickgpt,
    },
    {
        date: "AUG 2025",
        title: "Cryptocurrency",
        link: "https://v0crypto.netlify.app/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/crypto" },
        
        ],
        descriptions: [
            "Cryptocurrency Dashboard – A web app that displays up-to-date cryptocurrency data, supporting multiple currencies like USD, EUR, and INR. Users can track price trends with interactive charts and quickly search for specific cryptocurrencies.",
        ],
        skills: [
            ["React", "Vite", "React Google Charts ","CoinGecko API"],
        ],
        picture: cryto,
    },
    {
        date: "AUG 2025",
        title: "Netfix-clone",
        link: "https://kn-netfix-clone.netlify.app/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/netflix_clone" },
        
        ],
        descriptions: [
            "A web application that fetches movie data from The Movie Database (TMDB) API, allowing users to sign up and log in via Firebase Authentication. Watch movie trailers directly from YouTube, browse movies by popularity, rating, and release date, all within a responsive design optimized for various devices.",
        ],
        skills: [
            ["React ", "Vite ", "API", "Firebase"],
        ],
        picture: netfix,
    },
    {
        date: "AUG 2025",
        title: "E-commerce",
        link: "https://ecom-web-beryl.vercel.app/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/ecom-web" },
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/ecom-api" },
            
        
        ],
        descriptions: [
            "E-commerce Frontend application developed with React + Vite with comprehensive features supporting buying and selling, product management, payment, and admin system.",
            " API for online store system developed with Node.js, Express, Prisma, and MySQL/PostgreSQL supports complete features from product management, ordering, payment, and admin system.",
        ],
        skills: [
            ["React ", "Vite ", "Tailwind"],
            ["Prisma ", "NodeJS", "Express", "MySQL/PostgreSQL","Cloudinary"],
        ],
        picture: ecom,
    },
    {
        date: "AUG 2025",
        title: "Portfolio React",
        link: "https://kanokpol-natekuakul.github.io/Kanokpol_port/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/Kanokpol_port" },
            
            
        
        ],
        descriptions: [
            "A personal portfolio website created with React and Tailwind CSS with an automatic deployment system.",
            
        ],
        skills: [
            ["React ", "Vite ", "Tailwind"],
            ["Prisma ", "NodeJS", "Express", "MySQL/PostgreSQL","Cloudinary"],
        ],
        picture: portreact,
    },
    {
        date: "MAR 2025",
        title: "WebPortfolio",
        link: "https://v1port.netlify.app/",
        materials: [
            { type: faGithub, link: "https://github.com/Kanokpol-Natekuakul/Portfolio_v1" },
            
            
        
        ],
        descriptions: [
            "The personal portfolio website of Kanokpol Natekuakul (Pol) that compiles projects, skills, experience, and various certificates.",
            
        ],
        skills: [
            ["Html ", "Css ", "javascript"],
            
        ],
        picture: port,
    },
]