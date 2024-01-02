import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "C++/Python",
    icon: backend,
  },
  {
    title: "Data Structure And Algoritham",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
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
    title: "Full Stack Development Intern (MERN)",
    company_name: "Soft Coding Solutions",
    icon: "https://www.softcodingsolutions.com/static/media/Logo.54a9014d.png",
    iconBg: "#E6DEDD",
    date: "July 2023 - Aug 2023",
    points: [
      "Completed an internship focused on MERN stack web development, contributing to the design and implementation of various projects. Assisted in developing RESTful APIs using Express.js, integrating MongoDB with Mongoose for database management, and creating dynamic front-end components using React.",
      "Collaborates with the team to ensure seamless user experiences, responsive designs, and robust web security practices.",
      "Gained valuable hands-on experience in agile development methodologies, version control, and collaborative problemsolving.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "Infinity IT Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2022",
    points: [
      "As a Frontend Development Intern, I built up my skills in HTML, CSS, and JavaScript, actively contributing to feature implementation and site optimization.",
      "Engaged in collaborative cross-functional teamwork, enhancing my proficiency in frontend development and problemsolving.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Click the link below to visit my LinkedIn profile and discover my skills, experiences, and projects.",
    name: "abhaypatel07",
    designation: "",
    company: "LinkedIn",
    link: "https://www.linkedin.com/in/abhaypatel07/",
    image: "https://media.licdn.com/dms/image/D4D35AQEXNUbSkzGpDg/profile-framedphoto-shrink_400_400/0/1704146452239?e=1704754800&v=beta&t=UxmI_scAEXrpInSVX2L-fL2ay-62OmkyPG12icRhCIA",
  },
  {
    testimonial:
      "Dive into my repositories, see my coding skills in action, and discover the solutions I've crafted.",
    name: "abhaypatel07",
    designation: "",
    company: "GitHub",
    link: "https://github.com/abhaypatel07",
    image: "https://avatars.githubusercontent.com/u/95695394?v=4",
  },
  {
    testimonial:
      "Click the link below to view my profile and explore my solutions to various coding problems.",
    name: "abhaypatel1607",
    designation: "",
    company: "HackerRank",
    link: "https://www.hackerrank.com/dashboard",
    image: "https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png",
  },
];

const projects = [
  {
    name: "Ecommerce Website",
    description:
      "Built a complete E-commerce website. RESTful API with Express.js, MongoDB integration for product handling. Dynamic React frontend, secure payment, and responsive design. Collaborative, version control, and scalable approach for successful E-commerce solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      {
        name: "Braintree-Payment",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhaypatel07/ecommerce-web-app",
  },
  {
    name: "Social Media Clone",
    description:
      "Developed a responsive social media frontend using React and SCSS, ensuring a modern and visually appealing interface. Implemented interactive components for seamless user experiences, fostering content sharing and engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhaypatel07/Social-media-frontend",
  },
  {
    name: "Notes App (MERN)",
    description:
      "Proficient in MERN stack for creating Notes Apps. Strong backend with MongoDB and Mongoose for efficient note management. User-friendly React front-end for easy note creation and editing. Implements Express.js for smooth server communication and user authentication. Delivers reliable and scalable MERN-based Notes Apps.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "fetch api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhaypatel07/i-notebook-mern",
  },
];

export { services, technologies, experiences, testimonials, projects };
