import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import aiDevBanner from "./assets/images/ai-landing-banner.jpg";
import iotDevBanner from "./assets/images/iot-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import aiLandingAbout from "./assets/images/ai-landing-about.png";
import iotLandingAbout from "./assets/images/iot-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpeg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

// ai services icons
import { ReactComponent as aiIcon1 } from "./assets/svgs/AI Chatbots.svg";
import { ReactComponent as aiIcon2 } from "./assets/svgs/AI Voice Bots.svg";
import { ReactComponent as aiIcon3 } from "./assets/svgs/Machine Learning Models.svg";
import { ReactComponent as aiIcon4 } from "./assets/svgs/Natural Language Processing (NLP).svg";
import { ReactComponent as aiIcon5 } from "./assets/svgs/AI-Powered Analytics.svg";
import { ReactComponent as aiIcon6 } from "./assets/svgs/Automation Solutions.svg";

// app services icons
import { ReactComponent as appIcon1 } from "./assets/svgs/Native App Development.svg";
import { ReactComponent as appIcon2 } from "./assets/svgs/Cross-Platform Apps.svg";
import { ReactComponent as appIcon3 } from "./assets/svgs/App Maintenance and Support.svg";
import { ReactComponent as appIcon4 } from "./assets/svgs/App Monetization Strategies.svg";

// web services icons
import { ReactComponent as webIcon1 } from "./assets/svgs/E-commerce Development.svg";
import { ReactComponent as webIcon2 } from "./assets/svgs/Responsive Web Design.svg";
import { ReactComponent as webIcon3 } from "./assets/svgs/SEO & Performance Optimization.svg";
import { ReactComponent as webIcon4 } from "./assets/svgs/Content Management Systems.svg";

// iot services icons
import { ReactComponent as iotIcon1 } from "./assets/svgs/Smart Device Integration.svg";
import { ReactComponent as iotIcon2 } from "./assets/svgs/Real-Time Data Analytics.svg";
import { ReactComponent as iotIcon3 } from "./assets/svgs/Automation.svg";
import { ReactComponent as iotIcon4 } from "./assets/svgs/Secure IoT Solutions.svg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aiDevBanner,
  aiLandingAbout,
  iotDevBanner,
  iotLandingAbout,
};

// company details
export const companyDetails = {
  phone: "+00000000000",
  whatsapp: "+00000000000",
  email: "abc@xyz.com",
  address: "ABC Street, City, Country",
  twitter: "",
  linkedin: "",
  instagram: "",
  facebook: "",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Development",
    icon: webIcon1,
    description:
      "Build and scale your online store with custom features that enhance the shopping experience for your customers.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    icon: webIcon2,
    description:
      "We create mobile-optimized websites that look great on any device, ensuring a seamless user experience.",
  },
  {
    id: 3,
    title: "SEO & Performance Optimization",
    icon: webIcon3,
    description:
      "Your website will be built with best practices for SEO, helping you rank higher in search engines, while ensuring speed and functionality.",
  },
  {
    id: 4,
    title: "Content Management Systems",
    icon: webIcon4,
    description:
      "Manage your website content easily with platforms like WordPress or custom CMS solutions.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native App Development",
    icon: appIcon1,
    description:
      "We specialize in creating native mobile apps for both iOS and Android, ensuring an optimal experience for each platform.",
  },
  {
    id: 2,
    title: "Cross-Platform Apps",
    icon: appIcon2,
    description:
      "Our cross-platform apps enable you to reach a larger audience with minimal development costs, making it easy to deploy on both iOS and Android.",
  },
  {
    id: 3,
    title: "App Maintenance and Support",
    icon: appIcon3,
    description:
      "After launch, we provide continuous support, updates, and improvements to keep your app running smoothly and ensure it stays relevant.",
  },
  {
    id: 4,
    title: "App Monetization Strategies",
    icon: appIcon4,
    description:
      "We can help design your app with revenue generating features like in-app purchases, subscriptions, or ads.",
  },
];

// ai services
export const aiServices = [
  {
    id: 1,
    title: "AI Chatbots",
    icon: aiIcon1,
    description:
      "Enhance customer interactions with AI-driven chatbots. Offer real-time support, answer queries, and assist decision-making—all while continuously learning and improving from every interaction.",
  },
  {
    id: 2,
    title: "AI Voice Bots",
    icon: aiIcon2,
    description:
      "Revolutionize customer service with voice bots that deliver seamless voice-based interactions, personalized experiences, and efficient query management.",
  },
  {
    id: 3,
    title: "Machine Learning Models",
    icon: aiIcon3,
    description:
      "Leverage predictive models that identify trends, optimize processes, and deliver real-time insights, empowering you to make data-driven decisions.",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    icon: aiIcon4,
    description:
      "Create chatbots and virtual assistants that understand and respond like humans, taking customer engagement and support to the next level.",
  },
  {
    id: 5,
    title: "AI-Powered Analytics",
    icon: aiIcon5,
    description:
      "Turn data into a competitive advantage with AI-powered analytics that identify patterns and deliver insights to keep you ahead of the curve.",
  },
  {
    id: 6,
    title: "Automation Solutions",
    icon: aiIcon6,
    description:
      "Streamline operations by automating repetitive tasks, saving time, reducing human error, and improving operational efficiency.",
  },
];

