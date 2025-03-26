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
              Transforming Ideas into Digital Success
            </h2>
            <p className="desc">
              At AI Company, we are a leading technology company focused
              on driving business innovation through digital transformation. As
              one of the world’s fastest growing AI companies, we specialize in
              delivering cutting-edge solutions tailored to meet the evolving
              needs of businesses across industries. From web and app
              development to AI, blockchain, and custom software solutions, we
              are dedicated to helping companies harness the power of technology
              to solve complex challenges and achieve sustainable growth.
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
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
