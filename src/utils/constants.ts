import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  devigital,
  
  Interstellus,
  
  nextjs,
  signaAdmin,
  
  Movley,
  Squeazee,
  Lago,
  Whisk,
  DevigitalSite,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Js Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Software Engineer",
    company_name: "Devigital Systems",
    icon: devigital,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  
  {
    title: "Front End Developer Intern",
    company_name: "Interstellus",
    icon: Interstellus,
    iconBg: "#E6DEDD",
    date: "August 2020 - October 2020",
    points: [
      "Experienced learning and growing in a team.",
      "Fixed bugs from existing websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managed full-cycle design tasks, handling phases from conception to completion while maintaining guidelines throughout.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
    "Muhammad Hassan Muawiya Delivered good work on this MERN stack development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. At one point I asked for an additional milestone and he was very forthcoming that the additional work was outside his area of expertise. I enjoyed working with Muhammad Muawiya and will likely have additional jobs for him in the future.",  
    name: "Zubair Roshan",
    designation: "Senior Director",
    company: "Pollito Pio Film",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  
  
];

const projects = [
  
  {
    name: "Squeazee",
    description:
      "This project is a console for building, managing, and deploying simple landing pages or microsites called Squeeze pages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      }
     
    ],
    image: Squeazee,
    source_code_link: "#",
    url_link: "https://squeezepage.io.",
  },
  
  {
    name: "SignaCapture Admin",
    description:
      "Web application that enables Admin to mange tenants and Templates, also Platform to make and get customized designed Albums/Images for students i.e. images of all students with their name and signature as memory or make ID cards of students.s",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
     
    ],
    image: signaAdmin,
    source_code_link: "#",
    url_link: "http://signa-admin-staging.s3-website-us-east-1.amazonaws.com/",
  },
  ,
  {
    name: "Lago Curators Portal",
    description:
      "A management console (Admin portal) for artists to showcase and sell their NFTs and manage their blockchain/non-minted NFTs to be displayed on LagoFrame, (a modern NFT frame)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Web Crawler",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      }
    ],
    image: Lago,
    source_code_link: "#",
    url_link: "https://app.lagoframe.com/",
  },
  {
    name: "Movley",
    description:
      "An Elegant console for managing quality control for Products.Movley gives you a managed service for the cost of a typical product inspection.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "NestJs",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      
    ],
    image: Movley,
    source_code_link: "#",
    url_link: "https://movley.com/",
  },
  {
    name: "Whisk Media",      
    description:
      "Whisk Media is a marketing and campaigning platform used to run campaigns on third-party apps for any events that are planned by brands.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",      
        color: "green-text-gradient",
      },
      {
        name: "Material-Ui",
        color: "pink-text-gradient",
      },
      {
        name: "NestJs",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      
    ],
    image:Whisk,
    source_code_link: "#",
    url_link: "https://movley.com/",
  },
  {
    name: "Devigital Official Website",      
    description:
      "DEVIGITAL Devigital Systems is a full-service software development company founded by veterans of the IT Industry with over thirty years of collective experience and a vision of transforming brilliant ideas into incredible products",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",      
        color: "green-text-gradient",
      },
      {
        name: "Material-Ui",
        color: "pink-text-gradient",
      },
      {
        name: "KeystoneJs",
        color: "green-text-gradient",
      },
      
      
    ],
    image:DevigitalSite,
    source_code_link: "#",
    url_link: "https://devigital.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
