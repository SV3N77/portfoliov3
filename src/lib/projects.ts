export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  images: string[];
  year: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary:
      "A full-stack e-commerce application with product management, cart functionality, and payment integration.",
    description:
      "Built a comprehensive e-commerce platform from the ground up using Next.js and a headless CMS. The application features a responsive product catalog with advanced filtering and search, a real-time shopping cart with persistent state, and seamless checkout powered by Stripe. The admin dashboard allows for easy product management, inventory tracking, and order fulfillment. Performance was a key focus, with server-side rendering and image optimization delivering sub-second load times.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg"
    ],
    year: "2025",
    link: "https://github.com"
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    summary:
      "A collaborative task management tool with kanban boards, real-time updates, and team workspaces.",
    description:
      "Designed and developed a real-time task management application that supports team collaboration through shared workspaces. Features include drag-and-drop kanban boards, customizable task workflows, deadline tracking with notifications, and activity logs. The app uses WebSockets for instant updates across all connected clients, ensuring every team member sees changes as they happen. Built with a focus on accessibility and keyboard navigation.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    images: [
      "/images/projects/taskapp-1.jpg",
      "/images/projects/taskapp-2.jpg"
    ],
    year: "2025"
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A data-rich weather dashboard with forecasts, historical data, and interactive visualizations.",
    description:
      "Created an interactive weather dashboard that aggregates data from multiple meteorological APIs to provide accurate forecasts and historical weather trends. The app features dynamic data visualizations built with D3.js, including temperature graphs, precipitation maps, and wind pattern animations. Users can save favorite locations, set weather alerts, and compare conditions across different cities. The responsive design adapts beautifully from desktop to mobile.",
    tags: ["React", "D3.js", "REST APIs", "CSS Modules"],
    images: [
      "/images/projects/weather-1.jpg",
      "/images/projects/weather-2.jpg"
    ],
    year: "2024",
    link: "https://github.com"
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    summary:
      "A personal fitness tracking app with workout logging, progress charts, and goal setting.",
    description:
      "Developed a comprehensive fitness tracking application that helps users log workouts, track nutrition, and monitor progress over time. The app includes a library of exercises with form guides, customizable workout routines, and detailed analytics showing trends in strength, endurance, and body composition. Integration with wearable devices allows automatic data sync. The goal-setting feature uses historical data to suggest realistic targets and celebrate milestones.",
    tags: ["React Native", "Firebase", "Chart.js", "Node.js"],
    images: [
      "/images/projects/fitness-1.jpg",
      "/images/projects/fitness-2.jpg"
    ],
    year: "2024"
  }
];