// iot services
export const iotServices = [
  {
    id: 1,
    title: "Smart Home Automation",
    icon: iotIcon1,
    description:
      "Connect sensors, devices, and machines to create intelligent systems that enhance decision-making and efficiency.",
  },
  {
    id: 2,
    title: "Real-Time Data Analytics",
    icon: iotIcon2,
    description:
      "Analyze data from connected devices instantly to gain actionable insights and drive smarter business strategies.",
  },
  {
    id: 3,
    title: "Automation",
    icon: iotIcon3,
    description:
      "Automate tasks, reduce costs, and boost productivity with IoT powered solutions tailored to your operations.",
  },
  {
    id: 4,
    title: "Secure IoT Solutions",
    icon: iotIcon4,
    description:
      "Protect your IoT systems with robust security protocols, safeguarding your data and devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "AI Development",
    desc: "From predictive analytics to natural language processing, our AI solutions are designed to bring value to your organization.",
    detailContent:
      "Artificial Intelligence (AI) is transforming industries by automating processes, making smarter decisions, and enhancing customer experiences. At AI Company, we help businesses leverage AI to boost productivity, drive innovation, and provide data-driven insights. From predictive analytics to natural language processing, our AI solutions are designed to bring value to your organization.",
    whatWeOffer: [
      {
        title: "AI Chatbots",
        desc: "Enhance customer engagement with AI-driven chatbots that provide real-time support, answer queries, and assist in decision-making, all while learning from interactions to continuously improve.",
      },
      {
        title: "AI Voice Bots",
        desc: "Revolutionize your customer service with AI voice bots that can handle voice-based interactions, deliver personalized experiences, and efficiently manage customer queries and requests.",
      },
      {
        title: "Machine Learning Models",
        desc: "We create machine learning models that can predict trends, optimize processes, and provide real-time insights to improve decision-making.",
      },
      {
        title: "Natural Language Processing",
        desc: "Build AI chatbots and assistants that understand and respond to user queries in a human-like manner, improving customer support and engagement.",
      },
      {
        title: "AI-Powered Analytics",
        desc: "Use AI to analyze data, recognize patterns, and create actionable insights that help your business stay ahead of the competition.",
      },
      {
        title: "Automation Solutions",
        desc: "Automate repetitive tasks and processes, saving time and reducing human error, leading to greater operational efficiency.",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Our apps drive user engagement, improve operational efficiency, and align with your business objectives.",
    detailContent:
      "We understand that a mobile app is a powerful way to engage with your customers. Whether you're launching a new product, enhancing your services, or creating a business tool, our app development team crafts mobile apps that are robust, reliable, and user-friendly. Our apps drive user engagement, improve operational efficiency, and align with your business objectives.",
    whatWeOffer: [
      {
        title: "Native App Development",
        desc: "We specialize in creating native mobile apps for both iOS and Android, ensuring an optimal experience for each platform.",
      },
      {
        title: "Cross-Platform Apps",
        desc: "Our cross-platform apps enable you to reach a larger audience with minimal development costs, making it easy to deploy on both iOS and Android.",
      },
      {
        title: "App Maintenance and Support",
        desc: "After launch, we provide continuous support, updates, and improvements to keep your app running smoothly and ensure it stays relevant.",
      },
      {
        title: "App Monetization Strategies",
        desc: "We can help design your app with revenue generating features like in-app purchases, subscriptions, or ads.",
      },
    ],
  },
  {
    id: 3,
    title: "Custom Software Development",
    desc: "Every business is unique, and so are its needs. With our custom software development services, we build solutions that align perfectly with your business processes, challenges, and goals.",
    detailContent:
      "Every business is unique, and so are its needs. With our custom software development services, we build solutions that align perfectly with your business processes, challenges, and goals. Whether you need an enterprise resource planning (ERP) system, customer relationship management (CRM) software, or any other bespoke software, we have you covered.",
    whatWeOffer: [
      {
        title: "ERP & CRM Solutions",
        desc: "We design and develop custom ERP and CRM systems that streamline operations, improve customer relationships, and drive growth.",
      },
      {
        title: "Business Automation",
        desc: "Automate your core business processes with custom software, reducing time and costs while improving accuracy",
      },
      {
        title: "Cloud Integration",
        desc: "We integrate custom software with cloud services for enhanced scalability, security, and flexibility",
      },
      {
        title: "Scalable Solutions",
        desc: "As your business grows, our software solutions will evolve with it, adapting to new challenges and expanding capabilities.",
      },
    ],
  },
  {
    id: 4,
    title: "Web Development",
    desc: "Our web development services are tailored to fit your specific business requirements, ensuring that your site is designed for growth, performance, and user engagement.",
    detailContent:
      "Your website is the digital face of your business. At AI Company, we specialize in building visually striking, responsive, and functional websites that not only capture attention but also drive conversions. Our web development services are tailored to fit your specific business requirements, ensuring that your site is designed for growth, performance, and user engagement.",
    whatWeOffer: [
      {
        title: "Responsive Web Design",
        desc: "We create mobile-optimized websites that look great on any device, ensuring a seamless user experience.",
      },
      {
        title: "E-commerce Development",
        desc: "Build and scale your online store with custom features that enhance the shopping experience for your customers.",
      },
      {
        title: "SEO & Performance Optimization",
        desc: "Your website will be built with best practices for SEO, helping you rank higher in search engines, while ensuring speed and functionality.",
      },
      {
        title: "Content Management Systems",
        desc: "Manage your website content easily with platforms like WordPress or custom CMS solutions.",
      },
    ],
  },

  {
    id: 5,
    title: "UI/UX",
    desc: "We help businesses improve usability and enhance customer satisfaction through superior design.",
    detailContent:
      "User experience (UX) and user interface (UI) design are crucial for the success of any digital product. At AI Company, we create intuitive, engaging, and aesthetically pleasing interfaces that make user interactions smooth and enjoyable. We help businesses improve usability and enhance customer satisfaction through superior design.",
    whatWeOffer: [
      {
        title: "User Research & Analysis",
        desc: "We conduct in-depth research to understand user needs, behaviors, and pain points, ensuring that our designs meet the target audience's expectations.",
      },
      {
        title: "Wireframing & Prototyping",
        desc: "We create wireframes and interactive prototypes to visualize and test design concepts before implementation.",
      },
      {
        title: "Responsive Design",
        desc: "We ensure that the design is optimized for all devices, providing a seamless experience for users across desktops, tablets, and smartphones.",
      },
      {
        title: "Usability Testing",
        desc: "We perform thorough testing to ensure that users can easily navigate and interact with the product, leading to higher engagement and satisfaction.",
      },
    ],
  },
  {
    id: 6,
    title: "Internet of Things (IoT) Development",
    desc: "IoT is transforming industries by creating smart, connected ecosystems. We develop IoT solutions that allow businesses to gather real-time data, automate tasks, and make data-driven decisions.",
    detailContent:
      "IoT is transforming industries by creating smart, connected ecosystems. We develop IoT solutions that allow businesses to gather real-time data, automate tasks, and make data-driven decisions. Whether it’s smart homes, industrial IoT, or healthcare, our IoT services empower businesses to harness the power of connected devices.",
    whatWeOffer: [
      {
        title: "Smart Device Integration",
        desc: "We connect sensors, devices, and machines to create intelligent systems that improve efficiency and decision-making.",
      },
      {
        title: "Real-Time Data Analytics",
        desc: "Capture and analyze data from connected devices in real-time, providing actionable insights for your business.",
      },
      {
        title: "Automation",
        desc: "Implement IoT solutions that automate tasks, reduce operational costs, and improve productivity.",
      },
      {
        title: "Secure IoT Solutions",
        desc: "We ensure that your IoT systems are secure, protecting your data and devices from potential threats.",
      },
    ],
  },
  {
    id: 7,
    title: "Blockchain Development",
    desc: "From decentralized apps (dApps) to smart contracts, we help you leverage blockchain technology for secure, scalable, and efficient solutions.",
    detailContent:
      "Blockchain is revolutionizing industries with its unmatched security, transparency, and efficiency. At AI Company, we offer comprehensive blockchain services to help businesses innovate and streamline operations. From decentralized apps (dApps) to smart contracts, we help you leverage blockchain technology for secure, scalable, and efficient solutions.",
    whatWeOffer: [
      {
        title: "Smart Contract Development",
        desc: "Automate and secure agreements with self executing contracts on the blockchain, ensuring transparency and reducing errors.",
      },
      {
        title: "Blockchain Consulting",
        desc: "Our experts guide you through the process of adopting blockchain, identifying the best solutions for your business.",
      },
      {
        title: "Tokenization",
        desc: "Convert physical or digital assets into blockchain-based tokens, allowing secure, fractional ownership.",
      },
      {
        title: "Blockchain Integration",
        desc: "Seamlessly integrate blockchain into your existing systems, improving security, data integrity, and transaction efficiency.",
      },
      {
        title: "Blockchain Security",
        desc: "We ensure that your blockchain solutions are secure, tamper-proof, and resilient to cyber threats.",
      },
    ],
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];

// featured
export const featuredContent = [
  {
    img: '',
    website: "INC91",
    headline:
      "AI Company : Revolutionizing IT and AI Developments",
    link: "",
  },
  {
    img: "",
    website: "Hindustan Bytes",
    headline:
      "AI Company : Transforming the IT Landscape with Cutting Edge AI Solutions",
    link: "",
  },
];

// ceo interviews
export const ceoInterviews = [
  {
    source: "Interview",
    headline:
      "An insightful conversation with our CEO",
    videoId: "b-L_V-z-FDs",
  },
  {
    source: "Interview",
    headline:
      "Our CEO shares key insights on business growth",
    videoId: "K7pZ0nibsUg",
  },
];
