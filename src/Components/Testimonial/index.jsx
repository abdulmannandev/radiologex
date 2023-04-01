import React, { useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
// import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/react-splide/css/core";

import "./TestimonialItem.scss";

import TestimonialItem from "./TestimonialIte";

import { ReactComponent as NextBtn } from "./Assets/nextbtn.svg";
import { ReactComponent as PrevBtn } from "./Assets/prev-btn.svg";

import "./Testimonial.scss";

function Testimonial() {
  const testimonials = [
    {
      companyName: "Trusona",
      founder: "ORI EISEN, Founder &amp; CEO",
      text: "Trusona’s partnership with Radiologex meets the healthcare industry’s strict standards for security, providing passwordless authentication and identity proofing within the platform, mitigating the eight most common attack vectors. Together, Radiologex and Trusona offer healthcare professionals the ability to establish fast, secure communications channels and data transmissions from anywhere — and without the need for a password.",
      rating: 3,
    },
    {
      companyName: "Acme Inc.",
      founder: "John Doe &amp; CEO",
      text: "I found their work to be very effective at solving our problems. The team was very professional and knowledgeable. I would recommend this service to anyone.",
      rating: 5,
    },
    {
      companyName: "Apple Inc.",
      founder: "Steve Jobs &amp; CEO",
      text: "This service has been essential for collaborating and ensuring consistency across teams and iterating drafts consistently with minimum friction management smoother -across production & facilities team impatffic coverage:",
      rating: 4,
    },
    {
      companyName: "Google",
      founder: "Sunder Pichai &amp; CEO",
      text: "Really improved productivity no spam: I personally value reliable on how ever entering and dragging encounter cycles visually dash plan load voice spell throughout messages functionality within similiar improvement indeed bear your requirements summary right places iron sweet feeling satisfaction",
      rating: 5,
    },
  ];
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    splideRef.current.go("-1");
  };

  const handleNextClick = () => {
    splideRef.current.go("+1");
  };

  return (
    <section className="pt-lg pb-lg testimonials">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-18 col-md-20 col-24">
            {/* // section header  */}
            <div className="section-head text-center section-head--left">
              <h2 className="section-heading">Testimonials</h2>
            </div>

            <Splide
              ref={splideRef}
              options={{
                rewind: true,
                gap: "0rem",
                type: "loop",
                perPage: 1,
                focus: "center",
                isNavigation: false,
                autoHeight: true,
                pagination: false,
              }}
              hasTrack={false}
              aria-label="..."
            >
              <SplideTrack>
                {testimonials.map((item, index) => (
                  <SplideSlide key={index}>
                    <TestimonialItem
                      {...item}
                      key={`main-companyName${index}`}
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>

              <div className="buttons mt-4">
                <button
                  className="button button--prev-btn"
                  onClick={handlePrevClick}
                >
                  <PrevBtn />
                </button>
                <button
                  className="button button--next-btn"
                  onClick={handleNextClick}
                >
                  <NextBtn />
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
