import {
  dracula,
  castle,
  bat,
  ghost,
  javascript,
  php,
  html,
  css,
  reactjs,
  postman,
  tailwind,
  vitejs,
  xampp,
  git,
  figma,
  bootstrap,
  meta,
  starbucks,
  tesla,
  shopify,
  eternal,
  stateofai,
  tripguide,
  threejs,
} from "../assets"

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
]

const services = [
  {
    title: "Web Developer",
    icon: dracula,
  },
  {
    title: "UI / UX Designer",
    icon: ghost,
  },
  {
    title: "Prompt Engineering",
    icon: castle,
  },
  {
    title: "Content Creator / SEO",
    icon: bat,
  },
]

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
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vite JS",
    icon: vitejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Postman",
    icon: postman,
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
    name: "XAAMP",
    icon: xampp,
  },
]

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "Transylvania WebCrafters turned my outdated website into a digital masterpiece! They worked faster than Dracula at a blood bank. Impressed and Fangful!",
    name: "Alexandra Dragomir",
    designation: "Marketing Manager",
    company: "Hauntify Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I was lost in the labyrinth of web development until Transylvania WebCrafters came to my rescue. Their approach is as precise as a vampire's bite, but much friendlier!",
    name: "Vlad Dumitrescu",
    designation: "Content Creator",
    company: "GhostWrite Media",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Transylvania WebCrafters didn't just create a website; they summoned a digital specter that haunts the competition! Web design has never been so spooktacular!",
    name: "Larisa Bălan",
    designation: "Financial Analyst",
    company: "BatFinance Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Cryptocurrency Exchange",
    description:
      "A cryptocurrency exchange that allows users to buy and sell digital currencies using real-time market data. Features a responsive UI, live charts, and a simple checkout process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eternal,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI software development company website",
    description:
      "A website for an AI software development company that showcases their services, projects, and team members. Built with React, Bootstrap, and deployed on Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: stateofai,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
