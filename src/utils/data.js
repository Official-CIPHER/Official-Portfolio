import {
  Mail,
  GraduationCap,
  BookOpen,
  School,
  Heart,
  Coffee,
  BookOpenTextIcon,
  Code2,
  Database,
  Server,
  Brain,
  Terminal,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";

// projects link
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.png"
import project6 from "../assets/images/project6.png"
import project7 from "../assets/images/project7.png"
import project8 from "../assets/images/project8.png"
import project9 from "../assets/images/project9.png"



export const SKILLS = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful and responsive user interfaces",
    skills: [
      { name: "HTML", level: 100, color: "from-orange-400 to-red-500" },
      { name: "CSS", level: 100, color: "from-blue-400 to-blue-600" },
      {
        name: "JavaScript",
        level: 100,
        color: "from-yellow-400 to-yellow-600",
      },
      { name: "React", level: 100, color: "from-sky-400 to-sky-600" },
      { name: "Tailwind", level: 100, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust APIs and handling server-side logic",
    skills: [
      { name: "Node.js", level: 100, color: "from-emerald-500 to-emerald-700" },
      { name: "Express.js", level: 100, color: "from-zinc-500 to-zinc-700" },
      {
        name: "Socket.IO",
        level: 100,
        color: "from-neutral-600 to-neutral-800",
      },
      { name: "JWT", level: 100, color: "from-orange-500 to-orange-700" },
      { name: "REST APIs", level: 100, color: "from-rose-400 to-rose-600" },
    ],
  },
  {
    title: "Domain Knowledge",
    icon: Brain,
    description: "Applying concepts to solve real-world software problems",
    skills: [
      { name: "DSA", level: 100, color: "from-teal-400 to-teal-600" },
      { name: "DBMS", level: 100, color: "from-amber-400 to-amber-600" },
      { name: "OOP", level: 100, color: "from-indigo-400 to-indigo-600" },
      { name: "OS", level: 100, color: "from-lime-400 to-lime-600" },
      { name: "CN", level: 100, color: "from-fuchsia-400 to-fuchsia-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Efficiently managing structured and unstructured data",
    skills: [
      { name: "MongoDB", level: 100, color: "from-green-500 to-green-700" },
      { name: "MySQL", level: 100, color: "from-blue-600 to-blue-800" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    description: "Writing efficient and scalable code across languages",
    skills: [
      {
        name: "JavaScript",
        level: 100,
        color: "from-yellow-400 to-yellow-600",
      },
      { name: "C++", level: 100, color: "from-blue-500 to-blue-700" },
    ],
  },
];

export const STATS = [
  { number: "80+", label: "LeetCode Questions" },
  { number: "110+", label: "Coding Ninjas Code360 Questions" },
  { number: "15+", label: "Technologies" },
  { number: "25+", label: "GitHub Repos" },
];

export const TECH_STACK = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "Postman",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Render",
  "Netlify",
  "Vite",
];

export const PROJECTS = [
  {
    id: 1,
    title: "HorizonCare",
    description:
      "A hospital management system with appointment booking ,admin &doctor panel.",
    image: project8,
    tags: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB","JWT"],
    liveUrl: "https://horizoncare-cipher.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/HorizonCare",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Newsify",
    description:
      "A modern news website fetching latest headlines and articles from news APIs.",
    image: project6,
    tags: ["HTML", "News API", "CSS", "JavaScript","Bootstrap"],
    liveUrl: "https://newsifynewswebsite.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/Newsify",
    featured: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Vartalaap",
    description:
      "A real-time chat application with user authentication and private messaging.",
    image: project9,
    tags: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB","Socket.io","JWT","Daisy UI"],
    githubUrl: "https://github.com/Official-CIPHER/VartaLaap",
    featured: false,
    category: "Full-Stack",
  },
  
  {
    id: 4,
    title: "Hanuman Ji Portfolio",
    description:
      "A tribute portfolio website for Lord Hanuman with animations and divine design.",
    image: project5,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://lordhanumanji.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/Portfolio",
    featured: false,
    category: "Frontend",
  },  
  {
    id: 5,
    title: "My-Movie",
    description:
      "Movie search app using external API to display trending and searched movies.",
    image: project4,
    tags: ["React", "API", "Material UI"],
    liveUrl: "https://mymovies-cipher.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/My-Movies",
    featured: false,
    category: "Frontend",
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game with an interactive UI and game logic in JavaScript.",
    image: project3,
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://tic-tac-toe-cipher.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/TIC-TOC-TOE-Game",
    featured: false,
    category: "Frontend",
  },
  
  {
    id: 7,
    title: "URL Shortener",
    description:
      "A backend project that shortens long URLs using Node.js and Express.js",
    image: project7,
    tags: ["Node.js", "Express.js"],
    githubUrl: "https://github.com/Official-CIPHER/url-shortener",
    featured: false,
    category: "Backend",
  },
  {
    id: 8,
    title: "Rock Paper Scissors",
    description:
      "A fun rock-paper-scissors game built using JavaScript and DOM manipulation.",
    image:project1,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://official-cipher.github.io/Game/",
    githubUrl: "https://github.com/Official-CIPHER/Game",
    featured: false,
    category: "Frontend",
  },
   {
    id: 9,
    title: "Weather Info",
    description:
      "A responsive weather app that shows live weather data for any city using an API.",
    image: project2,
    tags: ["React", "API", "CSS"],
    liveUrl: "https://cipher-weatherforecast.netlify.app/",
    githubUrl: "https://github.com/Official-CIPHER/Weather-Forecast",
    featured: false,
    category: "Frontend",
  },
  
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Global Institute of Technology and Management, Gurgaon",
    duration: "2021 - 2025",
    icon: GraduationCap,
    description: "Specialized in core CS subjects and learning MERN-stack, building projects.",
    score:"8.1 CGPA",
    color: "bg-purple-500",
  },
  {
    degree: "Senior Secondary (XII) - PCM",
    institution: "Kendriya Vidalaya, Mau",
    duration: "2019 - 2021",
    icon: BookOpen,
    description: "Completed 12th with focus on Physics, Chemistry, and Math.",
    score:"89%",
    color: "bg-green-500",
  },
  {
    degree: "Secondary (X)",
    institution: "Kendriya Vidalaya, Mau",
    duration: "2017 - 2019",
    icon: School,
    description: "Completed 10th with keen interest in science and tech.",
    score:"85.6%",
    color: "bg-blue-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intutive interface that user love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpenTextIcon,
    title: "Continuous Learning",
    description: "Always explore new technologies and best practies",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Official-CIPHER",
    color: "hover:text-gray-400",
    bgcolor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/vishal-kumar-vk70/",
    color: "hover:text-blue-400",
    bgcolor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:vishalofficial109@gmail.com",
    color: "hover:text-sky-400",
    bgcolor: "hover:bg-sky-500/10",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Vishal_leetcode211103/",
    color: "hover:text-green-400",
    bgcolor: "hover:bg-green-500/10",
  },
  {
    name: "Coding Ninjas",
    icon: SiCodingninjas,
    url: "https://www.naukri.com/code360/profile/77fe173b-e62d-404e-9c1f-4f7e91c88977",
    color: "hover:text-orange-400",
    bgcolor: "hover:bg-orange-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalofficial109@gmail.com",
    link: "mailto:vishalofficial109@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Vishal Kumar",
    link: "https://www.linkedin.com/in/vishal-kumar-vk70/",
  },
];
