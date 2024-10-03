import FirstProjectImg from './assets/first.png'
import SecondProjectImg from './assets/second.png'
import ThirdProjectImg from './assets/third.png'
import serviceIconCube from './assets/IconWrapper.png'
import serviceIconSearch from './assets/IconWrapper2.png'

export const homePageSecondSectionText = `I'm a dynamic UI/UX designer / Product Designer
 turning visionary concepts into seamless and impactful digital experiences.`
export const homePageSecondSectionSecondText = `I am committed to delivering cutting-edge solutions that redefine the digital landscape.`
 export const recentProjectsTitleFirstPart = "Recent"
export const recentProjectsTitleSecondPart = "Projects"
export const bannerFooterFirstText = "Connect With Me for Creative Collaboration!"
export const bannerFooterSecondText = "Reach out and let's bring your ideas to life! I'm here to collaborate and create digital magic."
export const whatIcanDoTitle = "What i can do";
export const aboutTitle = "behind the creativity";
export const aboutDescription = "I am a passionate and versatile UI/UX designer and product designer, weaving a tapestry of digital experiences that inspire and engage."
export const recentProjects = [
    {
      imgSrc: FirstProjectImg,
      imgAlt: "Project 1 Screenshot",
      cardTitle: "Project Management App",
      technologies: ["React", "Tailwind CSS", "Supabase"],
      firstBgColor: "bg-red-600", // Color 1
      secondBgColor: "bg-red", // Color 2
      buttonBgColor: "bg-red-400", //button bg
      challenge: "Managing complex state with dynamic forms and real-time updates.",
      approach: "Used React hooks with Supabase for real-time data handling, optimizing the user interface with Tailwind for a responsive design."
    },
    {
      imgSrc: SecondProjectImg,
      imgAlt: "Project 2 Screenshot",
      cardTitle: "E-commerce Website",
      technologies: ["Next.js", "Node.js", "Stripe"],
      firstBgColor: "bg-blue-600", 
      secondBgColor: "bg-blue-400", 
      buttonBgColor: "bg-blue-200", 
      challenge: "Integrating multiple payment gateways and ensuring a smooth checkout process.",
      approach: "Built the checkout flow using Stripe and handled secure payments with server-side Node.js integration."
    },
    {
      imgSrc: ThirdProjectImg,
      imgAlt: "Project 3 Screenshot",
      cardTitle: "Portfolio Website",
      technologies: ["Vite", "Tailwind", "Netlify"],
      firstBgColor: "bg-green-600",
      secondBgColor: "bg-green-400",
      buttonBgColor: "bg-green-200",
      challenge: "Ensuring fast load times and optimizing images for different screen sizes.",
      approach: "Utilized Vite for build optimization and lazy loading of assets, deployed on Netlify for continuous integration and delivery."
    }
  ];
  
export const providedServices = [
  {
    "title": "Product Design",
    "description": "I design great digital experiences, creating mobile apps, websites, desktop platforms, and dashboards with a creative, user-centered approach. My designs deliver user-friendly, visually appealing interfaces that align with business goals for both B2B and B2C markets.",
    "image": serviceIconCube
  },
  {
    "title": "UX Design",
    "description": "I specialize in UX Design, utilizing research-driven methodologies, testing, and analysis to craft seamless and intuitive experiences across products. By focusing on user needs and business objectives, I deliver engaging, user-friendly interfaces that drive success.",
    "image": serviceIconSearch
  }
];