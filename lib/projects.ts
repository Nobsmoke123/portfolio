export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  bannerImage: string
  gallery: string[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
  category: string
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and real-time inventory management.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring advanced product filtering, real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. The platform includes features like wishlist management, order tracking, and responsive design optimized for all devices.",
    image: "/modern-ecommerce-interface.png",
    bannerImage: "/ecommerce-platform-banner-with-shopping-interface.jpg",
    gallery: ["/ecommerce-product-listing.png", "/ecommerce-shopping-cart-interface.jpg", "/ecommerce-admin-dashboard.png"],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    year: "2024",
    category: "Web Application",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    longDescription:
      "A powerful task management application designed for teams and individuals. Features include real-time collaboration, drag-and-drop task organization, time tracking, project templates, and comprehensive reporting. Built with modern web technologies to ensure fast performance and seamless user experience across all devices.",
    image: "/project2.png",
    bannerImage: "/task-management-app-banner-with-team-collaboration.jpg",
    gallery: ["/kanban-board-with-tasks-and-columns.jpg", "/task-management-calendar-view.jpg", "/team-collaboration-dashboard.png"],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/example/tasks",
    year: "2023",
    category: "Productivity",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather application with detailed forecasts and interactive maps.",
    longDescription:
      "An elegant weather dashboard that provides comprehensive weather information including current conditions, 7-day forecasts, hourly predictions, and interactive weather maps. Features location-based weather detection, favorite locations management, and beautiful data visualizations with charts and graphs.",
    image: "/weather-dashboard-with-forecast-and-maps.jpg",
    bannerImage: "/weather-app-banner-with-beautiful-interface.jpg",
    gallery: ["/weather-forecast-interface-with-charts.jpg", "/interactive-weather-map.jpg", "/weather-dashboard-mobile-view.jpg"],
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox", "SCSS"],
    liveUrl: "https://example-weather.com",
    year: "2023",
    category: "Web Application",
  },
  {
    id: "portfolio-website",
    title: "Creative Portfolio",
    description: "Minimalist portfolio website with smooth animations and modern design.",
    longDescription:
      "A stunning portfolio website showcasing creative work with smooth animations, modern design principles, and optimized performance. Features include project galleries, contact forms, blog integration, and responsive design. Built with attention to detail and user experience, ensuring fast loading times and accessibility compliance.",
    image: "/minimalist-portfolio-website.png",
    bannerImage: "/creative-portfolio-banner-with-modern-design.jpg",
    gallery: ["/portfolio-project-gallery.png", "/portfolio-about-page-design.jpg", "/portfolio-contact-form.png"],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentful"],
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/example/portfolio",
    year: "2024",
    category: "Portfolio",
  },
]
