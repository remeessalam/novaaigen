import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.jpg";
import profileImg2 from "../../assets/images/profileimg-2.png";
import profileImg3 from "../../assets/images/profileimg-3.png";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    profileImg: profileImg1,
    name: "Jagdish Kumar",
    role: "CEO of Improve Business Solutions Pvt Ltd",
    desc: "“Working with NovaAIGen has been a transformative experience for our business. Their AI-powered solutions streamlined our operations and provided valuable insights. The dedication and innovation of their team exceeded our expectations. We now have a competitive edge, thanks to NovaAIGen's expertise.”",
  },
  {
    id: 2,
    profileImg: profileImg2,
    name: "Rahul Verma",
    role: "CTO of VisionTech Solutions",
    desc: "“NovaAIGen’s NLP solutions have revolutionized how we analyze customer feedback and automate critical processes. Their advanced language models provided unparalleled insights into user sentiment, while their text automation tools streamlined our operations. The team’s expertise in customizing NLP pipelines for our specific needs ensured measurable improvements in efficiency and customer satisfaction. Any organization looking to harness the power of language data should partner with them.”",
  },
  {
    id: 3,
    profileImg: profileImg3,
    name: "Ananya Sharma",
    role: "Founder of Finovate Capital",
    desc: "“The AI-driven insights provided by NovaAIGen have completely transformed our decision-making process. Their ability to understand our needs and deliver tailored solutions is truly commendable. Our business performance has improved significantly since we started working with them.”",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <div
          ref={sliderRef}
          className="keen-slider max-w-3xl"
          data-aos="fade-up"
        >
          {reviews.concat(reviews).map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[3rem] w-[3rem] min-w-[3rem] aspect-square rounded-full object-cover"
                  />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="800"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
