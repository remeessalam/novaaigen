import React from "react";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section className="py-[5rem] bg-black text-white wrapper">
      <div
        data-aos="fade-right"
        className="gradient-rounded-text-box mx-auto lg:mx-0"
      >
        About Us
      </div>
      <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
        <div data-aos="fade-right" className="flex h-full flex-col gap-7">
          <div className="flex flex-col gap-7 text-center lg:text-start">
            <h2 className="heading-2">
              Empowering Your Digital Transformation
            </h2>
            <p className="desc">
              At NovaAIGen, we are passionate about transforming businesses with
              intelligent digital solutions. Our expertise in AI, and custom
              software development ensures your organization stays ahead in
              today’s competitive landscape. With a commitment to innovation and
              collaboration, we deliver tailored technology solutions that drive
              measurable results and long-term growth.
            </p>
          </div>
          <div className="flex gap-5 mt-4 justify-center lg:justify-start">
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
            <Link to="/services" className="secondary-btn">
              Our Services
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="h-full">
          <img
            src={aboutUsImg}
            className="object-contain max-h-[30rem]"
            alt="About NovaAIGen"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
