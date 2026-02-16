export type Project = {
  slug: string;
  title: string;
  summary: string;
  description1: string;
  features?: string[];
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
      "Shows infomation about weapons and armors in the game.",
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
    slug: "anime-db",
    title: "Anime DB",
    summary:
      "An anime database where you can search for anime and get details with related franchises.",
    description1:
      "Built a comprehensive e-commerce platform from the ground up using Next.js and a headless CMS. The application features a responsive product catalog with advanced filtering and search, a real-time shopping cart with persistent state, and seamless checkout powered by Stripe. The admin dashboard allows for easy product management, inventory tracking, and order fulfillment. Performance was a key focus, with server-side rendering and image optimization delivering sub-second load times.",
    features: [],
    description2:
      "This project was a great learning experience for me as I learned to use a public API. I also learned how to use the Shadcn UI library which is a great library for creating websites. I also learned how to use the TailwindCSS library which is a great library for styling websites.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    images: [
      "/images/projects/anime-db/01.png",
      "/images/projects/anime-db/02.png"
    ],
    year: "2025",
    links: ["https://github.com"]
  }
];
