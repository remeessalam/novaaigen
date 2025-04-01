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
  phone: "+91-9353070218",
  whatsapp: "9353070218",
  email: "info@novaaigen.com",
  address:
    "Flat 404, 7 HLR residency, 4th Main, Begur road Hongasandra. Bangalore - 560068",
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
    question: "What services does NeoTranscendAI offer?",
    answer:
      "NeoTranscendAI specializes in AI development, web and app development, custom software, and digital transformation consulting.",
  },
  {
    id: 2,
    question: "How can AI benefit my business?",
    answer:
      "AI can help automate tasks, provide data-driven insights, enhance customer experiences, and optimize operations, leading to increased efficiency and profitability.",
  },
  {
    id: 3,
    question: "What industries does NeoTranscendAI work with?",
    answer:
      "We serve a wide range of industries, including finance, healthcare, retail, logistics, and more, offering tailored digital solutions to meet sector-specific challenges.",
  },
  {
    id: 4,
    question: "What makes NeoTranscendAI different from other tech companies?",
    answer:
      "Our collaborative approach, cutting-edge technology, and commitment to delivering measurable results set us apart. We tailor solutions to meet your unique business needs.",
  },
  {
    id: 5,
    question: "How can I get started with NeoTranscendAI?",
    answer:
      "Contact us through our website to schedule a consultation. Our team will work with you to understand your goals and propose a customized solution.",
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
    title: "Website Development: Building Websites That Make an Impact",
    desc: "Your website is often the first interaction customers have with your brand. It's vital that it not only looks great but functions smoothly. At NeoTranscendAI, we focus on creating responsive, user-friendly websites that represent your brand and engage your audience.",
    detailContent:
      "Your website is often the first interaction customers have with your brand. It's vital that it not only looks great but functions smoothly. At NeoTranscendAI, we focus on creating responsive, user-friendly websites that represent your brand and engage your audience.",
    whatWeOffer: [
      {
        title: "Tailored Web Design & Development",
        desc: "From corporate sites to e-commerce platforms, we build websites that are both functional and visually appealing.",
      },
      {
        title: "SEO Best Practices",
        desc: "We optimize your website to improve its visibility and drive organic traffic, ensuring that your customers can easily find you online.",
      },
      {
        title: "Easy-to-Use CMS",
        desc: "We provide you with an intuitive content management system, making it simple to update your website’s content whenever you need.",
      },
      {
        title: "E-Commerce Solutions",
        desc: "Launch an online store that is secure, easy to navigate, and optimized to convert visitors into customers.",
      },
    ],
  },
  {
    id: 2,
    title: "App Development: Turning Ideas Into Powerful Mobile Experiences",
    desc: "In a mobile-driven world, having a reliable, engaging app can set your business apart. Our team at NeoTranscendAI develops innovative, high-performing mobile applications that deliver a seamless user experience, whether you're targeting iOS or Android users.",
    detailContent:
      "In a mobile-driven world, having a reliable, engaging app can set your business apart. Our team at NeoTranscendAI develops innovative, high-performing mobile applications that deliver a seamless user experience, whether you're targeting iOS or Android users.",
    whatWeOffer: [
      {
        title: "Native & Cross-Platform Apps",
        desc: "We develop apps that function flawlessly across all major platforms, ensuring a great experience no matter the device.",
      },
      {
        title: "Enterprise-Level Apps",
        desc: "Tailor-made apps designed to optimize internal processes and enhance productivity within your business.",
      },
      {
        title: "App Integration",
        desc: "We integrate your app with existing business systems and third-party services to streamline operations.",
      },
      {
        title: "App Support & Updates",
        desc: "We don’t just launch apps; we offer continuous support and regular updates to keep your app performing at its best.",
      },
    ],
  },
  {
    id: 3,
    title:
      "AI Solutions: Unlocking New Possibilities with Artificial Intelligence",
    desc: "Artificial Intelligence is transforming industries worldwide, and NeoTranscendAI is at the forefront of this change. We specialize in developing AI-powered solutions that enhance decision-making, improve efficiencies, and open up new business opportunities.",
    detailContent:
      "Artificial Intelligence is transforming industries worldwide, and NeoTranscendAI is at the forefront of this change. We specialize in developing AI-powered solutions that enhance decision-making, improve efficiencies, and open up new business opportunities.",
    whatWeOffer: [
      {
        title: "AI System Integration",
        desc: "Bring AI capabilities into your existing infrastructure with smart automation and data-driven decision-making tools.",
      },
      {
        title: "Machine Learning",
        desc: "We build custom machine learning models that continuously improve over time, offering more accurate predictions and valuable insights.",
      },
      {
        title: "AI Consulting",
        desc: "Not sure where to start with AI? Our experts can guide you through the process of identifying the right AI strategy for your business.",
      },
    ],
  },
  {
    id: 4,
    title: "Chatbots: Revolutionizing Customer Interaction",
    desc: "Engage with your customers 24/7 using intelligent chatbots that provide quick, personalized responses. At NeoTranscendAI, we design chatbots that handle everything from simple queries to complex tasks, helping businesses improve customer satisfaction and streamline operations.",
    detailContent:
      "Engage with your customers 24/7 using intelligent chatbots that provide quick, personalized responses. At NeoTranscendAI, we design chatbots that handle everything from simple queries to complex tasks, helping businesses improve customer satisfaction and streamline operations.",
    whatWeOffer: [
      {
        title: "Around-the-Clock Support",
        desc: "Your chatbot can respond to customer inquiries at any time, ensuring that no question goes unanswered.",
      },
      {
        title: "Lead Generation",
        desc: "Chatbots can gather information and qualify leads before passing them on to your sales team, enhancing your lead generation process.",
      },
      {
        title: "Custom Solutions",
        desc: "We design chatbots that match your brand's tone and voice, ensuring a consistent user experience.",
      },
      {
        title: "Multilingual Capabilities",
        desc: "Reach a wider audience with chatbots that can converse in multiple languages, providing seamless support across borders.",
      },
    ],
  },
  {
    id: 5,
    title: "AI Calling: Smarter, More Efficient Communication",
    desc: "AI-powered calling systems are revolutionizing the way businesses handle customer service. Our AI calling solutions can manage customer inquiries, make outbound calls, and streamline processes, all with minimal human involvement.",
    detailContent:
      "AI-powered calling systems are revolutionizing the way businesses handle customer service. Our AI calling solutions can manage customer inquiries, make outbound calls, and streamline processes, all with minimal human involvement.",
    whatWeOffer: [
      {
        title: "Automated Customer Service",
        desc: "AI calling systems can handle routine calls, freeing up your team to focus on more complex issues.",
      },
      {
        title: "Lead Qualification",
        desc: "AI can engage leads, qualify them, and schedule follow-up calls, helping to streamline your sales process.",
      },
      {
        title: "Personalized Interaction",
        desc: "AI-powered calls can be customized to deliver a personal touch, creating an experience that feels tailored to each customer.",
      },
      {
        title: "CRM Integration",
        desc: "Our AI calling solutions integrate seamlessly with your CRM, ensuring all customer interactions are tracked and followed up on efficiently.",
      },
    ],
  },
  {
    id: 6,
    title:
      "Natural Language Processing (NLP): Understanding and Analyzing Language",
    desc: "At NeoTranscendAI, we use Natural Language Processing (NLP) to help businesses harness the power of language. NLP helps automate processes, improve customer engagement, and gain valuable insights from unstructured text data.",
    detailContent:
      "At NeoTranscendAI, we use Natural Language Processing (NLP) to help businesses harness the power of language. NLP helps automate processes, improve customer engagement, and gain valuable insights from unstructured text data.",
    whatWeOffer: [
      {
        title: "Sentiment Analysis",
        desc: "Analyze customer feedback, reviews, and social media content to gauge public sentiment and improve your offerings.",
      },
      {
        title: "Text Classification",
        desc: "Automatically sort and categorize large volumes of text data to streamline operations and improve information management.",
      },
      {
        title: "Voice-Activated Solutions",
        desc: "Combine NLP with voice recognition for smart assistants, virtual agents, and voice-activated customer support.",
      },
      {
        title: "Multilingual Translation",
        desc: "Break down language barriers and provide seamless communication with automated translation services powered by NLP.",
      },
    ],
  },
  {
    id: 7,
    title:
      "UX/UI Design: Creating User-Friendly, Visually Stunning Experiences",
    desc: "Great user experience (UX) and user interface (UI) design are essential for engaging your audience and keeping them coming back. At NeoTranscendAI, we design user interfaces that are not only beautiful but also intuitive and easy to navigate.",
    detailContent:
      "Great user experience (UX) and user interface (UI) design are essential for engaging your audience and keeping them coming back. At NeoTranscendAI, we design user interfaces that are not only beautiful but also intuitive and easy to navigate.",
    whatWeOffer: [
      {
        title: "User-Centered Design",
        desc: "We put your users’ needs and behaviors at the forefront, ensuring your website or app is easy to use and navigate.",
      },
      {
        title: "Prototyping & Wireframing",
        desc: "Visualize the user journey with wireframes and prototypes that allow us to test and refine designs before development.",
      },
      {
        title: "Responsive Design",
        desc: "Whether on desktop or mobile, our designs are fully responsive, offering a seamless experience across all devices.",
      },
      {
        title: "Interactive Features",
        desc: "Engage users with interactive elements, micro-interactions, and animations that make your site or app fun to use.",
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
    img: "",
    website: "INC91",
    headline: "NeoTranscendAI : Revolutionizing IT and AI Developments",
    link: "",
  },
  {
    img: "",
    website: "Hindustan Bytes",
    headline:
      "NeoTranscendAI : Transforming the IT Landscape with Cutting Edge AI Solutions",
    link: "",
  },
];

// ceo interviews
export const ceoInterviews = [
  {
    source: "Interview",
    headline: "An insightful conversation with our CEO",
    videoId: "b-L_V-z-FDs",
  },
  {
    source: "Interview",
    headline: "Our CEO shares key insights on business growth",
    videoId: "K7pZ0nibsUg",
  },
];
