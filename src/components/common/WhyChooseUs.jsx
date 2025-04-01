import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
} from "../../constant";

const WhyChooseUs = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 30;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[5rem] bg-gradient-to-r from-secondary/30 to-primary/30">
      <div className="wrapper text-center text-white flex flex-col gap-7">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Why Choose Us
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos="fade-up" className="heading-2">
            Excellence in AI Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[40rem] mx-auto">
            At NeoTranscendAI, we combine innovation, expertise, and dedication
            to deliver transformative solutions that empower businesses to excel
            in a digital-first world.
          </p>
          <div data-aos="fade-up" className="w-full block lg:hidden">
            <img
              src={whyChooseUsPng}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose us"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-9">
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Innovative Solutions</h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  Our state-of-the-art AI solutions are designed to solve
                  complex business challenges, driving operational efficiency
                  and growth.
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Tailored Approach</h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  We understand that every business is unique. Our personalized
                  solutions are aligned with your goals to ensure maximum
                  impact.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="w-full lg:block hidden">
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div>
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Comprehensive Support</h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  From initial consultation to ongoing maintenance, our
                  end-to-end support ensures a seamless digital transformation
                  journey.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl">Proven Track Record</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-white/80 text-start mt-3">
                  With successful partnerships across various industries, we
                  have consistently delivered results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
