import { parseArgs } from "util";

export interface Post {
    slug: string;
    
  }
  
  // Simulated blog posts data
  export const posts: Post[] = [
    {
      slug: "first-post",
    },
    {
      slug: "second-post",
    },
    {
      slug: "third-post",
    },
  ];


  // data.ts
export const skillsData = [
  { skillName: 'HTML', percentage: 90, },
  { skillName: 'CSS', percentage: 83, },
  { skillName: 'TypeScript', percentage: 80, },
  { skillName: 'JavaScript', percentage: 70, },
  { skillName: 'Next.js', percentage: 60, },
  { skillName: 'Nodejs', percentage: 65, },
  { skillName: 'React', percentage: 50, },
  { skillName: 'Angular', percentage: 40, },
];

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experiences:Experience [] = [
  {
    title: "Teacher",
    company: "Government",
    date: "2010 - Present",
    description: "In Education department Government of Sindh working as Primary School Teacher .",
  },
  {
    title: "Masters Of Art",
    company: "University of Sindh",
    date: "2012",
    description: "Masters in litrature in Sindhi department.",
    
  },
  {
    title: "Web Developer",
    company: "Pnaversity",
    date: "2023",
    description: "Dummy text dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.",
  },
  {
    title: "Computer Short Course",
    company: "CTS",
    date: "2004",
    description: "Basic knowldge of computer Ms-Office ( Word, Excel, PowerPoint ) basic commond prompt.",
    
  },
  {
    title: "UX/UI Designer",
    company: "Envato",
    date: "2018 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipiscing elit.",
  },
  {
    title: "AI, Web-3.0, Metavers",
    company: "GIAIC",
    date: "2024-Present",
    description: "Learned TypeScript, Nextjs and working more many projects now we are moving to Agentic AI.",
    
  },
];

export const navItems = ["Web Design", "UI/UX", "Development"];

export interface ProjectPost {
  id: number; 
  title: string;
  category: string; 
  img: string;
  projectName: string;
  client: string;
  language: string;
  previewLink: string;
  label: string;
}
export const projects:ProjectPost [] = [
  { 
    id: 1, 
    title: 'Figma Tamplet', 
    category: 'web design', 
    img: '/project/project0.JPG',
    projectName: "White Space",
    client: "Muhammad Bilal",
    language: "Nextjs, TypeScript",
    previewLink: "https://white-space-seven.vercel.app",
    label: "www.whitespace.com",
  },
  { 
    id: 2, 
    title: 'Hackathon', 
    category: 'web design', 
    img: '/project/project1.jpg',
    projectName: "Resume Builder", 
    client: "Muhammad Ameen", 
    language: "HTML, CSS, TypeScript", 
    previewLink: "https://hachathon-milestone-05.vercel.app/",
    label: "www.resumebuilder.com",
  },
  { 
    id: 3, 
    title: 'Development', 
    category: 'development', 
    img: '/project/project2.jpg',
    projectName: "Simple Calculator", 
    client: "Asharib Ali", 
    language: "Nextjs TypeScript", 
    previewLink: "https://day-05-simple-calculator.vercel.app/", 
    label: "www.calculator.com",
  },
  { 
    id: 4, 
    title: 'UI/UX Design', 
    category: 'ui/ux', 
    img: '/project/project3.jpg',
    projectName: "Countdown Timer", 
    client: "Asharib Ali", 
    language: "Nextjs, TypeScript", 
    previewLink: "https://countdown-timer-psi-one.vercel.app/", 
    label: "www.countdowntimer.com",
  },
  { 
    id: 5, 
    title: 'UI/UX', 
    category: 'ui/ux', 
    img: '/project/project4.jpg',
    projectName: "Number Guessing Game", 
    client: "Hamzah Syed", 
    language: "Nextjs, TypeScript", 
    previewLink: "https://number-guessing-game-ecru.vercel.app/", 
    label: "www.numberguessinggame.com",
  },
  { 
    id: 6, 
    title: 'Development', 
    category: 'development', 
    img: '/project/project5.jpg',
    projectName: "Digital Clock", 
    client: "Ali Aftab Sheikh", 
    language: "Nextjs, TypeScript", 
    previewLink: "https://day06-digital-clock.vercel.app/", 
    label: "www.digitalclock.com",
  },
];

export interface Posts {
    image: string;
    heading: string;
    para: string;
    bloger: string;
    date: string;
    tag: string;
    p1: string;
    highlight: string;
    p2: string;
    p3: string;
}

export const blogPost:Posts [] = [
  {
    image: "/blog/blog1.jpg",
    heading: "How to Own Your Audience by Creating an Email List",
    para: "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
    bloger: "Akber",
    date: "26 Oct 2022",
    tag: " wordpress, business, economy, design",
    p1: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlight: "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/blog/blog2.jpg",
    heading: "Top 10 Toolkits for Deep Learning in 2022",
    para: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    bloger: "Usman",
    date: "12 Apr 2023",
    tag: "wordpress, business, economy, design",
    p1: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlight: "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/blog/blog3.jpg",
    heading: "Everything You Need to Know About Web Accessibility",
    para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    bloger: "Aini",
    date: "12 Nov 2023",
    tag: " wordpress, business, economy, design",
    p1: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlight: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/blog/blog4.jpg",
    heading: "How to Inject Humor & Comedy Into Your Brand",
    para: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
    bloger: "Qasim",
    date: "07 Jan 2024",
    tag: "wordpress, business, economy, design",
    p1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas",
    highlight: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/blog/blog5.jpg",
    heading: "Women in Web Design: How To Achieve Success",
    para: "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",

    bloger: "Karim",
    date: "26 Aug 2024",
    tag: "wordpress, business, economy, design",
    p1: "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlight: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image:"/blog/blog6.jpg",
    heading: "Evergreen versus topical content: An overview",
    para: "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",

    bloger: "Khizra",
    date: "28 Sep 2024",
    tag: "wordpress, business, economy, design",
    p1: "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlight: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.",
    p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]