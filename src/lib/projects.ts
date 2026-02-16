export type Project = {
  slug: string;
  title: string;
  summary: string;
  description1: string;
  features?: string[];
  technologies?: string[];
  challenges?: string[];
  description2: string;
  tags: string[];
  images: string[];
  year: string;
  links?: string[];
};

export const projects: Project[] = [
  {
    slug: "mhwildsinfo",
    title: "MHWildsInfo (WIP)",
    summary: "An information website for Monster Hunter Wilds.",
    description1:
      "One of my most recent projects, I worked upon, using my experience from my previous projects and learning to use a public API. This project is a website that displays information about Monster Hunter Wilds. It is a work in progress and will be updated as I learn more.",
    features: [
      "Shows information about weapons and armors in the game.",
      "Shows all of the items and consumables in the game.",
      "Shows all of the monsters in the game.",
      "Shows all of the decorations in the game."
    ],
    description2:
      "This project was a great learning experience for me as I learned to use a public API. I also learned how to use the Shadcn UI library which is a great library for creating websites. I also learned how to use the TailwindCSS library which is a great library for styling websites.",
    tags: ["Next.js", "TypeScript", "Shadcn ui", "Tailwind CSS", "Vercel"],
    images: ["/images/projects/mhwildsinfo/01.png"],
    year: "2025",
    links: ["https://github.com/SV3N77/mhwildsinfo"]
  },
  {
    slug: "pitch-d",
    title: "Pitch'd",
    summary: "A jobs platform to help you find jobs easily and quickly.",
    description1:
      "At Pitch'd, I worked as a frontend developer intern, building a jobs platform to help users find jobs easily. I was responsible for developing the user interface, ensuring a seamless user experience, and implementing features such as search, filters, and sorting.I developed key pages, including the homepage, jobs page, and application, and onboarding, with a focus on creating a seamless user experience and ensuring accessibility. Using the React framework Next.js, I built server-side rendered pages to improve performance and SEO. For styling, I implemented Tailwind CSS, which allowed for rapid development of responsive designs that provided a consistent look and feel across all devices. I also integrated AWS services, deploying static assets to S3 and utilizing CloudFront as a content delivery network (CDN) to enhance performance and reduce latency. Additionally, I applied TypeScript to improve code quality and maintainability, leveraging strong typing to minimize runtime errors.",
    features: [
      "Search and filter jobs",
      "Responsive design with Tailwind CSS",
      "Server-side rendering with Next.js",
      "AWS S3 for static asset hosting",
      "CloudFront for content delivery network (CDN)",
      "TypeScript for code quality and maintainability"
    ],
    technologies: [
      "React framework Next.js for server-side rendering",
      "Tailwind CSS for rapid and responsive design",
      "Tailwind CSS",
      "AWS S3 for static asset hosting",
      "CloudFront for content delivery network (CDN)",
      "TypeScript for code quality and maintainability"
    ],
    challenges: [
      "Developing a user-friendly interface for the homepage, jobs page, and application, and onboarding.",
      "Accessibility",
      "Ensuring a seamless user experience and accessibility.",
      "Implementing search, filters, and sorting features.",
      "Integrating AWS services for static asset hosting and content delivery network (CDN).",
      "Applying TypeScript for code quality and maintainability."
    ],
    description2:
      "Overall, my experience at Pitch'd was a valuable learning opportunity, allowing me to develop my skills in frontend development, web design, and AWS services. I am grateful for the opportunity to work with a talented team and contribute to the growth of the company.",
    tags: ["Next.js", "TypeScript", "AWS S3", "Tailwind CSS"],
    images: [
      "/images/projects/pitch_d/01.png",
      "/images/projects/pitch_d/02.png",
      "/images/projects/pitch_d/03.png"
    ],
    year: "2024",
    links: []
  },
  {
    slug: "portfoliov2",
    title: "PortfolioV2",
    summary: "A portfolio website that showcases my work and skills.",
    description1:
      "This portfolio is an old version of my previous portfolio using a more modern framework. I wanted to update my portfolio with an updated version to showcase my skill in front-end web development. It was an amazing experience using content layer to input data to my projects. To add a new project to this would be simple to do just make a new markdown file. This is a major upgrade from my previous project which used HTML and CSS where I just added html each time I needed to add a new project. I plan to update this portfolio for any future projects I might pursue.",
    features: [],
    description2: "",
    tags: ["Next.js", "TypeScript", "Content layer", "Tailwind CSS", "Vercel"],
    images: [
      "/images/projects/portfiolio-v2/01.png",
      "/images/projects/portfiolio-v2/02.png",
      "/images/projects/portfiolio-v2/03.png"
    ],
    year: "2022",
    links: ["https://github.com/SV3N77/portfolio-v2"]
  },
  {
    slug: "anime-db",
    title: "Anime DB",
    summary:
      "An anime database where you can search for anime and get details with related franchises.",
    description1:
      "Built a comprehensive e-commerce platform from the ground up using Next.js and a headless CMS. The application features a responsive product catalog with advanced filtering and search, a real-time shopping cart with persistent state, and seamless checkout powered by Stripe. The admin dashboard allows for easy product management, inventory tracking, and order fulfillment. Performance was a key focus, with server-side rendering and image optimization delivering sub-second load times.",
    features: [
      "Search for anime titles",
      "Shows most trending anime",
      "Click into anime to show more details",
      "Shows related franchises of anime/manga",
      "hows all characters in anime/manga"
    ],
    description2:
      "This project was a great learning experience for me as I learned to use a public API. I also learned how to use the Shadcn UI library which is a great library for creating websites. I also learned how to use the TailwindCSS library which is a great library for styling websites.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    images: [
      "/images/projects/anime-db/01.png",
      "/images/projects/anime-db/02.png"
    ],
    year: "2022",
    links: ["https://github.com/SV3N77/animedatabase"]
  },
  {
    slug: "elden-ring-calculator",
    title: "Elden Ring Attribute Calculator",
    summary:
      "An Elden Ring attribute calculator that calculates your starting attributes.",
    description1:
      "Elden Ring attribute calculator was my first introduction to using typescript with NextJS and TailwindCSS.",
    features: [
      "Change classes",
      "Addition/Subtraction of attributes",
      "Shows how many runes are needed to level"
    ],
    description2:
      "In this project I learnt to use typescript in conjunction with NextJS. In this project I used a json file to store each class and its starting values.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: [
      "/images/projects/elden-ring-attribute-calc/01.png",
      "/images/projects/elden-ring-attribute-calc/02.png",
      "/images/projects/elden-ring-attribute-calc/03.png",
      "/images/projects/elden-ring-attribute-calc/04.png"
    ],
    year: "2022",
    links: ["https://github.com/SV3N77/attributecalc"]
  },
  {
    slug: "simple-blog-site",
    title: "Simple Blog Site",
    summary:
      "A simple blog app where you can add, edit and delete blog posts with images.",
    description1:
      "This simple blog site was my introduction to learning and utilising more modern web development frameworks and techniques. It was my first time using NextJS front-end and firebase backend.",
    features: [
      "Add Posts with images",
      "Delete Posts",
      "Edit Posts",
      "Refetch updated Posts"
    ],
    description2:
      "This blog site was an amazing project for me to learn to develop using a more modern web development framework. I learnt how to file upload to a firebase database and fetch the data to display it on the home page. I used react-query to fetch the data from the firebase database since there is the ability to invalidate data and refectch every couple of seconds.",
    tags: ["Next.js", "React Query", "Firebase", "Tailwind CSS", "Vercel"],
    images: [
      "/images/projects/simple-blog-site/01.png",
      "/images/projects/simple-blog-site/02.png",
      "/images/projects/simple-blog-site/03.png"
    ],
    year: "2022",
    links: ["https://github.com/SV3N77/simpleblogsite"]
  },
  {
    slug: "todo-app",
    title: "Todo App",
    summary: "A simple todo app where you can add, edit and delete todos.",
    description1:
      "Todo app was my first leap into learning and utilising more modern libraries for my web development journey.",
    features: [
      "Add Todos",
      "Delete Todos",
      "Edit Todos",
      "Refetch updated Todos"
    ],
    description2:
      "This project was a great learning experience for me as I learned to use a public API. I also learned how to use the Shadcn UI library which is a great library for creating websites. I also learned how to use the TailwindCSS library which is a great library for styling websites.",
    tags: ["React", "Express", "React Query", "Tailwind CSS", "Headless UI"],
    images: [
      "/images/projects/todo-app/01.png",
      "/images/projects/todo-app/02.png",
      "/images/projects/todo-app/03.png"
    ],
    year: "2022",
    links: ["https://github.com/SV3N77/todolist"]
  },
  {
    slug: "umbrellurai",
    title: "Umbrellurai",
    summary: "A simple todo app where you can add, edit and delete todos.",
    description1:
      "Umbrellurai is a side-scrolling Metroidvania style game where the player controls an umbrella-wielding samurai. It was created for 'Game Studio 1' subject at UTS with a small team of 4.",
    features: [
      "Setting up sprints, meetings and proofing the game design/code.",
      "Helped with the design of the game, such as the levels, art and mechanics.",
      "I made/designed all of the game art and animated each of the characters."
    ],
    description2:
      "Umbrellurai was an amazing project which further extended my game development and project management knowledge. My role in this project was the game design lead. In this project we had developed a great pace utilising the Agile methodology during development. I made and designed all of the game art using Aesprite which is a tool for making pixel art and animations. In addition to the techinical knowledge, Umbrellurai had helped me develop my interpersonal skills with communicating with my team. I was proud of this project and what we had achieved in making the game.",
    tags: ["Unity", "C#", "Aesprite", "Pixel Art"],
    images: [
      "/images/projects/umbrellurai/01.png",
      "/images/projects/umbrellurai/02.png",
      "/images/projects/umbrellurai/03.png",
      "/images/projects/umbrellurai/04.png",
      "/images/projects/umbrellurai/05.png"
    ],
    year: "2021",
    links: []
  }
];
