import FirstProjectImg from './assets/first.png'
import SecondProjectImg from './assets/second.png'
import ThirdProjectImg from './assets/third.png'
import Collector from "./assets/CollectorProject.svg"
import serviceIconCube from './assets/IconWrapper.png'
import serviceIconSearch from './assets/IconWrapper2.png'
import firstContactIcon from './assets/contactFirst.svg'
import secondContactIcon from './assets/contactSecond.svg'
import thirdContactIcon from './assets/contactThird.svg'
import Searchicon from './assets/searchIcon.svg'
import TargetIcon from './assets/target.svg'
import MoreInfo from './assets/info.svg'
import Brush from './assets/brush.svg'
import bulb from './assets/bulb.svg'
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
export const lastPositionTitle = "Last Position";
export const lastPositionDescription = "I have contributed to multiple impactful projects, including revamping interfaces for PBPM and PSIM, enhancing usability and decision-making in critical situations. My work spans user-friendly automation tools, mobile apps for documenting street incidents, and B2B/B2C side projects like governorate and security apps. Through research, testing, and design improvements, I helped increase product sales and customer satisfaction while continuing to contribute even during my military service."
export const positionTitle = "Product Designer"
export const companyName = "@Penta-b"
export const positionDuration = "Dec  2021  -  Present"
export const positionDuties = "Products/ Projects"
export const positionDutiesExamples = ["PBPM web app", 'PSIM web app', "Collector app", "Alex app", "FGIC", "Olympic Dashboard", "TMG"];
export const valuedClients = "My Valued Clients"
// services section
export const serviceTitle = "My tech Services"
export const serviceDescription = "Innovating Beyond Limits to Craft Exceptional Digital Experiences"
export const secondSectionTitle = "My services"
export const thirdSectionTitle = "Strategic Ingenuity"
export const thirdSectionFirstParagraph = "In the dynamic world of digital innovation, I specialize in harnessing the power of strategic thinking as a UI/UX and product designer. My expertise lies in crafting user-centered solutions that not only align seamlessly with your unique vision but also exceed expectations."
export const thirdSectionSecondParagraph = "Whether it's the intricacies of intuitive user interfaces, the seamless experiences demanded by mobile applications, or the thoughtful design of compelling products, each project reflects my commitment to strategic design excellence. I don’t just design; I embark on a collaborative journey where every decision is intentional, and every solution is meticulously tailored to elevate user engagement and drive success."
//portfolio section 
export const portfolioTitle = "My Work Portfolio";
//home section
export const recentProjects = [
  {
    imgSrc: FirstProjectImg,
    imgAlt: "Project 1 Screenshot",
    cardTitle: "PBPM",
    projectPath: "pbpm",
    technologies: ["Web App", "bpm", "Revamping", "UIUX"],
    firstBgColor: "bg-[#0896D4]", // Color 1
    secondBgColor: "bg-[#56CCF2]", // Color 2
    buttonBgColor: "border-2 border-[#12120F80]",
    published: true,
    Challenge: "My goal was to redesign the BPM suite's core components—Project Management, Process Management, and Task Management—while focusing on improving the form designer, validation systems, and overall user experience. The solution needed to accommodate the needs of IT and business professionals while simplifying complex workflows for new users.",
    Approach: "My approach followed a structured process, starting with the Discover phase, where I conducted a UX audit focusing on the old platform components to identify key issues and problems that needed fixing. In the Define phase, I clarified project needs based on user feedback and platform constraints. During Ideation, I prioritized user experience and established design system guidelines for consistency. After testing solutions in the Test phase, I finalized and delivered user-centered designs that improved usability and reduced complexity.",
    aboutTheProjectDetails: {
      Timeline: "2 months",
      Industry: "Enterprise software and IT solutions",
      Platform: "Web App",
      MyRole: "UX Research & design"
    },
    secondSection: {
      "Project Objective": ["The objective of this project is to revamp the existing Business Process Management (BPM) platform through a comprehensive UX audit and redesign. The goal is to address critical usability issues, enhance user experience, and modernize the platform while maintaining business and technical alignment.", "Simplify complex workflows, improve the form designer, and reduce user errors through validation improvements.", "Establish a consistent design system that streamlines interface interactions and enhances platform scalability."],
      "Target Audience": [
        { "IT Professionals": "Individuals responsible for configuring, managing, and maintaining the platform, who need an efficient and flexible tool to streamline complex workflows." },
        { "Business Experts and Analysts": "Users involved in process management and optimization, who require a user-friendly interface to design, monitor, and improve business processes without technical complications." }
      ],

    },
    projectObjectiveDetails: [
      {
        icon: Searchicon,
        iconTitle: "7 Days",
        des: "Empathize / Discover",
        points: ["Understand", "Initial market Research", "Stakeholder Interview", "Proto Persona", "SE Interviews", "User Research ", "Audit"],
      }
      , {
        icon: TargetIcon,
        iconTitle: "3 Days",
        des: "Define",
        points: ["Personas", "Journey Map"],
      },
      , {
        icon: bulb,
        iconTitle: "5 Days",
        des: "Ideate",
        points: ["User stories", "User flows", "Card Sorting", "Information architecture"],
      },
      , {
        icon: Brush,
        iconTitle: "30 Days",
        des: "Design",
        points: ["Wireframes", "Visual design ", "Prototyping"],
      },
      , {
        icon: MoreInfo,
        iconTitle: "7 Days",
        des: "Test",
        points: ["Testing / analysis"],
      },
    ],
    stakeholderFindings: {
      targetAudience: "The design will cater specifically to IT and business experts, ensuring functionality aligns with their expectations and expertise.",
      oldDesignProblems: "We will conduct a thorough analysis of the existing design to identify pain points and implement a user-centered approach in the new design.",
      shippingGoal: "Shipping will be prioritized, focusing on delivering the core functionalities within the stipulated two weeks.",
      formDesignerDifficulty: "We'll simplify the form design process by integrating intuitive UI elements and minimizing complex validations, making it more user-friendly.",
      consistencyWithFGIC: "The new design will ensure consistency across the platform, adhering strictly to FGIC guidelines without adding unnecessary functions.",
      motivationForGeoWorkManagement: "The application will emphasize geo-work management, facilitating project management, process management, and task management flows."
    },
    technicalFindings: {
      userFriendliness: "A redesign will focus on making the interface intuitive, allowing users of varying technical backgrounds to navigate the platform effortlessly.",
      complexProcessFlow: "We'll simplify the process flow by clearly grouping items and streamlining navigation, making it more accessible and understandable.",
      interfaceImprovements: "The designer interface will be revamped to enhance usability, ensuring users can easily create and manage their designs.",
      configurationIssues: "We will review the configuration steps to eliminate conflicts, ensuring each step is clear and does not override others.",
      namingConventions: "The naming conventions will be revised to ensure clarity and distinction among similar items, preventing user errors and confusion.",
      userGuidance: "Incorporating tooltips and context-sensitive help will assist users in understanding how their inputs affect outcomes, minimizing mistakes.",
      groupingOfItems: "Similar items will be grouped logically to enhance organization and ease of use within the application.",
      flowImportance: "All priority flows (Project Management, Process Management, Task Management) will be treated with equal importance.",
      validationMessages: "We will implement robust validation messages to guide users in making correct entries, thus preventing server errors and bugs."
    }, additionalNotes: {
      biasOfEmployees: "Awareness of potential biases among employees will be considered in the design process, ensuring the new system is user-friendly for both new and existing users.",
      oldVersionFamiliarity: "Training and onboarding resources will be provided to help users transition smoothly from the old version to the new design."
    }, interviewDetails: {
      introduction: "In collaboration with the client and their team, I identified the key objectives of the project and defined the scope of work. This phase was essential in ensuring the solution directly addressed user pain points and supported them in completing their tasks effectively. It also provided clarity on several important questions, helping to align the project goals with user needs.",

      agenda: [
        { question: "Can you identify the key pain points you've encountered while using the PBPM admin platform? How do you envision addressing these issues?" },
        { question: "How do you anticipate that resolving these issues will positively impact your business operations or the overall functionality of the platform?" },
        { question: "Among the various user flows within the PBPM admin platform, which one do you consider to be the most critical in terms of usability and effectiveness?" },
        { question: "What specific outcomes or improvements are you expecting to see as a result of this revamping process?" },
        { question: "Are we aiming to revamp both the web and mobile versions of the platform, or are we focusing solely on the web interface?" },
        { question: "Would you be open to exploring new design components or features that deviate from the existing FGIC components if they enhance user experience and interface aesthetics?" },
        { question: "Could you elaborate on any additional functionalities or features you believe should be integrated into the revamped platform to better serve your needs?" },
        { question: "What is our anticipated timeline for completing this revamping process, and are there any key milestones or deadlines we should be aware of?" },
        { question: "Could you provide some insights into the primary motivations behind initiating this revamp? What specific challenges or opportunities are driving this decision?" },
        { question: "Who is the user?" },
        { question: "Next Action" },
      ],
    }
  },
  {
    imgSrc: SecondProjectImg,
    imgAlt: "Project 2 Screenshot",
    cardTitle: "Geo Spatial",
    projectPath: "geo-spatial",
    technologies: ["Landing page", "GIS", "UIUX"],
    firstBgColor: "bg-[#DDEA64]",
    secondBgColor: "bg-[#F9FFC2]",
    buttonBgColor: "border-2 border-[#12120F80]",
    published: true,
  },
  {
    imgSrc: ThirdProjectImg,
    imgAlt: "Project 3 Screenshot",
    cardTitle: "MMS",
    projectPath: "mms",
    technologies: ["Mobile app", "Desktop app", "Chatting", "UIUX"],
    firstBgColor: "bg-[#EB6409]",
    secondBgColor: "bg-[#FBA66C]",
    buttonBgColor: "border-2 border-[#12120F80]",
    published: false,
  },
  {
    imgSrc: Collector,
    imgAlt: "Collector Project",
    cardTitle: "Collector",
    projectPath: "collector",
    technologies: ["Mobile app", "Revamping", "UIUX"],
    firstBgColor: "bg-[#242424]",
    secondBgColor: "bg-[#C4C4C4]",
    buttonBgColor: "border-2 border-[#12120F80]",
    published: false,
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
    title: "Drop a Message",
    description: "For inquiries, collaborations, or just to say hello, feel free to send an email.",
    image: firstContactIcon,
    link: "mailto:webdesignhossam@gmail.com"
  },
  {
    title: "Let's Chat",
    description: "Reach out via phone, and let's discuss how we can turn your ideas into reality.",
    image: secondContactIcon,
    link: "tel:+201126260430"
  },
  {
    title: "Schedule a Call",
    description: "For a more in-depth conversation or if you have a specific project in mind.",
    image: thirdContactIcon,
    link: "https://calendar.google.com/calendar"
  }
];

export const formTitle = "Let’s bring your vision to life with actionable results";
export const contactFormSectionTitle = "Let's Bring Your Project to Life";
export const contactMeSlogan = "Transform your vision into a digital reality. It all starts with a simple message!"
export const mailSentMsg = "Your Message Has Been Sent"
export const mailMsgNotice = "You can expect a response within 24 hours. Stay tuned for some fantastic news!"
export const resendAMsg = "new Message"

//PBPM Project
export const PBPMTitle = "PBPM"
export const AboutProject = "About The Project"
