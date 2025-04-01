import React, { useEffect } from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../components/landingPages/Contact";
import {
  aiDevBanner,
  aiLandingAbout,
  appDevBanner,
  appLandingAbout,
  iotDevBanner,
  iotLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import LandingServices from "../../components/landingPages/LandingServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import ContactForm from "../../components/common/ContactForm";
import Portfolio from "../../components/common/Portfolio";
import gsap from "gsap";
import Testimonials from "../../components/common/Testimonials";

const LandingPage = ({ page }) => {
  let bannerImg,
    bannerTitle,
    serviceName,
    bannerDesc =
      "We specialize in delivering cutting-edge IT solutions tailored to meet the unique needs of modern businesses.",
    aboutImg,
    aboutTitle,
    aboutDesc;

  if (page === "web") {
    bannerImg = webDevBanner;
    bannerTitle = "Crafting Scalable, High-Performance Websites";
    serviceName = "Web Development";
    aboutImg = webLandingAbout;
    aboutTitle = "Innovative Web Development Solutions for Modern Brands";
    aboutDesc =
      "Your website is the digital face of your business. At NeoTranscendAI, we specialize in building visually striking, responsive, and functional websites that not only capture attention but also drive conversions. Our web development services are tailored to fit your specific business requirements, ensuring that your site is designed for growth, performance, and user engagement";
  } else if (page === "app") {
    bannerImg = appDevBanner;
    bannerTitle = "Building High-Impact Mobile Apps";
    serviceName = "App Development";
    aboutImg = appLandingAbout;
    aboutTitle =
      "Building Apps that Elevate Your Business with Our App Development Services.";
    aboutDesc =
      "We understand that a mobile app is a powerful way to engage with your customers. Whether you're launching a new product, enhancing your services, or creating a business tool, our app development team crafts mobile apps that are robust, reliable, and user-friendly. Our apps drive user engagement, improve operational efficiency, and align with your business objectives.";
  } else if (page === "ai") {
    bannerImg = aiDevBanner;
    bannerTitle = "Transform Your Business with Cutting-Edge AI Development";
    serviceName = "AI Development";
    aboutImg = aiLandingAbout;
    aboutTitle =
      "Unlocking the Power of AI: Revolutionizing Business with Our AI Services.";
    aboutDesc =
      "Unlock the power of Artificial Intelligence to revolutionize your operations, elevate customer experiences, and drive growth. At NeoTranscendAI, we deliver state-of-the-art AI solutions tailored to your business needs.";
  } else {
    bannerImg = iotDevBanner;
    bannerTitle = "Innovative IoT Solutions to Transform Your Business";
    serviceName = "IoT Development";
    aboutImg = iotLandingAbout;
    aboutTitle = "Transforming Industries with IoT Solutions";
    aboutDesc =
      "Step into the future with Internet of Things (IoT) solutions designed to connect your devices, streamline operations, and deliver actionable insights. At NeoTranscendAI, we turn ideas into intelligent systems that redefine how businesses operate.";
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#to-top", {
      y: -200,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
    }).to("#to-bottom", {
      y: -100,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
      delay: 0.25,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={bannerImg}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        />
        <div className="bg-gradient-to-r to-[#54025591] from-[#540255a1_40%] absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {serviceName}
            </div>
            <h1 className="heading-1 text-white">{bannerTitle}</h1>
            <p className="text-white/90 desc">{bannerDesc}</p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>

      <ContactForm />

      <section id="about" className="pb-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {serviceName}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">{aboutTitle}</h2>
              <p className="desc">{aboutDesc}</p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <Portfolio page={page} />
      <WhyChooseUs />

      <section className="py-[5rem] bg-black text-white">
        <div className="wrapper text-center flex flex-col gap-3">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Solutions
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1 bg-gradient-to-r from-[#7186FF_40%] md:min-h-[5rem] to-[#A502A8_50%] bg-clip-text text-transparent"
          >
            Design & Revolution
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            At NeoTranscendAI LLP, we understand that in today’s digital-first
            world, your website is more than just an online presence—it’s the
            heart of your brand’s identity, a vital business tool, and often the
            first touchpoint for potential customers. In an era where first
            impressions matter more than ever, having a well-designed, fast, and
            responsive website is crucial to your business success. That’s why
            our website development services go beyond the basics—we aim to
            deliver not just a website, but a complete digital experience that
            drives engagement, boosts conversions, and empowers your business to
            grow.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/80 to-primary/80 md:from-secondary/30 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col translate-x-[30%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-x-[-330%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc text-white/70">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Faqs /> */}
      <Testimonials />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      {/* <BrandLogos /> */}
      <Contact />
    </>
  );
};

export default LandingPage;
