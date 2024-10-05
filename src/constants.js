import FirstProjectImg from './assets/first.png'
import SecondProjectImg from './assets/second.png'
import ThirdProjectImg from './assets/third.png'
import serviceIconCube from './assets/IconWrapper.png'
import serviceIconSearch from './assets/IconWrapper2.png'
import firstContactIcon from './assets/contactFirst.svg'
import secondContactIcon from './assets/contactSecond.svg'
import thirdContactIcon from './assets/contactThird.svg'

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
export const secondSectionAbout = "I am a dynamic UI/UX and product designer, passionate about transforming visionary concepts into engaging digital experiences. With a strong foundation in design principles and user-centered methodologies, my mission is to craft solutions that not only meet but exceed expectations. I thrive in collaborative environments where creativity and technical excellence come together seamlessly."
export const hossamSignature = "Hossam Saieed — UI UX designer / Product Designer"
export const statisticsTitle = "Tech at a Glance"
export const statisticsCaption = "Testament to my commitment to excellence, innovation, and impactful solutions."
export const statistics = [
  {
    title: "20+ Projects",
    description: "Successfully delivered over 20 diverse projects, showcasing remarkable adaptability and expertise across various domains."
  },
  {
    title: "98% Satisfaction",
    description: "Achieved a remarkable 98% client satisfaction rate, demonstrating a commitment to meeting and exceeding client expectations."
  },
  {
    title: "2+ Innovations",
    description: "Implemented two innovative solutions, showcasing a proactive approach to problem-solving and staying ahead of industry standards."
  }
];

export const valuedClients = "My Valued Clients"
// services section
export const serviceTitle = "My tech Services"
export const serviceDescription = "Innovating Beyond Limits to Craft Exceptional Digital Experiences"
export const secondSectionTitle = "My services"
export const thirdSectionTitle = "Strategic Ingenuity"
export const thirdSectionFirstParagraph = "In the dynamic world of digital innovation, I specialize in harnessing the power of strategic thinking as a UI/UX and product designer. My expertise lies in crafting user-centered solutions that not only align seamlessly with your unique vision but also exceed expectations."
export const thirdSectionSecondParagraph = "Whether it's the intricacies of intuitive user interfaces, the seamless experiences demanded by mobile applications, or the thoughtful design of compelling products, each project reflects my commitment to strategic design excellence. I don’t just design; I embark on a collaborative journey where every decision is intentional, and every solution is meticulously tailored to elevate user engagement and drive success."
//home section
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
// included in home & services
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

//contactMe section
export const contactMeTitle = "Let's Connect and innovate";
export const contactMeDescription = "Feel free to reach out and commence the journey of collaboration."
export const ContactMeSecondSectionTitle = "Reach Out & Connect";
export const contactMeWays = [
  {
    "title": "Drop a Message",
    "description": "For inquiries, collaborations, or just to say hello, feel free to send an email.",
    "image": firstContactIcon
  },
  {
    "title": "Let's Chat",
    "description": "Reach out via phone, and let's discuss how we can turn your ideas into reality.",
    "image": secondContactIcon
  },
  {
    "title": "Schedule a Call",
    "description": "For a more in-depth conversation or if you have a specific project in mind.",
    "image": thirdContactIcon
  }
];
export const formTitle = "Let’s bring your vision to life with actionable results";
export const contactFormSectionTitle = "Let's Bring Your Project to Life";